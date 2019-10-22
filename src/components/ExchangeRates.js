import React from 'react';
import {connect} from 'react-redux';

const rateStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive',
};
const errorMessage = {
  color: 'red',
};

let ExchangeRates = ({rate}) => {
  const renderList = [];
  rate &&
    Object.entries(rate.rates).forEach(([key, value]) =>
      renderList.push(
        <li key={key}>
          {key}: {value}
        </li>,
      ),
    );

  return rate ? (
    <div style={rateStyle}>
      {rate.error && <h2 style={errorMessage}>{rate.error}</h2>}
      {rate.base && <h2>BASE CURRENCY: {rate.base}</h2>}
      {rate.date && <h2>DATE: {rate.date}</h2>}
      {rate.rates && <ul>{renderList}</ul>}
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  rate: state.rateItems,
});

ExchangeRates = connect(
  mapStateToProps,
  null,
)(ExchangeRates);

export default ExchangeRates;
