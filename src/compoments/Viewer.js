import React, { Component } from 'react';
import Tree from './Tree';

export default class Viewer extends Component {
  render() {
    return(
      <div class={this.props.className}>
        <Tree />
      </div>
    );
  }
}
