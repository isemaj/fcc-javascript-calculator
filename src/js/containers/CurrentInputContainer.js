import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { test } from '../actions/index';

class CurrentInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  test,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentInputContainer);
