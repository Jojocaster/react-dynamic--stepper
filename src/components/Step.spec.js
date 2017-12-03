import React from 'react';
import { mount, shallow } from "enzyme";

import Step from './Step';

describe('Step', () => {
  it('should render a title in a span', () => {
    const step = {id: 0, title: 'Something', content: 'test'};
    const onStepClick = jest.fn();
    const wrapper = shallow(<Step step={step} key={step.id} width={0} onStepClick={onStepClick} activeStep={0}/>);
    const title = wrapper.find('span');
    expect(title.length).toBe(1);
    expect(title.at(0).text()).toBe('Something');
  })
});
 
