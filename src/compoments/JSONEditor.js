import React from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';

import './JSONEditor.css';

export default class JSONEditor extends React.Component {
  render() {
    return(
      <div className={this.props.className}>
        <CodeMirror
          value={this.props.payload}
          onChange={this.props.onPayloadChanged}
          options={{
            lineNumbers: true,
            mode: { name: "javascript", json: true },
            theme: 'solarized'
          }}
        />
      </div>
    );
  }

  styles: {
  }
}
