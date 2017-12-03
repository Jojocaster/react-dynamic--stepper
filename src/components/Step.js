import React from 'react';
import PropTypes from 'prop-types';

const Step = ({step, width, activeStep, onStepClick}) => {
  const style = {
    step: {
      left: `${width * step.id}%`,
    }
  };

  return (
    <div className={"step " + (activeStep >= step.id ? 'active' : '')} style={style.step} onClick={onStepClick(step.id)}>
      <span className="step-header">
        {step.title}
      </span>
    </div>
  )
};

Step.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  width: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func.isRequired
}

export default Step;