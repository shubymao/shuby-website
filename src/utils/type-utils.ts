export function isArray(a): boolean {
  return !!a && a.constructor === Array;
}

export function isObject(a): boolean {
  return !!a && a.constructor === Object;
}
