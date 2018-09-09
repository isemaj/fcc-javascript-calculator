import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectNumber, selectOperator } from '../actions/index';

const ButtonsContainer = ({ selectNumber, selectOperator }) => (
  <React.Fragment>
    <button value="AC" className="buttonStyle ac" type="submit">AC</button>
    <button value="CE" className="buttonStyle ce" type="submit">CE</button>
    <button value="" className="buttonStyle posneg" type="submit">+/-</button>
    <button value="/" onClick={(e) => selectOperator(e.target)} className="buttonStyle divide" type="submit">/</button>
    <button value="7" onClick={(e) =>  selectNumber(e.target)} className="buttonStyle seven" type="submit">7</button>
    <button value="8" onClick={(e) => selectNumber(e.target)}className="buttonStyle eight" type="submit">8</button>
    <button value="9" onClick={(e) => selectNumber(e.target)}className="buttonStyle nine" type="submit">9</button>
    <button value="x" className="buttonStyle multiply" type="submit">X</button>
    <button value="4" onClick={(e) => selectNumber(e.target)}className="buttonStyle four" type="submit">4</button>
    <button value="5" onClick={(e) => selectNumber(e.target)}className="buttonStyle five" type="submit">5</button>
    <button value="6" onClick={(e) => selectNumber(e.target)}className="buttonStyle six" type="submit">6</button>
    <button value="-" className="buttonStyle minus" type="submit">-</button>
    <button value="1" onClick={(e) => selectNumber(e.target)}className="buttonStyle one" type="submit">1</button>
    <button value="2" onClick={(e) => selectNumber(e.target)}className="buttonStyle two" type="submit">2</button>
    <button value="3" onClick={(e) => selectNumber(e.target)}className="buttonStyle three" type="submit">3</button>
    <button value="+" className="buttonStyle plus" type="submit">+</button>
    <button value="0" onClick={(e) => selectNumber(e.target)}className="buttonStyle zero" type="submit">0</button>
    <button value="." className="buttonStyle dot" type="submit">.</button>
    <button value="=" className="buttonStyle equal" type="submit">=</button>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  selectNumber,
  selectOperator,
}, dispatch);

export default connect(null, mapDispatchToProps)(ButtonsContainer);
