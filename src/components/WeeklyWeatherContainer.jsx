import React, { Component } from "react";
import { SingleDayWeather } from "./SingleDayWeather";
import Moment from "react-moment";
import { connect } from 'react-redux'
import { ThemeContext } from '../context/ThemeContext'

class WeeklyWeatherContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {
    const {
      weatherData,
      selectedCity,
      selectedDay,
      handleDaySelection,
      selectedConvert,
    } = this.props
    const { theme, colorTheme } = this.context;

    return (
      <div id={selectedCity} className={`border border-3 border-${theme} container col-11 mx-auto mt-2 gray  rounded text-${colorTheme}`} >

        {
          weatherData[0] ? (
            <div className="d-flex p-2 bd-highlight justify-content-center top-weather" >
              <div className="flex-row bd-highlight">
                <h4>{selectedCity}</h4>
                <Moment format="dddd">{weatherData[selectedDay].Date}</Moment>

                <div className="flex-row bd-highlight">
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${weatherData[selectedDay].Day.Icon >= 10
                      ? weatherData[selectedDay].Day.Icon
                      : "0" + weatherData[selectedDay].Day.Icon
                      }-s.png`}
                    alt="weather-icon"
                  />
                  <p>{weatherData[selectedDay].Day.IconPhrase}</p>
                </div>
              </div>
            </div>
          ) : null
        }

        <div className="bd-highlight bottom-weather d-flex flex-wrap justify-content-center p-2">
          {weatherData.map((day, index) => (
            <SingleDayWeather
              selectedDay={selectedDay}
              dayIndex={index}
              key={day.EpochDate}
              dayDate={day.Date}
              dayIcon={day.Day.Icon}
              dayMaxTemp={selectedConvert ? day.Temperature.Maximum.Value : ((parseFloat(day.Temperature.Maximum.Value) - 32) / 1.8).toFixed(2)}
              dayMinTemp={selectedConvert ? day.Temperature.Minimum.Value : ((parseFloat(day.Temperature.Minimum.Value) - 32) / 1.8).toFixed(2)}
              selectedConvert={selectedConvert}
              handleDaySelection={() => handleDaySelection(index)}
            />
          ))}
        </div>
      </div >
    )
  };
};

WeeklyWeatherContainer.contextType = ThemeContext

const mapStateToProps = state => {

  return {
    weatherData: state.weatherData
  }
}

const mapDispatchToProps = (e) => {

  return {

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(WeeklyWeatherContainer)
