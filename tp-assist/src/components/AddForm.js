import React, { Component } from 'react';
import './AddForm.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
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

  handleSubmit(event) {
    this.props.addCallback(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: ""
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form className="uk-form-horizontal uk-margin-large" onSubmit={this.handleSubmit}>
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">Name</label>
            <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="text" placeholder="Michael Scott" value={this.state.name} onChange={this.handleChangeName} />
            </div>
        </div>
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-horizontal-text">Name</label>
            <div className="uk-form-controls">
                <input className="uk-input" id="form-horizontal-text" type="text" placeholder="1 (647) 777-7777" value={this.state.number} onChange={this.handleChangeNumber} />
            </div>
        </div>
        <div className="uk-margin">
            <button type="submit" value="Submit" className="uk-button uk-button-default">Add</button>
        </div>
      </form>

      </div>
    );
  }
}

export default AddForm;
