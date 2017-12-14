import React from 'react';
import { mount, shallow } from "enzyme";

import Stepper from './Stepper';
import Step from './Step';

describe('Stepper', () => {
  let props;

  beforeEach(() => {
    props = {
      steps: [{id: 0, title: 'First step', content: 'test'}, {id: 1, title: 'Second step', content: 'test2'}],
      onStepClick: jest.fn(),
      activeStep: 1
    }
  })

  it('should render two steps', () => {
    const wrapper = shallow(<Stepper {...props} />);
    expect(wrapper.find('Step').length).toBe(2);
  })

  it('should always render one StepBar', () => {
    const wrapper = shallow(<Stepper {...props} />);
    expect(wrapper.find('StepBar').length).toBe(1);
  })

  it('should reacts to click events', () => {
    const wrapper = mount(<Stepper {...props} />);
    wrapper.find('.step').first().simulate('click');
    expect(props.onStepClick).toHaveBeenCalled();
  })
});
