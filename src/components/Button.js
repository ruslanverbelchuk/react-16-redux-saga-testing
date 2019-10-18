import React from 'react';
import {connect} from 'react-redux';
import {getRates} from '../actions';

const styles = {
  width: '200px',
  height: '50px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid ',
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  render() {
    return (
      <button style={styles} onClick={this.props.getRates}>
        Get Rates
      </button>
    );
  }
}

const mapDispatchToProps = {
  getRates,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
