import React from 'react';

import JSONEditor from './JSONEditor';
import Toolbar from './Toolbar';

import { formattedJSON } from '../utils/json';

export default class EditorPane extends React.Component {

  constructor(props) {
    super(props);

    this.state = { autoformat: true };
    this.onAutoformattingToggle = this.onAutoformattingToggle.bind(this);
  }

  onAutoformattingToggle(event) {
    let autoformat = event.target.checked;
    this.setState({ autoformat });
  }

  render() {
    let {
      className,
      object,
      payload,
      onPayloadChanged
    } = this.props;

    let { autoformat } = this.state;

    if (object && autoformat) {
      payload = formattedJSON(object);
    }

    return(
      <div className={className}>

        <Toolbar>
          <input
            className="autoformat"
            type="checkbox"
            onChange={this.onAutoformattingToggle}
            checked={autoformat} /> Autoformat
        </Toolbar>

        <JSONEditor
          payload={payload}
          onPayloadChanged={onPayloadChanged} />

      </div>
    );
  }
}
