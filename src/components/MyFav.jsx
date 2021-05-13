import React, { Component } from "react";
// import { WeeklyWeatherContainer } from "./WeeklyWeatherContainer";
import { WeeklyWeatherContainer } from "./FavWeather";

import $ from "jquery";

import TemperatureConverter from "./TemperatureConverter";
import { ThemeContext } from '../context/ThemeContext'
import { favme } from "./Fav";

// import App from '../App';
const Loading = () => <div className="loading">
    <div></div>
    <div></div>
</div>

export default class MyFav extends Component {
    constructor(props) {
        super(props);
        // debugger
        this.api_key = "jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3"//"Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS" //"keIkcwQuwHMsCqZJawOVskNUec3ErVQq"
        this.state = {
            loading: true,
            locationsApi: [],
            selectedCity: 0,
            weatherForcast: [],
            selectedDay: new Date().getDay(), //0,
            selectedConvert: true,
            code: "",
            weatherData: [],
            fav: []
        };
        this.test = [["Dhaka000", "28143"]]
        // this.data = this.test.map(async (x, i) => {
        //     var t = await this.handlecode(x[0], x[1])
        //     return t
        // })
        // this.data()

    }

    componentDidMount() {
        // if (localStorage.getItem('fav')) {
        //    this.state.fav = localStorage.getItem('fav')
        // }
        this.refresh()
        favme()
        // this.props.initfav()

        // this.data().then(data => {
        //     this.setState({ "weatherData": data });//.flat()
        //     console.log(data)
        // })
        // if (this.props.MyFav)
        //     this.data().then(data => {
        //         this.setState({ "weatherData": data.flat() });
        //         console.log(data)
        //     })
    }
    componentWillMount() {
        // debugger
        this.setState({ fav: this.props.initfav() })

    }
    componentDidUpdate() {
        // debugger



        //   this.refresh()
    }
    handlecode = async (city, code) => {
        // this.setState({ "code": code, "selectedCity": city, loading: true });//
        // this.props.loading(true)
        // debugger
        // this.setState({ "code": code, "selectedCity": city });
        var x = await this.props.getForcast(code)
        return x
        // this.isLoading = setTimeout(() => {
        //     this.setState({
        //         weatherForcast: x, loading: false
        //     });
        // }, 1000);

    }
    refresh = () => {
        if (this.state.fav)
            this.data().then(data => {
                this.setState({ "weatherData": data });//.flat()

                console.log(data)
            })
        // 
    }
    // componentWillMountnt() {
    //     if (this.props.MyFav)
    //         this.data().then(data => {
    //             this.setState({ "weatherData": data.flat() });
    //             console.log(data)
    //         })
    // }
    data = async () => {
        return Promise.all(this.state.fav.map((x, i) => this.props.getForcast(x[1]))).then(data => {
            return data
            //  console.log(data)
        })
        // const a = await weatherData;
        // console.log(a)
        // return a
    }
    fav = (e) => {
        // debugger
        $(e.target).toggleClass('active');
        this.state.fav = this.props.fav(e)
        this.refresh()
        // this.setState({
        //     fav: 
        // })
    }
    render() {

        const { theme, colorTheme } = this.context;
        console.log(this.state, "state my fav")
        console.log(this.props.myfav, this.state.weatherData, "my fav")
        // debugger
        return (
            <div className={`pb-5 bg-${colorTheme} text-${theme} text-center`} style={{ minHeight: "inherit" }} >
                <h1 className="pt-4">My favorites</h1>
                {
                    this.state.weatherData.length ? <TemperatureConverter
                        handleOnChange={
                            (e) => {
                                this.setState({
                                    selectedConvert: this.props.temperatureConverter(e)
                                });
                            }
                        }
                        checked={this.selectedConvert}
                    /> : ""
                }
                <div className="d-flex flex-lg-nowrap flex-wrap">
                    {

                        this.state.weatherData.length ?
                            this.state.fav.map((x, i) => {
                                // var data = async () => await .props.myfav
                                return (
                                    <WeeklyWeatherContainer
                                        key={i}
                                        handleDaySelection={(e) => {
                                            //  this.props.handleDaySelection(e)
                                            this.setState({
                                                selectedDay: e
                                            });
                                        }}
                                        selectedDay={this.state.selectedDay}
                                        selectedCity={x[0]}
                                        code={x[1]}
                                        weatherData={this.state.weatherData[i]}
                                        selectedConvert={this.state.selectedConvert}
                                        fav={this.fav}
                                    />

                                )
                            })
                            : this.state.fav.length ? <Loading key="Loading" />
                                : <h1>No favorites found</h1>

                    }
                </div >
                {/* ${this.data().then(data => {
                                this.setState({ "weatherData": data });//.flat()
                                console.log(data)
                            })} */}
            </div >
        );
    }
}
MyFav.contextType = ThemeContext
