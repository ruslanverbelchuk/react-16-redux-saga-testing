import React from 'react';
import {shallow} from 'enzyme';
import ExchangeRates from '../ExchangeRates';
import Button from '../Button';
import App from '../../containers/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('<Button>', () => {
  it('has an ExchangeRate', () => {
    wrapper.find(Button).simulate('click');
    wrapper.update();


  });
});
