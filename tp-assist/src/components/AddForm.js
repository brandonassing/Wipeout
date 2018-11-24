import React, { Component } from 'react';
import './AddForm.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.shouldBeDisabled = this.shouldBeDisabled.bind(this);
    this.state = {
      name: "",
      number: ""
    };
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeNumber(event) {
    this.setState({
      number: event.target.value
    });
  }

  shouldBeDisabled() {
    let rawNum = this.state.number.replace(/[- )()]/g,'');
    if(this.state.name.length > 0 && !isNaN(rawNum) && (rawNum.length === 10 || (rawNum.length ===11 && rawNum.slice(0,1) === "1"))) {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    if(!this.shouldBeDisabled()) {
      let number = this.state.number.replace(/[- )()]/g,'');
      if (number.length === 10) {
        number = "1" + number;
      }
      this.props.addCallback(this.state.name, number);
      this.setState({
        name: "",
        number: ""
      });
      event.preventDefault();
    }
  }

  render() {
    let disabled = this.shouldBeDisabled();
    return (
      <div id="form-body" className="uk-container">
      <form className="uk-form-horizontal uk-margin-large" onSubmit={this.handleSubmit}>
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">Name</label>
            <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="text" placeholder="John Crapper" value={this.state.name} onChange={this.handleChangeName} />
            </div>
        </div>
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">Number</label>
            <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="text" placeholder="1 (647) 244-7667" value={this.state.number} onChange={this.handleChangeNumber} />
            </div>
        </div>
        <div className="uk-margin">
            <button type="submit" value="Submit" className="uk-button uk-button-primary" disabled={disabled}>Add</button>
        </div>
      </form>

      </div>
    );
  }
}

export default AddForm;
