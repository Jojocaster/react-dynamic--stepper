import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './stepper.css';
import Step from './Step';

const StepBar = ({width}) => (
  <span className="stepbar" style={{width: width + '%'}}/>
)

const Stepper = ({steps, activeStep, onStepClick}) => {

  const stepList = steps.map((step, i) => (
    <Step step={step} key={step.id} width={100 / (steps.length - 1)} activeStep={activeStep} onStepClick={onStepClick}/>
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

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  activeStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func.isRequired
}

export default Stepper;