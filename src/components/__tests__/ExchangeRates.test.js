import React from 'react';
import {shallow} from 'enzyme';
import ExchangeRates from '../ExchangeRates';
import App from '../../containers/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('<ExchangeRate>', () => {
  it('has an ExchangeRate', () => {
    wrapper.setProps({ rate : {"rates":{"CAD":1.4563,"HKD":8.65},"base":"EUR","date":"2019-10-16"} });
    expect(wrapper.find(ExchangeRates)).toHaveLength(1);

  });
});

