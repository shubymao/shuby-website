import { BOTTOM_HIDDEN, HIDDEN, NORMAL, RIGHT_HIDDEN } from '@constants/animations';
import { Effect } from '@typeDefs/alias';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function slideOut(element: HTMLElement, callBack?: () => void): void {
  const effect: Effect = {
    onComplete: () => {
      element.classList.add('hidden');
      callBack();
    },
    ...RIGHT_HIDDEN,
  };
  gsap.to(element, effect);
}

export function hideElements(): void {
  hidden('.section-wrapper');
  hidden('.card-wrapper');
}

export default function initAnimation(): void {
  showOnScroll('.section-wrapper', 20);
  showOnScrollStagger('.card-wrapper', 30);
}

export function showOnScroll(elements: string, offset = 0): void {
  ScrollTrigger.batch(elements, {
    onEnter: (batch) => {
      gsap.to(batch, NORMAL);
    },
    start: `top+=${offset} bottom`,
    once: true,
  });
}

export function showOnScrollStagger(elements: string, offset = 0): void {
  ScrollTrigger.batch(elements, {
    onEnter: (batch) => {
      gsap.set(batch, BOTTOM_HIDDEN);
      gsap.to(batch, NORMAL);
    },
    start: `top+=${offset} bottom`,
    once: true,
  });
}

export function hidden(element: string): void {
  gsap.set(element, HIDDEN);
}
