import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const DEFAULT_ROW_HEIGHT = 62;

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {treeData: [this.props.root]};
  }

  render() {
    return (
      <SortableTree
        canDrag={false}
        rowHeight={(object) => DEFAULT_ROW_HEIGHT + (object.node.subtitleHeight|| 0)}
        treeData={this.state.treeData}
        onChange={(treeData) => this.setState({ treeData })}
      />
    );
  }
}
