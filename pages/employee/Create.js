import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    employee_name: '',
  }

  handleChange = event => {
    this.setState({ employee_name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      employee_name: this.state.name
    };

    axios.post(`http://dummy.restapiexample.com/api/v1/create`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}