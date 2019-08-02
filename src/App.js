import React from 'react';
import cx from 'classnames';

import payloadSample from './PayloadSample';
import JSONEditor from './compoments/JSONEditor';
import Viewer from './compoments/Viewer';

import { safeJSONParse, formattedJSON } from './utils/json';
import hashCode from './utils/string';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let payload = payloadSample;
    let object = safeJSONParse(payloadSample);
    this.state = { payload, object };

    this.onPayloadChanged = this.onPayloadChanged.bind(this);
  }

  onPayloadChanged(payload) {
    let object = safeJSONParse(payload);
    if (object) payload = formattedJSON(object);
    this.setState({ payload, object });
  }

  render() {
    let { object } = this.state;

    return(
      <div className="App">
        <div className="splitpane">
          <JSONEditor
            className={ cx({ invalid: !object }) }
            payload={this.state.payload}
            onPayloadChanged={this.onPayloadChanged} />
        </div>

        <div className="splitpane">
          <Viewer
            object={this.state.object}
            hash={hashCode(this.state.payload)}
          />
        </div>
      </div>
    );
  }
}
