import React from 'react';

import TotalContainer from '../containers/TotalContainer';
import CurrentInputContainer from '../containers/CurrentInputContainer';

const resultStyle = {
  borderRadius: '0px 0px 20px 20px',
  background: 'linear-gradient(90deg, #7DC4C8, #435E60)',
  height: 188.6,
};

const Result = () => (
  <div style={resultStyle}>
    <TotalContainer />
    <CurrentInputContainer />
  </div>
);

export default Result;
