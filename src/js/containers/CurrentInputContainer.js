import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const currentInputStyle = {
  color: '#f5f0f0db',
  textAlign: 'right',
  textAlignLast: 'right',
  alignSelf: 'end',
  paddingBottom: 2,
  width: 280,
  height: 37,
  margin: '5 auto',
  fontSize: 22,
  overflow: 'auto',
  overflowX: 'scroll',
  letterSpacing: '0.10em',
};

const CurrentInputContainer = (props) => {
  return (
    <div className="currentInput" style={currentInputStyle}>
      {props.calculate.formula.replace(/X/g, '*')}
    </div>
  );
}

CurrentInputContainer.propTypes = {
  calculate: Proptypes.func.isRequired,
};

const mapStateToProps = state => ({
  calculate: state.calculate,
});

export default connect(mapStateToProps, null)(CurrentInputContainer);
