import React from 'react';

import payloadSample from './PayloadSample';
import EditorPane from './components/EditorPane';
import ViewerPane from './components/ViewerPane';

import { safeJSONParse } from './utils/json';
import hashCode from './utils/string';
import { getPayload } from './utils/request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const id = this.searchPayloadIdParam(this.props);
    if (id) {
      this.getAndProcessPayload(id);
      this.state = { payload: "", object: null };
    } else {
      let payload = payloadSample;
      let object = safeJSONParse(payloadSample);
      this.state = { payload, object };
    }

    this.onPayloadChanged = this.onPayloadChanged.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.getAndProcessPayload(this.searchPayloadIdParam(nextProps));
  }

  searchPayloadIdParam(props) {
    const { search } = props.location;
    return new URLSearchParams(search).get('id');
  }

  getAndProcessPayload(id) {
    if (id) {
      getPayload(id)
        .then(this.onPayloadChanged.bind(this))
        .catch(() => {
          toast.error('Invalid payload identifier. Try a different one or create new payload.');
        });
    }
  }

  onPayloadChanged(payload) {
    let object = safeJSONParse(payload);
    this.setState({ payload, object });
  }

  render() {
    let { object, payload } = this.state;
    let { history } = this.props;

    return(
      <div className="App">
        <ToastContainer
          position="top-center"
          hideProgressBar
        />
        <EditorPane
          className="splitpane"
          object={object}
          history={history}
          payload={payload}
          onPayloadChanged={this.onPayloadChanged}
        />

        <ViewerPane
          className="splitpane"
          object={object}
          hash={hashCode(payload)}
        />
      </div>
    );
  }
}
