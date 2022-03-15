import React, { Component } from "react";
import Select from "react-select";
import { ThemeContext } from '../context/ThemeContext'
import store from '../store/store'
import { connect } from 'react-redux'
import { selectedOption, typePlacename, getForcast } from '../store/actions'

class DropdownSelect extends Component {



  constructor(props) {
    super(props);
    this.state = {}

    this.customStyles = {
      noOptionsMessage: base => ({
        ...base, background: "black",
        color: "red"
      }),
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
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
      }
    }
  }

  onInputChange = (e) => {
    this.props.placenameHandler(e)
  }
  onChange = selectedOption => {
    this.props.selectedOption({ city: selectedOption.label, code: selectedOption.code })
    this.props.getForcast(selectedOption.code)

  }
  render() {
    return (
      <div className="basic-single col-4 m-4 mx-auto search-bar">
        {this.props.err ? <span className="text-danger">Only english letters allowed</span> : ""}

        <Select
          styles={this.customStyles}
          classNamePrefix="select"
          placeholder="Search a city..."
          isSearchable="true"
          name="cities"
          options={this.props.locations}
          onChange={this.onChange}
          onInputChange={this.onInputChange}
          noOptionsMessage={({ inputValue }) => {
            // debugger
            return /[^A-Za-z]/ig.test(inputValue)
              ? "Searching should be done in English letters only" : "No results found"
          }}
        />

      </div>
    );
  }

}
DropdownSelect.contextType = ThemeContext;



const mapStateToProps = state => {

  return {
    err: state.userInput.err,
    DailyForecasts: state.DailyForecasts
  }
}

const mapDispatchToProps = (e) => {

  return {
    placenameHandler: (e) => {
      return store.dispatch(typePlacename(e))
    },
    getForcast: (e) => {
      return store.dispatch(getForcast(e))
    },
    selectedOption: (e) => {
      return store.dispatch(selectedOption(e))
    }

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DropdownSelect)
