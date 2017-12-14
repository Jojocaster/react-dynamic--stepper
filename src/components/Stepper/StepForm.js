import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title : '', content: '', feedback: ''};

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  onSubmit(event) {
    if(this.state.title.length && this.state.content.length) {
      this.props.addStep(this.state);
      this.setState({title: '', content: '', feedback: ''});
    } else {
      this.props.addFeedback({feedback: 'A step requires a title and some content.'});
    }

    event.preventDefault();
  }

  removeStep() {
    this.props.removeStep();
    this.setState({feedback: ''});
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="step-form">
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Step title</label>
            <input name="title" value={this.state.title} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Step content</label>
            <textarea name="content" value={this.state.content} onChange={this.onChange}/>
          </div>
          <button>Submit</button>
          <span className="remove-step" onClick={this.removeStep}>or remove last step</span>
        </form>
      </div>
    )
  }
}

StepForm.propTypes = {
  addStep: PropTypes.func.isRequired,
  removeStep: PropTypes.func.isRequired
}

export default StepForm;