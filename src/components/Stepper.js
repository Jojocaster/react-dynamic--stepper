import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './stepper.css';
import Step from 'components/Step';

const StepBar = ({width}) => (
  <span className="stepbar" style={{width: width + '%'}}/>
)

const Stepper = ({steps, activeStep, onStepClick}) => {

  const stepList = steps.map((step, i) => (
    <Step step={step} index={i} key={i} width={100 / (steps.length - 1)} activeStep={activeStep} onStepClick={onStepClick}/>
  ));

  return (
    <div className="stepper">
      <StepBar width={100 / (steps.length - 1) * activeStep}/>
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={400} transitionLeaveTimeout={200} transitionAppear={true} transitionAppearTimeout={100}>
        {stepList}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Stepper;