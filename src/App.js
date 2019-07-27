import React from 'react';
import cx from 'classnames';

import payloadSample from './PayloadSample.js';
import isJSONString from './utils/is-json-string';
import JSONEditor from './compoments/JSONEditor';
import Viewer from './compoments/Viewer';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { payload: payloadSample, invalid: false };
    this.onPayloadChanged = this.onPayloadChanged.bind(this);
  }

  onPayloadChanged(payload) {
    if (!payload) { payload = '{}'; }
    let invalid = !isJSONString(payload);
    this.setState({ payload, invalid });
  }

  render() {
    let { invalid } = this.state;

    return(
      <div className="App">
        <JSONEditor
          className={ cx("sidepane", { invalid }) }
          payload={this.state.payload}
          onPayloadChanged={this.onPayloadChanged} />

        <Viewer className="sidepane" payload={this.state.payload}/>
      </div>
    );
  }
}
