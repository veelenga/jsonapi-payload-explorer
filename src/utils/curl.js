import parseCURL from 'parse-curl';

export function tryParseCURL(str) {
  str = str.trim();

  if (!str.startsWith('curl')) {
    return null;
  }

  // preprocess str
  str = str.replace('--data-binary $', '-d ');
  str = str.replace('--data-binary', '-d ');

  let request;
  try {
    request = parseCURL(str);
  } catch {
    return null;
  }

  if (!request || !request.header) {
    return null;
  }

  if ((request.header['Content-Type'] || '').indexOf('json') > 1 && request.body) {
    return request.body;
  }

  return null;
}
