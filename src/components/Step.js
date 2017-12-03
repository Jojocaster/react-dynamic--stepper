import React from 'react';

const Step = ({step, width, activeStep, index, onStepClick}) => {
  const style = {
    step: {
      left: `${width * index}%`,
    }
  };

  return (
    <div className={"step " + (activeStep >= index ? 'active' : '')} style={style.step} onClick={onStepClick(index)}>
      <span className="step-header">
        {step.title}
      </span>
    </div>
  )
};

export default Step;