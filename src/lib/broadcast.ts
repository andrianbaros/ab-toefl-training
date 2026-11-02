import { ExaminerSyncMessage } from '@/types';

const CHANNEL_NAME = 'ab_toefl_examiner_channel';
const STORAGE_SYNC_KEY = 'ab_toefl_examiner_sync_event';

type SyncCallback = (msg: ExaminerSyncMessage) => void;

class SyncChannel {
  private channel: BroadcastChannel | null = null;
  private listeners: Set<SyncCallback> = new Set();
  private isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      if ('BroadcastChannel' in window) {
        try {
          this.channel = new BroadcastChannel(CHANNEL_NAME);
          this.channel.onmessage = (event) => {
            this.notifyListeners(event.data);
          };
          this.isSupported = true;
        } catch {
          this.isSupported = false;
        }
      }

      // Fallback via window storage event
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_SYNC_KEY && e.newValue) {
          try {
            const data: ExaminerSyncMessage = JSON.parse(e.newValue);
            this.notifyListeners(data);
          } catch {
            // ignore
          }
        }
      });
    }
  }

  private notifyListeners(msg: ExaminerSyncMessage) {
    this.listeners.forEach((callback) => callback(msg));
  }

  public subscribe(callback: SyncCallback): () => void {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  public broadcast(msg: ExaminerSyncMessage) {
    if (this.channel && this.isSupported) {
      this.channel.postMessage(msg);
    }
    // Also dispatch to localStorage so cross-tab works in all cases
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_SYNC_KEY, JSON.stringify(msg));
      } catch {
        // ignore
      }
    }
  }
}

export const syncChannel = new SyncChannel();
