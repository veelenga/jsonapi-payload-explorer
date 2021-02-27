import { tryParseCURL } from "../../utils/curl.js"

describe('tryParseCURL', () => {
  test('it should return null if string is not cURL', () => {
    expect(tryParseCURL('{}')).toBe(null)
  });

  test('it should return null if curl does not have JSON body', () => {
    let command = `
      curl -d "@data.txt" -X POST http://localhost:3000/data
    `
    expect(tryParseCURL(command)).toEqual(null)
  });

  test('it should return body if curl have JSON body', () => {
    let command = `
      curl -d '{"key1":"value1", "key2":"value2"}'\
           -H "Content-Type: application/json" \
           -X POST http://localhost:3000/data
    `
    expect(tryParseCURL(command))
      .toEqual("{\"key1\":\"value1\", \"key2\":\"value2\"}")
  });

  test('it should preprocess --data-binary flag and filter out the headers', () => {
    let command = `
      curl -X 'PATCH' \
          -H 'Connection: keep-alive' \
          -H 'Pragma: no-cache' \
          -H 'Cache-Control: no-cache' \
          -H 'sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
          -H 'Accept: application/vnd.api+json' \
          -H 'sec-ch-ua-mobile: ?0' \
          -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36' \
          -H 'Content-Type: application/vnd.api+json' \
          -H 'Origin: http://localhost:4200' \
          -H 'Sec-Fetch-Site: same-site' \
          -H 'Sec-Fetch-Mode: cors' \
          -H 'Sec-Fetch-Dest: empty' \
          -H 'Referer: http://localhost:4200/' \
          -H 'Accept-Language: en-US,en;q=0.9,uk;q=0.8,ru;q=0.7' \
          --data-binary '{"key1":"value1", "key2":"value2"}' \
          --compressed
    `
    expect(tryParseCURL(command)).toEqual("{\"key1\":\"value1\", \"key2\":\"value2\"}")
  });
});
