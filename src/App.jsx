import React from 'react';

import payloadSample from './PayloadSample';
import AppHeader from './components/AppHeader';
import EditorPane from './components/EditorPane';
import PaneSwitcher from './components/PaneSwitcher';
import ViewerPane from './components/ViewerPane';

import { safeJSONParse } from './utils/json';
import hashCode from './utils/string';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let payload = payloadSample;
    let object = safeJSONParse(payloadSample);
    this.state = { payload, object, activePane: 'editor' };

    this.onPayloadChanged = this.onPayloadChanged.bind(this);
    this.onPaneSelected = this.onPaneSelected.bind(this);
  }

  onPayloadChanged(payload) {
    let object = safeJSONParse(payload);
    this.setState({ payload, object });
  }

  onPaneSelected(activePane) {
    this.setState({ activePane });
  }

  render() {
    let { object, payload, activePane } = this.state;

    return(
      <div className="App">
        <AppHeader />

        <div className={`panes ${activePane}Active`}>
          <EditorPane
            className="splitpane"
            object={object}
            payload={payload}
            onPayloadChanged={this.onPayloadChanged}
          />

          <ViewerPane
            className="splitpane"
            object={object}
            hash={hashCode(payload)}
          />
        </div>

        <PaneSwitcher
          activePane={activePane}
          onPaneSelected={this.onPaneSelected}
        />
      </div>
    );
  }
}
