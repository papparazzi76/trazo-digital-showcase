export type EasingFunction = (t: number) => number;

export const easeOutCubic: EasingFunction = (t) => 1 - Math.pow(1 - t, 3);

export function smoothScrollTo(targetY: number, duration = 1100, easing: EasingFunction = easeOutCubic) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const t = Math.min(1, elapsed / duration);
    const eased = easing(t);
    window.scrollTo({ top: Math.round(startY + distance * eased), left: 0, behavior: 'auto' });
    if (elapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function smoothScrollToElement(
  el: HTMLElement,
  options?: { offset?: number; duration?: number; easing?: EasingFunction }
) {
  const offset = options?.offset ?? 0;
  const duration = options?.duration ?? 1100;
  const easing = options?.easing ?? easeOutCubic;
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + window.pageYOffset - offset;
  smoothScrollTo(targetY, duration, easing);
}
