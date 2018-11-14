import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class ExpenseDatePicker extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
    });
  }

  render() {
    const { selectedDay, isDisabled, isEmpty } = this.state;
    return (
      <div>
        <DayPickerInput
          value={selectedDay}
          onDayChange={this.handleDayChange}
        />
      </div>
    );
  }
}
