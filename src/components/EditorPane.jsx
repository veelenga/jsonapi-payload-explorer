import React from 'react';

import JSONEditor from './JSONEditor';
import Toolbar from './Toolbar';

import { formattedJSON } from '../utils/json';
import { tryParseCURL } from '../utils/curl';
import { safeJSONParse } from '../utils/json';
import { Tooltip } from 'react-tooltip';

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
          <label className="setting" data-tooltip-id="autoformatTooltip">
            <input
              type="checkbox"
              onChange={this.onAutoformattingToggle}
              checked={autoformat} />
            Autoformat
          </label>

          <label className="setting" data-tooltip-id="parseCurlTooltip">
            <input
              type="checkbox"
              onChange={this.onParseCurlToggle}
              checked={parseCURL} />
            Parse cURL
          </label>

          <select
            className="keyMap"
            onChange={this.onKeyMapSelected}>
            <option value="default">⌨ Default</option>
            <option value="vim">Vim</option>
            <option value="emacs">Emacs</option>
          </select>

          <Tooltip id="autoformatTooltip" place="bottom-start">
            <span>Automatically format JSON when it is changed</span>
          </Tooltip>

          <Tooltip id="parseCurlTooltip" place="bottom-start">
            <span>Parse JSON body from copied cURL request</span>
            <img className="tooltipImg" src="./copy-curl.png" width="300" alt="copy curl example"/>
          </Tooltip>

        </Toolbar>

        <JSONEditor
          keyMap={keyMap}
          payload={payload}
          onPayloadChanged={onPayloadChanged} />

      </div>
    );
  }
}
