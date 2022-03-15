import React, { Component } from "react";
import "./css/App.css";
import http from "./services/httpService";
import $ from "jquery";
import DropdownSelect from "./components/DropdownSelect";
import FlyIcons from "./components/flyicon";

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
import { toast } from "react-toastify";

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
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search && !this.props.geo) {
      this.props.selectedOption({ code: "215854", city: "Tel Aviv" })
      this.props.getForcast("215854")
    }
  }

  getLocations = async () => {

    let locations
    const api_keys = JSON.parse(process.env.REACT_APP_API_KEYS)
    for (let i = 0; i < api_keys.length; i++) {

      locations = await new Promise((resolve, reject) => {
        resolve(http.get(
          `https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=${api_keys[i]}`
        ).catch((x => reject(x))))
      }).catch((x) => {
        console.error(x)
        toast.info("API KEY HAS BEEN CHANGED")
      })

      if (locations)
        break

      if (i === api_keys.length - 1)
        toast.info("ALL API KEYS HAS BEEN USED TRY AGAIN TOMORROW");

    }






    const cityCountry = [];
    if (locations?.data) {
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
          <FlyIcons />
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
          {/* <!-- hitwebcounter Code START --> */}
          <a href="https://www.hitwebcounter.com" rel="noreferrer" target="_blank">
            <img src="https://hitwebcounter.com/counter/counter.php?page=7826724&style=0001&nbdigits=5&type=page&initCount=0" title="Free Counter" alt="web counter" border="0" />
          </a>
          <div id="sfcbg6g2l2n5jf3rhu8t5y6m5r3f5h9e82x"></div>

          <noscript>
            <a href="https://www.freecounterstat.com" title="hit counter for website">
              <img src="https://counter6.stat.ovh/private/freecounterstat.php?c=bg6g2l2n5jf3rhu8t5y6m5r3f5h9e82x" border="0" title="hit counter for website" alt="hit counter for website" />
            </a>
          </noscript>
        </div>
      </React.Fragment >
    );
  }
}
App.contextType = ThemeContext


const mapStateToProps = state => {
  return {
    weatherData: state.weatherData,
    code: state.code,
    city: state.city,
    loading: state.loading,
    geo: state.geo
  }
}

const mapDispatchToProps = (e) => {

  return {
    getForcast: (e) => {
      return store.dispatch(getForcast(e))
    },
    selectedOption: (e) => {
      return store.dispatch(selectedOption(e))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))

