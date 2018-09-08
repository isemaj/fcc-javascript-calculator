import React from 'react';

import ButtonsContainer from '../containers/ButtonsContainer';

const keypadStyle = {
  backgroundColor: '#F0F0EE',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 60px)',
  gridTemplateRows: 'repeat(4, 60px)',
  gridGap: '10px 8.7px',
  margin: '17px auto auto',
};

const Keypad = () => (
  <div style={keypadStyle}>
    <ButtonsContainer />
  </div>
);

export default Keypad;
