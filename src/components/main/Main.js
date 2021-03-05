import React, { Component } from "react";
import AttendeeList from "../AttendeeList/AttendeeList";

import SignUpForm from "../SignUpForm/SignUpForm";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    };
  }

  addAttendee = (attendee) => {
    this.setState((state, props) => ({
      attendees: [...state.attendees, attendee],
    }));
  };
  render() {
    return (
      <div className="Main">
        <h3>Album release party</h3>

        <p>
          We hope to see <em>you</em> <strong>October 13</strong>!
        </p>
        <SignUpForm addAttendee={this.addAttendee} />
        <h1 className="dark">Pre-order now!</h1>
        <p className="dark">The cool kids will all be there</p>
        <AttendeeList attendees={this.state.attendees} />
        <ul className="AttendeeList"></ul>
      </div>
    );
  }
}
export default Main;
