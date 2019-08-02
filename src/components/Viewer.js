import React, { Component } from 'react';
import TreeView from './TreeView';

import serialize from '../utils/serialize';
import decorateForTree from '../utils/tree';

export default class Viewer extends Component {
  render() {
    let { object, className, hash } = this.props;
    let rootObject = object ? decorateForTree(serialize(object)) : {};

    return(
      <div className={className}>
        <TreeView root={rootObject} key={hash}/>
      </div>
    );
  }
}
