import React from 'react';

const notchStyle = {
  width: 171.3,
  height: 28.2,
  borderRadius: '0px 0px 17.6px 17px',
  backgroundColor: '#111111',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridGap: 20,
  alignItems: 'center',
  justifyContent: 'center',
};

const cameraStyle = {
  borderRadius: '50%',
  width: 7,
  height: 7,
  backgroundColor: '#555555',
  justifySelf: 'end',
};

const speakerStyle = {
  borderRadius: 1,
  width: 55.3,
  height: 4.4,
  backgroundColor: '#555555',
  justifySelf: 'start',
  marginRight: 20,
};

const Notch = () => (
  <div style={notchStyle}>
    <div style={cameraStyle} />
    <div style={speakerStyle} />
  </div>
);

export default Notch;
