import React from 'react';
import {connect} from 'react-redux';
import {fetchRatesStart} from '../redux/rate/rate.actions';

const styles = {
  width: '200px',
  height: '50px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid ',
};

class Button extends React.Component {
  render() {
    return (
      <button style={styles} onClick={this.props.fetchRatesStart}>
        Get Rates
      </button>
    );
  }
}

const mapDispatchToProps = {
  fetchRatesStart,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
