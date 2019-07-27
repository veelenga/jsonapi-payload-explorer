import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: 'shows 123',
          children: [{ title: 'tickets 12' }]
        }
      ],
    };
  }

  render() {
    return (
      <SortableTree
        canDrag={false}
        treeData={this.state.treeData}
        onChange={treeData => this.setState({ treeData })}
      />
    );
  }
}
