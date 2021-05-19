import React, { Component } from "react";
import "./App.css";
import http from "./services/httpService";
import $ from "jquery";
import DropdownSelect from "./components/DropdownSelect";
import TemperatureConverter from "./components/TemperatureConverter";
import WeeklyWeatherContainer from "./components/WeeklyWeatherContainer";
import Fav from "./components/Fav";
import { favme } from "./components/Fav";
import Demo from "./components/Geo";
import { ThemeContext } from './context/ThemeContext'
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux'
import store from './store/store'
import { selectedOption, getForcast } from './store/actions'

const Loading = () => <div className="loading">
  <div></div>
  <div></div>
</div>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationsApi: [],
      fav: [],
      selectedDay: 0,
      selectedConvert: true,

    };

  }
  async componentDidMount() {

    await this.getLocations();
    let { code, selectedCity } = queryString.parse(this.props.location.search)
    if (code) {
      this.props.selectedOption({ code: code, city: selectedCity })
    }
    await this.props.getForcast(code || this.props.code)

    favme()
    this.setState({ fav: this.props.initfav() })
  }
  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.props.selectedOption("Tel Aviv", "215854")
    }
  }

  getLocations = async () => {
    // debugger
    const locations = await http.get(
      `https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=${this.props.api_key[2]}`
      // , 
      // {https://cors-anywhere.herokuapp.com/
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      //   }
      // }
    )
    // .then((response) => {
    //   console.log(response);
    //   return response
    // })
    // .catch((error) => {
    //   console.log(error);
    //   debugger
    //   // toast;
    // });
    const cityCountry = [];
    if (locations) {
      for (let location of locations.data) {
        let label = location.AdministrativeArea.EnglishName;
        let value = location.Country.EnglishName;
        let code = location.Key;
        cityCountry.push({ label, value, code });
      }
      this.setState({ locationsApi: cityCountry });
    }

  };


  fav = (e) => {
    $(e.target).toggleClass('active');
    this.setState({
      fav: this.props.fav(e)
    })
  }

  render() {
    const { theme, colorTheme } = this.context;
    // console.log(this.state, "state")

    // debugger
    return (
      <React.Fragment>
        <div className={`pb-5 bg-${colorTheme} text-${theme} text-center`} style={{ minHeight: "inherit" }} >
          <h1 className="pt-4">Weather Forcast</h1>
          {
            this.props.location.search ? "" : <Demo handleOnChange={this.handleOnChange} />
          }

          <TemperatureConverter
            handleOnChange={
              (e) => {
                this.setState({
                  selectedConvert: this.props.temperatureConverter(e)
                });
              }
            }
            checked={this.selectedConvert}
          />

          <DropdownSelect
            locations={this.state.locationsApi}
          />
          <div className="content">


            {
              this.props.weatherData ?
                [
                  < Fav
                    key="fav"
                    city={this.props.city}
                    code={this.props.code}
                    active={this.state.fav.flat().indexOf(this.props.code) > -1}
                    handleOnChange={(e) => this.fav(e)}
                  />
                  ,
                  this.props.loading ?
                    <Loading key="Loading" />
                    :
                    Object.keys(this.props.weatherData).length === 0 ?
                      "" :
                      <WeeklyWeatherContainer
                        key="WeeklyWeatherContainer"
                        handleDaySelection={(e) => {
                          this.props.handleDaySelection(e)
                          this.setState({
                            selectedDay: e
                          });
                        }}
                        selectedDay={this.state.selectedDay}
                        selectedCity={this.props.city}
                        selectedConvert={this.state.selectedConvert}
                      />
                ] : ""}

          </div>
        </div>
      </React.Fragment >
    );
  }
}
App.contextType = ThemeContext


const mapStateToProps = state => {
  // debugger
  return {
    weatherData: state.weatherData,
    selectedOption: state.selectedOption,
    code: state.code,
    city: state.city,
    api_key: state.api_key,
  }
}

const mapDispatchToProps = (e) => {

  return {
    getForcast: (e) => {
      // debugger
      return store.dispatch(getForcast(e))
    },
    selectedOption: (e) => {
      // debugger
      return store.dispatch(selectedOption(e))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

