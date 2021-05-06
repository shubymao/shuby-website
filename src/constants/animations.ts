import { Effect } from '@typeDefs/alias';

export const BOTTOM_HIDDEN: Effect = {
  opacity: 0,
  y: 50,
};

export const HIDDEN: Effect = {
  opacity: 0,
};

export const NORMAL: Effect = {
  duration: 0.8,
  opacity: 1,
  y: 0,
  x: 0,
};

export const NORMAL_STAGGER: Effect = {
  duration: 0.8,
  stagger: 0.2,
  opacity: 1,
  y: 0,
  x: 0,
};
