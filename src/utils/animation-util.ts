import { NORMAL, NORMAL_STAGGER, BOTTOM_HIDDEN } from '@constants/animations';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initAnimation(): void {
  showOnScroll('.section-wrapper');
  showOnScrollStagger('.card-wrapper');
}

export function showOnScroll(elements: string): void {
  gsap.set(elements, BOTTOM_HIDDEN);
  ScrollTrigger.batch(elements, {
    onEnter: (batch) => {
      gsap.to(batch, NORMAL);
    },
    start: 'top bottom-=20',
    once: true,
  });
}

export function showOnScrollStagger(elements: string): void {
  gsap.set(elements, BOTTOM_HIDDEN);
  ScrollTrigger.batch(elements, {
    onEnter: (batch) => {
      gsap.to(batch, NORMAL_STAGGER);
    },
    start: 'top bottom-=20',
    once: true,
  });
}
