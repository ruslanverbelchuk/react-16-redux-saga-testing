import React from 'react';
import { shallow } from 'enzyme';
import ExchangeRates from '../ExchangeRates';
import Button from '../Button';
import App from '../../containers/App';

describe('Button component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
/*  it('has an ExchangeRate', () => {
    wrapper.find(Button).simulate('click');
    wrapper.update();
  });*/

  it('should render Button component', () => {
    expect(wrapper.find(Button)).toMatchSnapshot();
  });
});
