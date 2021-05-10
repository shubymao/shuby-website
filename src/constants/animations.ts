import { Effect } from '@typeDefs/alias';

export const RIGHT_HIDDEN: Effect = {
  duration: 0.7,
  opacity: 0,
  x: 50,
  overwrite: true,
};

export const BOTTOM_HIDDEN: Effect = {
  duration: 0.7,
  opacity: 0,
  y: 50,
  overwrite: true,
};

export const BOTTOM_HIDDEN_STAGGER: Effect = {
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
  y: 50,
  overwrite: true,
};

export const HIDDEN: Effect = {
  opacity: 0,
};

export const NORMAL: Effect = {
  opacity: 1,
  y: 0,
  x: 0,
};
