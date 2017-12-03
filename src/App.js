import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Stepper from 'components/Stepper';
import StepForm from 'components/StepForm';
import StepContent from 'components/StepContent';
import Feedback from 'components/Feedback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          title: 'Welcome',
          content: 'First step'
        },
        {
          title: 'Step two',
          content: 'The second one.'
        }
      ],
      activeStep: 0,
      feedback: '',
      config: {min: 2, max: 5}
    }

    this.addStep = this.addStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  onStepClick(i) {
    //If the difference between to tasks if greater than 1, we don't do anything
    const stepGap = Math.abs(i - this.state.activeStep);
    if(stepGap > 1) {
      this.setState({feedback: 'Sorry, one step at the time.'});
    } else {
      this.setState({activeStep: i, feedback: ''});
    }
  }

  addStep(step) {
    const steps = this.state.steps;
    if(steps.length >= this.state.config.min && steps.length < this.state.config.max) {
      steps.push(step);
      this.setState({steps, feedback: ''});
    } else {
      this.setState({feedback: `Sorry, there's a maximum of 5 steps :)`});
    }
  }

  removeStep() {
    if(this.state.steps.length > 2) {
      const steps = this.state.steps.filter((step, i) => {
        return i !== this.state.steps.length - 1 
      });

      //If active step is removed, we set the last step as the active one
      const activeStep = this.state.activeStep === steps.length ? steps.length -1 : this.state.activeStep;

      this.setState({steps, activeStep, feedback: ''});
    } else {
      this.setState({feedback: `The minimum amount of steps is 2, sorry !`})
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React Stepper</h1>
        </header>
        <div className="app-content">
          <Stepper {...this.state} onStepClick={(i) => this.onStepClick.bind(this, i)}/>
          <StepContent {...this.state}/>
          <StepForm addStep={this.addStep} removeStep={this.removeStep}/>
          {this.state.feedback &&
            <Feedback feedback={this.state.feedback} />
          }
        </div>
      </div>
    );
  }
}

export default App;
