import hashCode from '../../utils/string';

describe('hashCode', () => {
  test('it returns hashCode of the string', () => {
    expect(hashCode("some-str")).toEqual(1503694296);
  });

  test('it returns hashCode of the empty string', () => {
    expect(hashCode('')).toEqual(0);
  });

  test('it returns equal hash code for equal strings', () => {
    let h1 = hashCode('123456789');
    let h2 = hashCode('123456789');

    expect(h1).toEqual(h2);
  });
});
