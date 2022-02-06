import { Effect } from '@typeDefs/alias';

export const RIGHT_HIDDEN: Effect = {
  duration: 0.7,
  opacity: 0,
  x: 50,
  overwrite: true,
};

export const HIDDEN: Effect = {
  opacity: 0,
};

export const BOTTOM_HIDDEN: Effect = {
  opacity: 0,
  y: 50,
};

export const NORMAL: Effect = {
  duration: 1.1,
  stagger: 0.4,
  opacity: 1,
  y: 0,
  x: 0,
};
