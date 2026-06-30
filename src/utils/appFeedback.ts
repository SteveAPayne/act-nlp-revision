import { playClick } from "./audio";
import { triggerHaptic } from "./haptics";

export function feedback(soundEnabled: boolean, hapticsEnabled: boolean) {
  playClick(soundEnabled);
  triggerHaptic(hapticsEnabled);
}
