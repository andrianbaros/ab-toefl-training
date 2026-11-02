// Speech Synthesis & Natural Voice Engine for TOEFL Listening
export interface VoiceProfile {
  voice: SpeechSynthesisVoice;
  isNatural: boolean;
  isUsEnglish: boolean;
  gender: 'male' | 'female' | 'neutral';
  score: number;
}

export interface PlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  currentLineIndex: number;
  totalLines: number;
  currentSpeaker: string;
  currentText: string;
}

class TTSService {
  private voices: SpeechSynthesisVoice[] = [];
  private voicesLoaded: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isCancelled: boolean = false;
  private currentRate: number = 1.0;
  private currentPitch: number = 1.0;
  private currentVolume: number = 1.0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
    }
  }

  private initVoices(): Promise<SpeechSynthesisVoice[]> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        resolve([]);
        return;
      }

      const load = () => {
        const available = window.speechSynthesis.getVoices();
        if (available.length > 0) {
          this.voices = available;
          this.voicesLoaded = true;
          resolve(available);
        }
      };

      load();
      if (!this.voicesLoaded) {
        window.speechSynthesis.onvoiceschanged = () => {
          load();
        };
        // Fallback timeout in case onvoiceschanged does not fire
        setTimeout(() => {
          if (!this.voicesLoaded) {
            this.voices = window.speechSynthesis.getVoices();
            this.voicesLoaded = true;
            resolve(this.voices);
          }
        }, 500);
      }
    });
  }

  public async getVoices(): Promise<SpeechSynthesisVoice[]> {
    if (!this.voicesLoaded || this.voices.length === 0) {
      await this.initVoices();
    }
    return this.voices;
  }

  // Filter and rank English voices by natural quality
  public async getRankedEnglishVoices(): Promise<VoiceProfile[]> {
    const all = await this.getVoices();
    const englishVoices = all.filter((v) => v.lang.startsWith('en'));

    return englishVoices
      .map((voice) => {
        const name = voice.name.toLowerCase();
        const lang = voice.lang.toLowerCase();
        const isUsEnglish = lang === 'en-us' || lang.startsWith('en_us');
        const isNatural =
          name.includes('natural') ||
          name.includes('neural') ||
          name.includes('online') ||
          name.includes('enhanced') ||
          name.includes('premium') ||
          name.includes('google');

        let gender: 'male' | 'female' | 'neutral' = 'neutral';
        const maleNames = ['christopher', 'guy', 'eric', 'david', 'mark', 'george', 'daniel', 'oliver', 'male', 'ryan', 'tom'];
        const femaleNames = ['jenny', 'aria', 'ana', 'michelle', 'zira', 'samantha', 'victoria', 'karen', 'female', 'ava', 'allison', 'susan'];

        if (maleNames.some((n) => name.includes(n))) {
          gender = 'male';
        } else if (femaleNames.some((n) => name.includes(n))) {
          gender = 'female';
        }

        // Calculate realism score
        let score = 0;
        if (isNatural) score += 50;
        if (name.includes('natural')) score += 30;
        if (isUsEnglish) score += 20;
        if (voice.localService === false) score += 10; // Online natural neural voices

        return {
          voice,
          isNatural,
          isUsEnglish,
          gender,
          score,
        };
      })
      .sort((a, b) => b.score - a.score);
  }

  // Select the highest fidelity voice matching desired gender/role
  public async getBestVoice(role: 'male' | 'female' | 'narrator'): Promise<SpeechSynthesisVoice | null> {
    const profiles = await this.getRankedEnglishVoices();
    if (profiles.length === 0) {
      const fallback = (await this.getVoices()).find((v) => v.lang.startsWith('en'));
      return fallback || null;
    }

    if (role === 'male') {
      const male = profiles.find((p) => p.gender === 'male');
      if (male) return male.voice;
    } else if (role === 'female') {
      const female = profiles.find((p) => p.gender === 'female');
      if (female) return female.voice;
    }

    // Default to the highest ranked English natural voice
    return profiles[0]?.voice || null;
  }

  // Speak a sequence of dialogue lines with authentic role-based voices
  public async playDialogue(
    lines: { speaker: string; text: string }[],
    options: {
      rate?: number;
      volume?: number;
      pitch?: number;
      onStateChange?: (state: PlaybackState) => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    } = {}
  ): Promise<void> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (options.onError) {
        options.onError(new Error('Speech Synthesis is not supported in this browser.'));
      }
      return;
    }

    this.stop();
    this.isCancelled = false;
    this.currentRate = options.rate ?? 0.95; // 0.95 is ideal for clear TOEFL comprehension
    this.currentVolume = options.volume ?? 1.0;
    this.currentPitch = options.pitch ?? 1.0;

    const maleVoice = await this.getBestVoice('male');
    const femaleVoice = await this.getBestVoice('female');
    const narratorVoice = await this.getBestVoice('narrator');

    const totalLines = lines.length;

    for (let i = 0; i < totalLines; i++) {
      if (this.isCancelled) break;

      const line = lines[i];
      const speakerLower = line.speaker.toLowerCase();

      let assignedVoice = narratorVoice;
      let linePitch = this.currentPitch;

      if (speakerLower.includes('man') || speakerLower.includes('boy') || speakerLower.includes('male')) {
        assignedVoice = maleVoice || narratorVoice;
      } else if (speakerLower.includes('woman') || speakerLower.includes('girl') || speakerLower.includes('female')) {
        assignedVoice = femaleVoice || narratorVoice;
      } else if (speakerLower.includes('narrator')) {
        assignedVoice = narratorVoice;
        linePitch = 1.02;
      } else if (speakerLower.includes('professor')) {
        assignedVoice = maleVoice || narratorVoice;
        linePitch = 0.96;
      } else if (speakerLower.includes('student')) {
        assignedVoice = femaleVoice || narratorVoice;
        linePitch = 1.04;
      }

      if (options.onStateChange) {
        options.onStateChange({
          isPlaying: true,
          isPaused: false,
          currentLineIndex: i,
          totalLines,
          currentSpeaker: line.speaker,
          currentText: line.text,
        });
      }

      await this.speakUtterance(line.text, assignedVoice, {
        rate: this.currentRate,
        pitch: linePitch,
        volume: this.currentVolume,
      });

      // Brief conversational pause between turns (350ms, longer 650ms before narrator prompt)
      if (i < totalLines - 1 && !this.isCancelled) {
        const isNextNarrator = lines[i + 1]?.speaker.toLowerCase().includes('narrator');
        await this.delay(isNextNarrator ? 650 : 380);
      }
    }

    if (options.onStateChange) {
      options.onStateChange({
        isPlaying: false,
        isPaused: false,
        currentLineIndex: totalLines,
        totalLines,
        currentSpeaker: '',
        currentText: '',
      });
    }

    if (!this.isCancelled && options.onEnd) {
      options.onEnd();
    }
  }

  // Play a single piece of text (monologue or question prompt)
  public async playText(
    text: string,
    options: {
      role?: 'male' | 'female' | 'narrator';
      rate?: number;
      volume?: number;
      pitch?: number;
      onEnd?: () => void;
      onError?: (err: any) => void;
    } = {}
  ): Promise<void> {
    this.stop();
    this.isCancelled = false;

    const voice = await this.getBestVoice(options.role || 'narrator');

    await this.speakUtterance(text, voice, {
      rate: options.rate || 0.95,
      pitch: options.pitch || 1.0,
      volume: options.volume || 1.0,
    });

    if (!this.isCancelled && options.onEnd) {
      options.onEnd();
    }
  }

  private speakUtterance(
    text: string,
    voice: SpeechSynthesisVoice | null,
    settings: { rate: number; pitch: number; volume: number }
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isCancelled) {
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.lang = voice?.lang || 'en-US';
      utterance.rate = settings.rate;
      utterance.pitch = settings.pitch;
      utterance.volume = settings.volume;

      utterance.onend = () => {
        this.currentUtterance = null;
        resolve();
      };

      utterance.onerror = (e) => {
        this.currentUtterance = null;
        if (e.error === 'canceled' || e.error === 'interrupted') {
          resolve();
        } else {
          resolve(); // Resolve to not break the dialogue flow
        }
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    });
  }

  public pause(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  }

  public resume(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  public stop(): void {
    this.isCancelled = true;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const ttsService = new TTSService();
