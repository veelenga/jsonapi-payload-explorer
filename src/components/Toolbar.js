import React from 'react';
import './Toolbar.css';

export default function Toolbar(props) {
  return (
    <div className="toolbar">
      {props.children}
    </div>
  );
}
