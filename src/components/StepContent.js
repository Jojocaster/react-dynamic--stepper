import React from 'react';
import PropTypes from 'prop-types';

const StepContent = (props) => {
  const activeContent = props.steps[props.activeStep];
  return (
    <div className="step-content">
      {activeContent.content}
    </div>
  )
}

StepContent.propTypes = {
  steps: PropTypes.array.isRequired
}

export default StepContent;