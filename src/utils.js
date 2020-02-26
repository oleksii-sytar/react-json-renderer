export const getValueType = val =>
  Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, '$1');

export function deeepNames(obj, parent = 'root') {
  return Object.entries(obj).map(value => {
    const key = value[0];
    const val = value[1];
    const type = getValueType(val);
    const currentName = `${parent}.${key}`;

    if(type === 'Array' || type === 'Object') {
      return [
        currentName,
        ...deeepNames(val, currentName)
      ];
    }
    return parent;
  }).flat();
}