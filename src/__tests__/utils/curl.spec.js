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
});
