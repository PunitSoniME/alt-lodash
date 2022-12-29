/**
 *
 * @param value The value to check
 * @returns true if passed array is like an ArrayBuffer
 */
const isArrayBuffer = (value: any): boolean => value instanceof ArrayBuffer;
export default isArrayBuffer;
