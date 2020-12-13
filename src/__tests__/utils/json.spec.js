import { safeJSONParse, formattedJSON } from "../../utils/json.js"

describe('safeJSONParse', () => {
  test('it should return null if param is not string', () => {
    expect(safeJSONParse([])).toBe(null)
  });

  test('it should return parsed json if param can be parsed', () => {
    expect(safeJSONParse('{}')).toEqual({});
  });

  test('it should return null if param can not be parsed', () => {
    expect(safeJSONParse('a: 1')).toBe(null);
  });
});

describe('formattedJSON', () => {
  test('it stringifies the obj', () => {
    expect(formattedJSON({a: 1})).toEqual("{\n  \"a\": 1\n}")
  })
});
