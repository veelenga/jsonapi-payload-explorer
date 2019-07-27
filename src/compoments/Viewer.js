import React, { Component } from 'react';
import Tree from './Tree';

import serializeToTree from '../utils/serialize_to_tree';

export default class Viewer extends Component {
  render() {
    let json = {};
    try {
      json = JSON.parse(this.props.payload);
    } catch(_) {};
    let rootObject = serializeToTree(json);

    return(
      <div className={this.props.className}>
        <Tree root={rootObject} key={this.props.payload}/>
      </div>
    );
  }
}
