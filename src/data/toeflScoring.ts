/**
 * TOEFL ITP Scoring & Conversion Tables
 * Scale:
 * Section 1 (Listening): 31 - 68
 * Section 2 (Structure): 31 - 68
 * Section 3 (Reading): 31 - 67
 * Total Score = ((Section 1 + Section 2 + Section 3) / 3) * 10 (Range: 310 - 677)
 */

// Scaled conversion lookup based on standard TOEFL ITP raw-to-scaled tables
export const LISTENING_CONVERSION: Record<number, number> = {
  0: 31, 1: 31, 2: 31, 3: 32, 4: 32, 5: 33, 6: 34, 7: 35, 8: 36, 9: 37,
  10: 38, 11: 39, 12: 40, 13: 41, 14: 42, 15: 43, 16: 44, 17: 45, 18: 46, 19: 47,
  20: 48, 21: 49, 22: 49, 23: 50, 24: 51, 25: 51, 26: 52, 27: 52, 28: 53, 29: 54,
  30: 54, 31: 55, 32: 56, 33: 56, 34: 57, 35: 58, 36: 58, 37: 59, 38: 60, 39: 61,
  40: 62, 41: 62, 42: 63, 43: 64, 44: 65, 45: 66, 46: 66, 47: 67, 48: 68, 49: 68, 50: 68
};

export const STRUCTURE_CONVERSION: Record<number, number> = {
  0: 31, 1: 31, 2: 31, 3: 31, 4: 33, 5: 35, 6: 36, 7: 37, 8: 38, 9: 40,
  10: 41, 11: 42, 12: 43, 13: 44, 14: 45, 15: 46, 16: 47, 17: 48, 18: 49, 19: 50,
  20: 51, 21: 52, 22: 53, 23: 54, 24: 55, 25: 56, 26: 57, 27: 58, 28: 59, 29: 60,
  30: 61, 31: 62, 32: 63, 33: 64, 34: 65, 35: 66, 36: 67, 37: 67, 38: 68, 39: 68, 40: 68
};

export const READING_CONVERSION: Record<number, number> = {
  0: 31, 1: 31, 2: 31, 3: 31, 4: 32, 5: 33, 6: 34, 7: 35, 8: 36, 9: 37,
  10: 38, 11: 39, 12: 40, 13: 41, 14: 42, 15: 43, 16: 44, 17: 45, 18: 46, 19: 47,
  20: 48, 21: 49, 22: 50, 23: 50, 24: 51, 25: 52, 26: 52, 27: 53, 28: 54, 29: 54,
  30: 55, 31: 55, 32: 56, 33: 57, 34: 57, 35: 58, 36: 59, 37: 59, 38: 60, 39: 61,
  40: 61, 41: 62, 42: 63, 43: 63, 44: 64, 45: 65, 46: 65, 47: 66, 48: 66, 49: 67, 50: 67
};

export function getScaledListening(rawScore: number, maxScore: number = 50): number {
  const normalizedRaw = Math.min(50, Math.max(0, Math.round((rawScore / maxScore) * 50)));
  return LISTENING_CONVERSION[normalizedRaw] || 31;
}

export function getScaledStructure(rawScore: number, maxScore: number = 40): number {
  const normalizedRaw = Math.min(40, Math.max(0, Math.round((rawScore / maxScore) * 40)));
  return STRUCTURE_CONVERSION[normalizedRaw] || 31;
}

export function getScaledReading(rawScore: number, maxScore: number = 50): number {
  const normalizedRaw = Math.min(50, Math.max(0, Math.round((rawScore / maxScore) * 50)));
  return READING_CONVERSION[normalizedRaw] || 31;
}

export function calculateEstimatedTotalScore(
  listeningScaled: number,
  structureScaled: number,
  readingScaled: number
): number {
  const avg = (listeningScaled + structureScaled + readingScaled) / 3;
  return Math.min(677, Math.max(310, Math.round(avg * 10)));
}

export function getCEFRLevel(totalScore: number): { level: string; description: string } {
  if (totalScore >= 627) {
    return { level: 'C1 (Advanced)', description: 'Can understand demanding, longer texts and recognize implicit meaning fluently.' };
  }
  if (totalScore >= 543) {
    return { level: 'B2 (Upper Intermediate)', description: 'Can understand the main ideas of complex text on both concrete and abstract topics.' };
  }
  if (totalScore >= 460) {
    return { level: 'B1 (Intermediate)', description: 'Can understand the main points of clear standard input on familiar matters.' };
  }
  return { level: 'A2 (Elementary)', description: 'Can understand basic sentences and frequently used expressions related to immediate areas.' };
}

export function generateWeaknessAnalysis(
  tagBreakdown: Record<string, { total: number; correct: number; accuracy: number }>
): { weaknesses: string[]; strengths: string[]; recommendations: string[] } {
  const weaknesses: string[] = [];
  const strengths: string[] = [];
  const recommendations: string[] = [];

  const entries = Object.entries(tagBreakdown);

  // Sort by lowest accuracy first
  entries.sort((a, b) => a[1].accuracy - b[1].accuracy);

  entries.forEach(([tag, stat]) => {
    if (stat.total >= 1) {
      if (stat.accuracy < 60) {
        weaknesses.push(`${tag} (${Math.round(stat.accuracy)}% accuracy)`);
        
        // Add tailored recommendations
        if (tag.toLowerCase().includes('inversion')) {
          recommendations.push('Review negative expressions and conditionals that require subject-auxiliary inversion (e.g. "Rarely does...", "Had I known...").');
        } else if (tag.toLowerCase().includes('agreement')) {
          recommendations.push('Practice identifying true sentence subjects when separated by prepositional phrases or appositives.');
        } else if (tag.toLowerCase().includes('inference')) {
          recommendations.push('Focus on drawing logical conclusions supported by textual facts without overextending beyond the passage.');
        } else if (tag.toLowerCase().includes('vocabulary') || tag.toLowerCase().includes('context')) {
          recommendations.push('Use context clues and word parts (roots, prefixes, suffixes) instead of trying to memorize in isolation.');
        } else if (tag.toLowerCase().includes('part a') || tag.toLowerCase().includes('short conversation')) {
          recommendations.push('Pay close attention to the second speaker in Part A; the answer is almost always a paraphrase of their line.');
        } else if (tag.toLowerCase().includes('parallel')) {
          recommendations.push('Check items joined by coordinating conjunctions (and, but, or) to ensure matching grammatical forms.');
        }
      } else if (stat.accuracy >= 80) {
        strengths.push(`${tag} (${Math.round(stat.accuracy)}% mastery)`);
      }
    }
  });

  if (recommendations.length === 0) {
    recommendations.push('Great performance overall! Maintain your skills by taking full-length timed simulations.');
    recommendations.push('Review any occasional missed questions to eliminate minor careless errors.');
  }

  return { weaknesses, strengths, recommendations };
}
