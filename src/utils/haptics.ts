export function triggerHaptic(hapticsEnabled: boolean) {
  if (!hapticsEnabled) return;

  if ("vibrate" in navigator) {
    navigator.vibrate(20);
  }
}
