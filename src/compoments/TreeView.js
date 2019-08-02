import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import './TreeView.css';
import SearchBar from './SearchBar';

const DEFAULT_ROW_HEIGHT = 62;

export default class TreeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      currentSearchIndex: 0,
      totalFound: 0,
      treeData: [this.props.root]
    };

    this.onSearchStringChange = this.onSearchStringChange.bind(this);
    this.selectPrevMatch = this.selectPrevMatch.bind(this);
    this.selectNextMatch = this.selectNextMatch.bind(this);
  }

  onSearchStringChange(e) {
    this.setState({ searchString: e.target.value });
  };

  selectPrevMatch() {
    const { currentSearchIndex, totalFound } = this.state;
    this.setState({
      currentSearchIndex: currentSearchIndex !== null
        ? (totalFound + currentSearchIndex - 1) % totalFound
        : totalFound - 1
    });
  };

  selectNextMatch () {
    const { currentSearchIndex, totalFound } = this.state;
    this.setState({
      currentSearchIndex: currentSearchIndex !== null
        ? (currentSearchIndex + 1) % totalFound
        : 0
    });
  };

  render() {
    const {
      treeData,
      searchString,
      currentSearchIndex,
      totalFound
    } = this.state;

    return (
      <div className="Tree-view">
        <SearchBar
          searchString={searchString}
          currentSearchIndex={currentSearchIndex + 1}
          totalFound={totalFound}
          handleSearchOnChange={this.onSearchStringChange}
          selectPrevMatch={this.selectPrevMatch}
          selectNextMatch={this.selectNextMatch}
          />

        <SortableTree
          canDrag={false}
          rowHeight={(object) => DEFAULT_ROW_HEIGHT + (object.node.subtitleHeight || 0)}
          treeData={treeData}
          style={{ height: 'auto' }}
          onChange={(treeData) => this.setState({ treeData })}
          searchQuery={searchString}
          searchFocusOffset={currentSearchIndex}
          searchFinishCallback={(matches) =>
            this.setState({
              totalFound: matches.length,
              currentSearchIndex: matches.length > 0
                ? currentSearchIndex % matches.length
                : 0
            })
          } />
      </div>
    );
  }
}
