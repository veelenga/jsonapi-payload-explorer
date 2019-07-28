import React, { Component } from 'react';
import Tree from './Tree';

import serialize from '../utils/serialize';
import decorateForTree from '../utils/tree';

export default class Viewer extends Component {
  render() {
    let json = {};
    try {
      json = JSON.parse(this.props.payload);
    } catch(_) {};
    let rootObject = decorateForTree(serialize(json));

    return(
      <div className={this.props.className}>
        <Tree root={rootObject} key={this.props.payload}/>
      </div>
    );
  }
}
