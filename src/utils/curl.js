import parseCURL from 'parse-curl';

export function tryParseCURL(str) {
  str = str.trim();

  if (!str.startsWith('curl')) {
    return null;
  }

  // preprocess str
  str = str.replace('--data-binary $', '-d ');
  str = str.replace('--data-binary', '-d ');

  const request = parseCURL(str);

  if ((request.header['Content-Type'] || '').indexOf('json') > 1 && request.body) {
    return request.body;
  }

  return null;
}
