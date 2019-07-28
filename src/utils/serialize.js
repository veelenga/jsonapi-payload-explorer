const TEMP_ID = 'temp-id';

export default function serialize(object) {
  if (!object.data) return {};
  return serializeObject(object.data, object.included || []);
}

function serializeObject(data, included) {
  let object = {
    id: data.id,
    tempId: data[TEMP_ID],
    uuid: `${data.type}-${data.id || data[TEMP_ID]}`,
    type: data.type,
    attributes: data.attributes || {},
    method: data.method,
    children: []
  };

  let { relationships } = data;

  for (let key in relationships) {
    let relationshipData = relationships[key]["data"];

    if (Array.isArray(relationshipData)) {
      let children = relationshipData.map((relationship) => (
        serializeRelationship(relationship, included)
      ));
      object.children.push(...children);
    } else {
      let child = serializeRelationship(relationshipData, included);
      object.children.push(child);
    }
  }

  return object;
}

function serializeRelationship(data, included) {
  let relationshipData = findInIncluded(data, included) || data;
  let relationship = serializeObject(relationshipData, included);

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
