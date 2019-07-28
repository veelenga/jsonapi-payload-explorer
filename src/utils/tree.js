import React from 'react';

export default function decorateForTree(object) {
  if (Object.keys(object).length === 0) return {};
  object.expanded = true;
  object.title = title(object);
  object.subtitle = subtitle(object);
  object.subtitleHeight = Object.keys(object.attributes).length * 11;

  object.children.forEach((child) => decorateForTree(child));

  return object;
}

function title(object) {
  if (!object.id && !object.tempId) {
    return object.type;
  }

  let attr = object.id ? 'id' : 'temp-id';
  return `${object.type} (${attr} = '${object.id || object.tempId}')`;
}

function subtitle(object) {
  let attributeList = [];
  for(let key in object.attributes) {
    let value = object.attributes[key];
    if (typeof(value) === 'object') {
      value = JSON.stringify(value);
    }
    attributeList.push(
      <li key={key}>{key}: {value}</li>
    );
  }
  return (<ul>{ attributeList}</ul>);
}
