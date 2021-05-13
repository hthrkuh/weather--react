import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import MyFav from "./components/MyFav";
// import HeaderComponent from "./components/HeaderComponent";
import { ThemeContextProvider } from './context/ThemeContext'
import { ThemeContext } from './context/ThemeContext'
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";


class Index extends Component {
  constructor() {
    super();
    this.api_key = "jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3"//"Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS" //"keIkcwQuwHMsCqZJawOVskNUec3ErVQq"
    this.state = {
      loading: true,
      locationsApi: [],
      selectedCity: 0,
      weatherForcast: [],
      myfav: [],
      selectedDay: "0",
      selectedConvert: true,
      code: ""
    };
    // let value = this.context;
  }
  // loading = (x) => {
  //   // debugger
  //   this.setState({ loading: x })
  // }
  getForcast = async value => {

    const forecast = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${this.api_key}&details=true`
    )
    //      .then();

    this.state.weatherForcast = forecast.data.DailyForecasts
    return forecast.data.DailyForecasts
    // console.log(forecast)
    // this.setState({
    //   weatherForcast: forecast.data.DailyForecasts
    // });
  };
  handleDaySelection = e => {

    this.state.selectedDay = e

    return e
    // this.setState({
    //   selectedDay: e
    // });
  };

  temperatureConverter = e => {
    // console.log(e, e.target.checked)
    this.state.selectedConvert = e.target.checked
    return e.target.checked
  }
  fav = e => {
    // console.log(e.target.getAttribute("code"))
    // debugger
    var myfav = this.state.myfav
    var target = e.target
    if ([...target.classList].indexOf("active") === -1) {
      var index = myfav.findIndex(x => x[1] === target.getAttribute("code"))
      myfav.splice(index, 1)
    } else {
      myfav.push([target.getAttribute("city"), target.getAttribute("code")])
    }

    localStorage.setItem('fav', JSON.stringify(myfav))


    return myfav
    // this.setState({
    //   fav: this.state.myfav
    // });
  }
  initfav = () => {
    if (localStorage.getItem('fav')) {
      /// debugger
      this.state.myfav = JSON.parse(localStorage.getItem('fav'))
    }
    //debugger
    // console.log(e.target.getAttribute("code"))
    return this.state.myfav
  }
  render() {
    const { theme, colorTheme } = this.context;
    // debugger
    // console.log(this.state)
    return (
      <ThemeContextProvider>
        <BrowserRouter>
          {/* pb-5 style={{ height: "0" }}*/}
          <header className={` bg-${colorTheme} text-${theme}`} >
            <Navbar />
          </header>
          {/* pt-5 */}
          <main className="flex-column" style={{ minHeight: "450px" }}>
            {/* style={{ minHeight: "inherit" }} */}
            <Switch>
              <Route path="/MyFav" component={() => <MyFav
                initfav={this.initfav}
                myfav={this.state.myfav}
                state={this.state}
                getForcast={this.getForcast}
                temperatureConverter={this.temperatureConverter}
                handleDaySelection={this.handleDaySelection}
                fav={this.fav}
                isAuthed={true}
              />} />
              <Route path="/" exact component={() => <App
                state={this.state}
                initfav={this.initfav}
                // loading={this.loading}
                getForcast={this.getForcast}
                temperatureConverter={this.temperatureConverter}
                handleDaySelection={this.handleDaySelection}
                fav={this.fav} isAuthed={true}
              />}
              />
            </Switch>
          </main >
          <footer>
            <div className="text-center">
              <span>made with love by yair ♥</span>
              <div style={{
                position: 'fixed',
                // top: 0,
                bottom: 0,
                border: 0,
                left: 0,
              }}>
                <a
                  href='https://github.com/iamsainikhil/weather-react'
                  className='github-corner'
                  aria-label='View source on GitHub'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <svg
                    width='80'
                    height='80'
                    viewBox='0 0 250 250'
                    style={{
                      fill: '#292929',
                      color: '#fff',

                      transform: 'scale(-1, -1)',
                    }}
                    aria-hidden='true'>
                    <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z'></path>
                    <path
                      d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
                      fill='currentColor'
                      style={{ transformOrigin: '130px 106px' }}
                      className='octo-arm'></path>
                    <path
                      d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
                      fill='currentColor'
                      className='octo-body'></path>
                  </svg>
                </a>
              </div>

            </div>
          </footer>
        </BrowserRouter>
      </ThemeContextProvider>
    )

  }
}
Index.contextType = ThemeContext;

// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap/dist/js/bootstrap.js";
ReactDOM.render(
  <Index />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


