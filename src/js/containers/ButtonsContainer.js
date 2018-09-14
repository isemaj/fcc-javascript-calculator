import React from 'react';
import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  selectNumber,
  selectOperator,
  solverOperator,
  initialize,
  addDecimal,
  clearEntry,
  changeSign,
} from '../actions/index';

const ButtonsContainer = ({ selectNumber, selectOperator, solverOperator, initialize, addDecimal, clearEntry, changeSign }) => (
  <React.Fragment>
    <button value="AC" onClick={() => initialize()} className="buttonStyle ac" type="submit">AC</button>
    <button value="CE" onClick={() => clearEntry()} className="buttonStyle ce" type="submit">CE</button>
    <button value="CHANGE" onClick={e => changeSign(e.target)} className="buttonStyle posneg" type="submit">+/-</button>
    <button value="/" onClick={e => selectOperator(e.target)} className="buttonStyle divide" type="submit">/</button>
    <button value="7" onClick={e => selectNumber(e.target)} className="buttonStyle seven" type="submit">7</button>
    <button value="8" onClick={e => selectNumber(e.target)} className="buttonStyle eight" type="submit">8</button>
    <button value="9" onClick={e => selectNumber(e.target)} className="buttonStyle nine" type="submit">9</button>
    <button value="*" onClick={e => selectOperator(e.target)} className="buttonStyle multiply" type="submit">X</button>
    <button value="4" onClick={e => selectNumber(e.target)} className="buttonStyle four" type="submit">4</button>
    <button value="5" onClick={e => selectNumber(e.target)} className="buttonStyle five" type="submit">5</button>
    <button value="6" onClick={e => selectNumber(e.target)} className="buttonStyle six" type="submit">6</button>
    <button value="-" onClick={e => selectOperator(e.target)} className="buttonStyle minus" type="submit">-</button>
    <button value="1" onClick={e => selectNumber(e.target)} className="buttonStyle one" type="submit">1</button>
    <button value="2" onClick={e => selectNumber(e.target)} className="buttonStyle two" type="submit">2</button>
    <button value="3" onClick={e => selectNumber(e.target)} className="buttonStyle three" type="submit">3</button>
    <button value="+" onClick={e => selectOperator(e.target)} className="buttonStyle plus" type="submit">+</button>
    <button value="0" onClick={e => selectNumber(e.target)} className="buttonStyle zero" type="submit">0</button>
    <button value="." onClick={e => addDecimal(e.target)} className="buttonStyle dot" dangerouslySetInnerHTML={{ __html: '&middot' }} type="submit" />
    <button value="=" onClick={e => solverOperator(e.target)} className="buttonStyle equal" type="submit">=</button>
  </React.Fragment>
);

ButtonsContainer.propTypes = {
  selectNumber: Proptypes.func.isRequired,
  selectOperator: Proptypes.func.isRequired,
  solverOperator: Proptypes.func.isRequired,
  initialize: Proptypes.func.isRequired,
  addDecimal: Proptypes.func.isRequired,
  clearEntry: Proptypes.func.isRequired,
  changeSign: Proptypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  selectNumber,
  selectOperator,
  solverOperator,
  initialize,
  addDecimal,
  clearEntry,
  changeSign,
}, dispatch);

export default connect(null, mapDispatchToProps)(ButtonsContainer);
