import { useEffect, useState } from 'react';
import { alignment } from '@typeDefs/layout';

export default function getTextAlignClass(align?: alignment): string {
  if (!align) return '';
  if (align === 'center') return 'text-center';
  if (align === 'left') return 'text-left';
  return 'text-right';
}

export function useDelayState(state: boolean, delayTime: number, initState: boolean): boolean {
  const [delayState, setDelayState] = useState(initState);
  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout>;
    timeoutId = setTimeout(() => setDelayState(state), delayTime);
    return () => clearTimeout(timeoutId);
  }, [state, delayTime, delayState]);
  return delayState;
}

export function toggleBodyLock(lock: boolean): void {
  if (lock) {
    document.querySelector('body').classList.add('overflow-hidden');
  } else document.querySelector('body').classList.remove('overflow-hidden');
}
