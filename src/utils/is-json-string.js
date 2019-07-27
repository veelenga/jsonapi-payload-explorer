export default function isJSONString(str) {
  if(typeof(str) !== 'string') return false;
  try { JSON.parse(str); } catch (_) { return false; }
  return true;
}
