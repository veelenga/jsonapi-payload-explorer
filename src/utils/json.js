export function safeJSONParse(str) {
  if(typeof(str) !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

export function formattedJSON(obj) {
  return JSON.stringify(obj, null, 2);
}
