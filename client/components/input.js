
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStudents } from '../store/dashboard'

class InputField extends Component {

  constructor() {
    super()
    this.state = {
        attendancePercentage: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const attendancePercentage = target.attendancePercentage;

    this.setState({
      attendancePercentage: value
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    const input = this.state.attendancePercentage
    this.props.getStudents(input)
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div >
        <label>
          Attendance %
          <input
            type="text"
            name="attendancePercentage"
            value={this.state.attendancePercentage}
            onChange={this.handleInputChange}
          />
        </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  getStudents: (attendancePercentage) => dispatch(getStudents(attendancePercentage))
})

export default connect(null, mapDispatchToProps)(InputField)
