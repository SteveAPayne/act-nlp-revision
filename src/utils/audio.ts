export function playClick(soundEnabled: boolean) {
  if (!soundEnabled) return;

  const audio = new Audio("/sounds/click.mp3");
  audio.volume = 0.4;
  audio.play();
}
