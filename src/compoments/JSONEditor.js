import React from 'react';

import 'codemirror';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';

import './JSONEditor.css';

export default class JSONEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(editor, data, value) {
    let { removed, text } = data || {};
    if (removed && text && removed[0] === text[0]) return;
    this.props.onPayloadChanged(value);
  }
  render() {
    return(
      <div className={this.props.className}>
        <CodeMirror
          value={this.props.payload}
          onChange={this.handleOnChange}
          autoCursor={false}
          options={{
            lineNumbers: true,
            mode: { name: "javascript", json: true },
            theme: 'solarized',
            height: 'auto'
          }}
        />
      </div>
    );
  }
}
