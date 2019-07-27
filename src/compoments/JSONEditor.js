import React from 'react';
import 'codemirror/lib/codemirror.css';
import samplePayload from './SamplePayload.js';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/solarized.css';
import './JSONEditor.css';

export default class JSONEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: samplePayload };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value: value });
  }

  render() {
    return(
      <CodeMirror
        className={this.props.className}
        value={this.state.value}
        onChange={this.handleChange}
        options={{
          lineNumbers: true,
          mode: { name: "javascript", json: true },
          theme: 'solarized'
        }}
      />
    );
  }
}
