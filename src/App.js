import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import $ from "jquery";
import DropdownSelect from "./components/DropdownSelect";
import TemperatureConverter from "./components/TemperatureConverter";
import { WeeklyWeatherContainer } from "./components/WeeklyWeatherContainer";
import Fav from "./components/Fav";
import { favme } from "./components/Fav";
import Demo from "./components/Geo";
import { ThemeContext } from './context/ThemeContext'
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import {
  useParams
} from "react-router-dom";

// import { FavContextProvider } from './context/FavContext'
// import { fav } from './context/FavContext'


// import { ThemeContextProvider } from './context/ThemeContext'
const Loading = () => <div className="loading">
  <div></div>
  <div></div>
</div>
// const Paramss = () => {
//   let { selectedCity, code } = useParams();
//   debugger
//   return { selectedCity: selectedCity, code: code }
// }
class App extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id)
    // debugger
    this.api_key = "jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3"//"Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS"//"keIkcwQuwHMsCqZJawOVskNUec3ErVQq"
    this.state = {
      loading: true,
      locationsApi: [],
      selectedCity: "Tel Aviv",
      weatherForcast: [],
      fav: [],
      selectedDay: 0,
      selectedConvert: true,
      code: "215854"
    };

    // let value = this.context;
  }
  d = async () => await Demo()
  async componentDidMount() {

    // await this.d()
    // const xc = await  
    // const xc = await this.d()
    // debugger
    //console.log(uu, "ssssssssssssssssssssssssssssssssssss")

    // if ("geolocation" in navigator) {
    //   console.log("Available");
    // } else {
    //   console.log("Not Available");
    // }
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log(position)
    // });
    await this.getLocations();
    // let { selectedCity, code } = useParams();//this.Params()
    // let { selectedCity, code } = Paramss()
    // debugger
    let { code, selectedCity } = queryString.parse(this.props.location.search)//this.props.location.state

    this.handleOnChange(selectedCity || this.state.selectedCity, code || this.state.code)
    favme()
    this.setState({ fav: this.props.initfav() })
    // this.isLoading = setTimeout(() => { this.setState({ loading: false }) }, 2300);
  }
  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }
  componentDidUpdate(prevProps, prevState) {
    // debugger
    if (prevProps.location.search !== this.props.location.search) {
      this.handleOnChange("Tel Aviv", "215854")
      console.log('pokemons state has changed.')
    }
  }
  // getForcast = async value => {
  //   const forecast = await axios.get(
  //     `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${this.api_key}&details=true`
  //   )
  //     .then(this.setState({ loading: false }));
  //   console.log(forecast)
  //   this.setState({
  //     weatherForcast: forecast.data.DailyForecasts
  //   });
  // };

  getLocations = async () => {
    const locations = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=${this.api_key}`
    );
    // console.log(locations)
    const cityCountry = [];
    for (let location of locations.data) {
      let label = location.AdministrativeArea.EnglishName;
      let value = location.Country.EnglishName;
      let code = location.Key;
      cityCountry.push({ label, value, code });
    }
    this.setState({ locationsApi: cityCountry });

    // this.setState({ loading: false })

  };

  handleOnChange = async (city, code, x) => {
    // debugger
    this.setState({ "code": code, "selectedCity": city, loading: true });//
    // this.props.loading(true)
    // debugger
    // this.setState({ "code": code, "selectedCity": city });
    var x = await this.props.getForcast(code)
    this.isLoading = setTimeout(() => {
      this.setState({
        weatherForcast: x, loading: false
      });
    }, 500);

  };

  // handleDaySelection = e => {
  //   this.setState({
  //     selectedDay: e
  //   });
  // };

  // temperatureConverter = e => {
  //   console.log(e, e.target.checked)
  //   this.setState({
  //     selectedConvert: e.target.checked
  //   });
  // }
  // fav = e => {
  //   // console.log(e.target.getAttribute("code"))
  //   this.state.fav.push([e.target.getAttribute("city"), e.target.getAttribute("code")])
  //   this.setState({
  //     fav: this.state.fav
  //   });
  // }
  // mayfav = () => {
  //   this.setState({});
  //   return this.state

  //   // .weatherForcast ? Object.keys(this.state.weatherForcast).length === 0 ?
  //   //   "" :
  //   //   <WeeklyWeatherContainer
  //   //     key="WeeklyWeatherContainer"
  //   //     handleDaySelection={this.handleDaySelection}
  //   //     selectedDay={this.state.selectedDay}
  //   //     selectedCity={this.state.selectedCity}
  //   //     weatherData={this.state.weatherForcast}
  //   //     selectedConvert={this.state.selectedConvert}
  //   //   />
  //   //   :
  //   //   ""
  // }
  fav = (e) => {
    $(e.target).toggleClass('active');
    this.setState({
      fav: this.props.fav(e)
    })
  }

  render() {
    const { theme, colorTheme } = this.context;
    // debugger
    console.log(this.state, "state")
    console.log(this.props.state, "prop state")
    return (
      <React.Fragment>
        {/* <ThemeContextProvider> */}
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
            handleOnChange={this.handleOnChange}
          />
          <div className="content">


            {//this.state.selectedCity ?
              this.state.weatherForcast ?
                [/* <FavContextProvider> */
                  < Fav
                    key="fav"
                    city={this.state.selectedCity}
                    code={this.state.code}
                    active={this.state.fav.flat().indexOf(this.state.code) > -1}
                    handleOnChange={(e) => this.fav(e)}
                  //    {
                  //   //  console.log([...e.target.classList].indexOf("active"))
                  //   // this.state.fav

                  //   this.setState({
                  //     fav: this.props.fav(e)
                  //   })
                  // }}
                  />
                  /* </FavContextProvider> */
                  ,
                  this.state.loading ?
                    <Loading key="Loading" />
                    :
                    Object.keys(this.state.weatherForcast).length === 0 ?
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
                        selectedCity={this.state.selectedCity}
                        weatherData={this.state.weatherForcast}
                        selectedConvert={this.state.selectedConvert}
                      />
                ] : ""}

          </div>
        </div>
        {/* </ThemeContextProvider> */}
      </React.Fragment >
    );
  }
}
// debugger
// console.log(fav, ThemeContext)

// const AppContext = React.createContext({
//   ...fav, ...
// })
// var data = {}
App.contextType = ThemeContext


export default withRouter(App);;
