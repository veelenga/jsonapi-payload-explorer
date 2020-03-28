const TEMP_ID = 'temp-id';

export default function serialize(object, cache = new Map()) {
  if (!object.data) return {};
  return serializeObject(object.data, object.included || [], cache);
}

function serializeObject(data, included, cache) {
  let object = {
    id: data.id,
    tempId: data[TEMP_ID],
    uuid: uuid(data),
    type: data.type,
    attributes: data.attributes || {},
    method: data.method,
    children: []
  };

  cache.set(object.uuid, object);

  let { relationships } = data;

  for (let key in relationships) {
    let relationshipData = relationships[key]["data"];

    if (Array.isArray(relationshipData)) {
      let children = relationshipData
        .map((relationship) => serializeRelationship(relationship, included, cache));
      object.children.push(...children);
    } else {
      let child = serializeRelationship(relationshipData, included, cache);
      object.children.push(child);
    }
  }

  return object;
}

function serializeRelationship(data, included, cache) {
  let visited_relation = cache.get(uuid(data));
  if (visited_relation) {
    return {
      ...visited_relation,
      circular: true,
      children: []
    }
  }

  let relationshipData = findInIncluded(data, included) || data;
  let relationship = serializeObject(relationshipData, included, cache);

  if (!relationship.method) relationship.method = data.method;

  return relationship;
}

function findInIncluded(data, included) {
  let { id, type, [TEMP_ID]: tempId } = data;

  if (!!id) {
    return included.find((data) => data.type === type && data.id === id);
  } else if (!!tempId) {
    return included.find((data) => data.type === type && data[TEMP_ID] === tempId);
  }

  return null;
}

function uuid(data) {
  return `${data.type}-${data.id || data[TEMP_ID]}`;
}
