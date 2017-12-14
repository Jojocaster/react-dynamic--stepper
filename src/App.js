import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Stepper from './components/Stepper/Stepper';
import StepForm from './components/Stepper/StepForm';
import StepContent from './components/Stepper/StepContent';
import Feedback from './components/Feedback/Feedback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          id: 0,
          title: 'Welcome',
          content: 'First step'
        },
        {
          id: 1,
          title: 'Second step',
          content: 'The second one.'
        }
      ],
      activeStep: 0,
      feedback: '',
      config: {min: 2, max: 5}
    }

    this.addStep = this.addStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
    this.addFeedback = this.addFeedback.bind(this);
  }

  onStepClick(id) {
    //If the difference between to tasks if greater than 1, we don't do anything
    const stepGap = Math.abs(id - this.state.activeStep);
    if(stepGap > 1) {
      this.setState({feedback: 'Sorry, one step at the time.'});
    } else {
      this.setState({activeStep: id, feedback: ''});
    }
  }

  addStep(step) {
    const steps = this.state.steps;
    if(steps.length >= this.state.config.min && steps.length < this.state.config.max) {
      step.id = steps.length;
      this.setState({steps: [...steps, step], feedback: ''});
    } else {
      this.setState({feedback: `Sorry, there's a maximum of 5 steps :)`});
    }
  }

  removeStep() {
    if(this.state.steps.length > this.state.config.min) {
      const steps = this.state.steps.filter((step, i) => {
        return i !== this.state.steps.length - 1 
      });

      //If active step is removed, we set the one before as the active one
      const activeStep = this.state.activeStep === steps.length ? steps.length -1 : this.state.activeStep;
      this.setState({steps, activeStep, feedback: ''});
    } else {
      this.setState({feedback: `The minimum amount of steps is 2, sorry !`})
    }
  }

  addFeedback({feedback}) {
    this.setState({feedback});
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React Stepper</h1>
        </header>
        <div className="app-content">
          <Stepper {...this.state} onStepClick={(id) => this.onStepClick.bind(this, id)}/>
          <StepContent {...this.state}/>
          {this.state.steps.length &&
            <StepForm addStep={this.addStep} addFeedback={this.addFeedback} removeStep={this.removeStep}/>
          }
          {this.state.feedback &&
            <Feedback feedback={this.state.feedback} />
          }
        </div>
      </div>
    );
  }
}

export default App;
