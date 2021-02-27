import decorateForTree from "../../utils/tree.js"

describe('decorateForTree', () => {
  test('it should return empty object if object is empty', () => {
    expect(decorateForTree({})).toEqual({})
  });

  test('it should decorate object with string attribute', () => {
    let obj = {
      type: 'users',
      id: 1,
      attributes: {
        s: 'foo'
      },
      children: []
    }

    let decorated = decorateForTree(obj)

    expect(decorated).toMatchObject({
      attributes: { s: 'foo' },
      children: [],
      expanded: true,
      id: 1,
      subtitleHeight: 11,
      title: 'users > 1 > id',
      type: 'users',
    })

    expect(decorated.subtitle.props.children.length).toEqual(1)
    expect(decorated.subtitle.props.children[0].props.children).toEqual(
      ['s', ': ', 'foo']
    )
  });

  test('it should decorate object with boolean attribute', () => {
    let obj = {
      type: 'users',
      tempId: 'xxx',
      attributes: {
        isPrimary: true
      },
      children: []
    }

    let decorated = decorateForTree(obj)

    expect(decorated).toMatchObject({
      attributes: { isPrimary: true },
      children: [],
      expanded: true,
      subtitleHeight: 11,
      title: 'users > xxx > temp-id',
      type: 'users',
    })

    expect(decorated.subtitle.props.children.length).toEqual(1)
    expect(decorated.subtitle.props.children[0].props.children).toEqual(
      ['isPrimary', ': ', 'true']
    )
  });
});
