
export function deepAssign(target, ...sources) {
  for(const source of sources) {
    for(let k in source) {
      let vs = source[k], vt = target[k]
      if (Object(vs) == vs && Object(vt) === vt) {
        target[k] = deepAssign(vt, vs)
        continue
      }
      target[k] = source[k]
    }
  }
  return target
}
