import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { test } from '../actions/index';

const totalStyle = {
  backgroundColor: 'white',
  width: 80,
  height: 90,
  margin: 'auto',
};

class TotalContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={totalStyle}>
        <p>Test</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  test,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TotalContainer);
