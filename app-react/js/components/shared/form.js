import React, { Component } from 'react';
import classnames from 'classnames';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', errors: [] };
    this.state.field = this.props.title.toLowerCase();
    this.state.showDescription = this.state.field == 'task';

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => { this.validate(name); });
  }

  validate(field) {
    const errors = { ...this.state.errors };
    delete errors[field];
    if (this.state[field] == '') { errors[field] = "Can't be empty"; }

    this.setState({ errors });
    return !errors[field];
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validate('title') && Object.keys(this.state.errors).length == 0) {
      const params = { [this.state.field]: { title: this.state.title } };
      if (this.state.showDescription) {
        params[this.state.field].description = this.state.description;
      }

      this.props.save(params);
    }
  }

  descriptionTextarea() {
    if (!this.state.showDescription) { return null; }
    return (
      <div className={classnames('row', { errors: !!this.state.errors.description })}>
        <label className="col-3" htmlFor="desc">Description</label>
        <textarea id="desc" rows="5" className="col-9" name="description" onChange={this.handleChange} value={this.state.description} />
      </div>
    );
  }

  render() {
    return (
      <div className="row is-horizontal-align mt50">
        <div className="col-3">
          <div className="card white-bg">
            <header>
              <h4>New {this.props.title}</h4>
            </header>
            <form className="new-form mt20" onSubmit={this.handleSubmit}>
              <div className={classnames('row', { errors: !!this.state.errors.title })}>
                <label className="col-3" htmlFor="title">Title</label>
                <input id="title" className="col-9" name="title" onChange={this.handleChange} value={this.state.title} />
              </div>
              {this.descriptionTextarea()}
              <div className="is-text-center mt20">
                <button type="submit" className="button outline primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
