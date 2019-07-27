import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: 'articles',
          children: [
            { title: 'tags(9)' },
            { title: 'tags(1)' },
            { title: 'tags(2)' }
          ]
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
