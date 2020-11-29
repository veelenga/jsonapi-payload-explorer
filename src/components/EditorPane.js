import React from 'react';

import JSONEditor from './JSONEditor';
import Toolbar from './Toolbar';

import { formattedJSON } from '../utils/json';
import { savePayload } from '../utils/request';
import { toast } from 'react-toastify';

import './EditorPane.css';

export default class EditorPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { autoformat: true };
    this.onAutoformattingToggle = this.onAutoformattingToggle.bind(this);
    this.onKeyMapSelected = this.onKeyMapSelected.bind(this);
  }

  onAutoformattingToggle(event) {
    let autoformat = event.target.checked;
    this.setState({ autoformat });
  }

  onKeyMapSelected(event) {
    let { value } = event.target;
    let keyMap = value === 'vim' || value === 'emacs' ? value : 'default';
    this.setState({ keyMap });
  }

  onSaveClicked() {
    savePayload(this.props.payload).then((id) => {
      toast.success("Saved! Copy the URL to share 👆");
      this.props.history.push(`?id=${id}`);
    }).catch((e) => {
      toast.error('Failed to save! Try again later');
    });
  }

  render() {
    let {
      className,
      object,
      payload,
      onPayloadChanged
    } = this.props;

    let { autoformat, keyMap } = this.state;

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

          <select
            className="keyMap"
            onChange={this.onKeyMapSelected}>
            <option value="default">⌨ Default</option>
            <option value="vim">Vim</option>
            <option value="emacs">Emacs</option>
          </select>

          <button onClick={this.onSaveClicked.bind(this)}>
            Save
          </button>

        </Toolbar>

        <JSONEditor
          keyMap={keyMap}
          payload={payload}
          onPayloadChanged={onPayloadChanged} />

      </div>
    );
  }
}
