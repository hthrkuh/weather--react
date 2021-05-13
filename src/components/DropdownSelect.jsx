import React, { Component } from "react";
import Select from "react-select";
import { ThemeContext } from '../context/ThemeContext'

export default class DropdownSelect extends Component {

  customStyles = {

    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'blue' : this.context.colorTheme === "dark" ? "white" : 'black',
      padding: 10,
      backgroundColor: this.context.colorTheme === "dark" ?
        state.isFocused ? "#2684FF" : "#212529 !important"
        :
        state.isFocused ? "#2684FF" : console.log(state, "lll"),
    }),
    // control: () => ({
    //   // none of react-select's styles are passed to <Control />
    //   width: 200,
    // }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  }

  render() {
    // const { theme, colorTheme } = this.context;
    // debugger
    return (
      <div className="basic-single col-4 m-4 mx-auto search-bar">
        <Select
          styles={this.customStyles}
          classNamePrefix="select"
          placeholder="Search a city..."
          isSearchable="true"
          name="cities"
          options={this.props.locations}
          onChange={selectedOption =>
            this.props.handleOnChange(selectedOption.label, selectedOption.code)
          }
        />
      </div>
    );
  }

}
DropdownSelect.contextType = ThemeContext;
