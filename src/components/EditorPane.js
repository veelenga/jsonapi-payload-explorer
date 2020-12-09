import React from 'react';

import JSONEditor from './JSONEditor';
import Toolbar from './Toolbar';

import { formattedJSON } from '../utils/json';
import { tryParseCURL } from '../utils/curl';
import { savePayload } from '../utils/request';
import { safeJSONParse } from '../utils/json';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

import './EditorPane.css';

export default class EditorPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { autoformat: true, parseCURL: true };
    this.onAutoformattingToggle = this.onAutoformattingToggle.bind(this);
    this.onParseCurlToggle = this.onParseCurlToggle.bind(this);
    this.onKeyMapSelected = this.onKeyMapSelected.bind(this);
  }

  onAutoformattingToggle(event) {
    let autoformat = event.target.checked;
    this.setState({ autoformat });
  }

  onParseCurlToggle(event) {
    let parseCURL = event.target.checked;
    this.setState({ parseCURL });
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

    let { autoformat, parseCURL, keyMap } = this.state;

    if (parseCURL) {
      let parsedRequestBody = tryParseCURL(payload);
      if (parsedRequestBody) {
        [payload, object] = [parsedRequestBody, safeJSONParse(parsedRequestBody)];
      }
    }

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
            checked={autoformat} />

          <span className="settingText" data-tip data-for="autoformatTooltip">
            Autoformat
          </span>

          <input
            className="parse-curl"
            type="checkbox"
            onChange={this.onParseCurlToggle}
            checked={parseCURL} />

          <span className="settingText" data-tip data-for="parseCurlTooltip">
            Parse cURL
          </span>

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

          <ReactTooltip id="autoformatTooltip" effect="solid" place="right">
            <span>Automatically format JSON when it is changed</span>
          </ReactTooltip>

          <ReactTooltip id="parseCurlTooltip" effect="solid" place="bottom">
            <span>Parse JSON body from copied cURL request</span>
            <img className="tooltipImg" src="./copy-curl.png" width="300" alt="copy curl example"/>
          </ReactTooltip>

        </Toolbar>

        <JSONEditor
          keyMap={keyMap}
          payload={payload}
          onPayloadChanged={onPayloadChanged} />

      </div>
    );
  }
}
