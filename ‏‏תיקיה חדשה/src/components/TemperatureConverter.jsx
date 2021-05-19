import React, { Component } from "react";

export default class TemperatureConverter extends Component {
  render() {
    return (

      <div className="form-switch pt-5 p-0">

        <span className="" >℃</span>

        <input
          type='checkbox'
          className="form-check-input mx-3"
          id='customSwitches'
          onChange={value =>
            this.props.handleOnChange(value)
          }
          checked={this.props.checked}
          defaultChecked={true}
        />
        <label className="form-check-label" htmlFor='customSwitches'>
          ℉
        </label>
      </div>

    );
  }
}
