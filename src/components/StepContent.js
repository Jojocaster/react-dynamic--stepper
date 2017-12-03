import React from 'react';

const StepContent = (props) => {
  const activeContent = props.steps[props.activeStep];
  return (
    <div className="step-content">
      {activeContent.content}
    </div>
  )
}

export default StepContent;