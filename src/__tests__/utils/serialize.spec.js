import serialize from "../../utils/serialize"

describe('serialize', () => {
  test('it should skip null to-one relationships', () => {
    let payload = {
      data: {
        id: '1',
        type: 'users',
        relationships: {
          author: { data: null }
        }
      }
    }

    expect(serialize(payload).children).toEqual([])
  });

  test('it should skip non-object entries in to-many relationships', () => {
    let payload = {
      data: {
        id: '1',
        type: 'users',
        relationships: {
          comments: { data: [null, 'bogus', { id: '2', type: 'comments' }] }
        }
      }
    }

    let children = serialize(payload).children
    expect(children.length).toEqual(1)
    expect(children[0].type).toEqual('comments')
  });
});
