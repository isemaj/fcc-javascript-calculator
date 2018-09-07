import React, { Component } from 'react';

import Notch from './Notch';
import Result from './Result';
import Keypad from './Keypad';

const mainStyle = {
  height: '100%',
  position: 'relative',
};

const phoneStyle = {
  margin: 'auto',
  width: 323,
  height: 600,
  backgroundColor: '#F0F0EE',
  border: '10px solid #111111',
  borderRadius: 40,
  boxShadow: '6px 6px 20px rgba(0,0,0,0.65)',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  overflow: 'hidden',
};

class Phone extends Component {
  constructor(props) {
    super(props);
    document.body.style.backgroundColor = '#7DC4C8';
  }

  render() {
    return (
      <div style={mainStyle}>
        <div style={phoneStyle}>
          <Notch />
          <Result />
          <Keypad />
        </div>
      </div>
    );
  }
}

export default Phone;
