import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { test } from '../actions/index';

const totalStyle = {
  color: 'white',
  margin: 'auto',
  fontSize: 60,
  paddingTop: 40,
  maxWidth: 323,
};

class TotalContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={totalStyle}>
        {this.props.calculate.result}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calculate: state.calculate,
});

export default connect(mapStateToProps, null)(TotalContainer);
