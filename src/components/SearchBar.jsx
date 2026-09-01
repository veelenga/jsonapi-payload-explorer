import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    let {
      handleSearchOnChange,
      searchString,
      selectPrevMatch,
      selectNextMatch,
      currentSearchIndex,
      totalFound
    } = this.props;

    let stats = `${currentSearchIndex} / ${totalFound}`;
    return (
      <div className="searchBar">
        <input
          placeholder="Search payload…"
          onChange={handleSearchOnChange}
          value={searchString}
        />

        { searchString && totalFound > 1 &&
          <div className="control">
            <button className="previous" onClick={selectPrevMatch}>‹</button>
            <button className="next" onClick={selectNextMatch}>›</button>
            <span className="stats">{ stats }</span>
          </div>
        }
      </div>
    );
  }
}
