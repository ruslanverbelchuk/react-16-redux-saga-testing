import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Button from '../../components/Button';
import ExchangeRates from '../../components/ExchangeRates';
import Loading from '../../components/Loading';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a button', () => {
  expect(wrapped.find(Button).length).toEqual(1);
});

it('shows an ExchangeRates', () => {
  expect(wrapped.find(ExchangeRates).length).toEqual(1);
});

it('shows an Loading', () => {
  expect(wrapped.find(ExchangeRates).length).toEqual(1);
});
