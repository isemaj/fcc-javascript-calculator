import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

const totalStyle = {
  color: 'white',
  margin: 'auto',
  fontSize: 60,
  paddingTop: 40,
  maxWidth: 323,
};

const reducetotalStyle = {
  color: 'white',
  margin: 'auto',
  fontSize: 30,
  paddingTop: 40,
  maxWidth: 323,
};

const TotalContainer = (props) => {
  return (
    <div style={
      props.calculate.result.toString().length > 9 ? reducetotalStyle : totalStyle}
    >
      {props.calculate.result}
    </div>
  );
}

TotalContainer.propTypes = {
  calculate: Proptypes.func.isRequired,
};

const mapStateToProps = state => ({
  calculate: state.calculate,
});

export default connect(mapStateToProps, null)(TotalContainer);
