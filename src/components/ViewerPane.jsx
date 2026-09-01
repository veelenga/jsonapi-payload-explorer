import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import TreeView from './TreeView';

import serialize from '../utils/serialize';
import decorateForTree from '../utils/tree';

function PayloadTree({ object, hash }) {
  let rootObject = object ? decorateForTree(serialize(object)) : {};

  return <TreeView root={rootObject} key={hash} />;
}

export default class ViewerPane extends Component {
  render() {
    let { object, className, hash } = this.props;

    return(
      <div className={className}>
        <ErrorBoundary resetKey={hash}>
          <PayloadTree object={object} hash={hash} />
        </ErrorBoundary>
      </div>
    );
  }
}
