import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connnect } from 'react-redux';

class ButtonsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <button className="buttonStyle ac" type="submit">AC</button>
        <button className="buttonStyle ce" type="submit">CE</button>
        <button className="buttonStyle posneg" type="submit">+/-</button>
        <button className="buttonStyle divide" type="submit">/</button>
        <button className="buttonStyle seven" type="submit">7</button>
        <button className="buttonStyle eight" type="submit">8</button>
        <button className="buttonStyle nine" type="submit">9</button>
        <button className="buttonStyle multiply" type="submit">X</button>
        <button className="buttonStyle four" type="submit">4</button>
        <button className="buttonStyle five" type="submit">5</button>
        <button className="buttonStyle six" type="submit">6</button>
        <button className="buttonStyle minus" type="submit">-</button>
        <button className="buttonStyle one" type="submit">1</button>
        <button className="buttonStyle two" type="submit">2</button>
        <button className="buttonStyle three" type="submit">3</button>
        <button className="buttonStyle plus" type="submit">+</button>
        <button className="buttonStyle zero" type="submit">0</button>
        <button className="buttonStyle dot" type="submit">.</button>
        <button className="buttonStyle equal" type="submit">=</button>
      </React.Fragment>
    );
  }
}

export default ButtonsContainer;