import React, { Component } from "react";
import { FavWeather } from "./FavWeather";
import $ from "jquery";
import TemperatureConverter from "./TemperatureConverter";
import { ThemeContext } from '../context/ThemeContext'
import { favme } from "./Fav";
import { connect } from 'react-redux'
import store from '../store/store'
import { selectedOption, getForcast } from '../store/actions'


const Loading = () => <div className="loading">
    <div></div>
    <div></div>
</div>

class MyFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: new Date().getDay(),
            selectedConvert: true,
            weatherData: [],
            fav: this.props.fav()
        };
    }

    componentDidMount() {
        if (this.state.fav) {
            this.data()
        }

        favme()

    }
    componentWillMount() {
        this.setState({ fav: this.props.initfav() })

    }
    componentDidUpdate() {

    }


    data = () => {
        if (this.state.fav.length)
            Promise.all(this.state.fav.map(async (x, i) => {
                await this.props.getForcast(x[1])
                return this.props.weatherData
            })).then((data) => {
                this.setState({ weatherData: data })
            })
        else
            this.setState({ fav: this.props.fav() })
    }
    fav = (e) => {
        $(e.target).toggleClass('active');
        this.props.fav(e)
        this.data()
    }
    render() {
        const { theme, colorTheme } = this.context;
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

                        this.state.weatherData.length && this.state.fav.length ?
                            this.state.fav.map((x, i) => {
                                const selectedDay = [...this.state.weatherData[i]].findIndex((x) => this.state.selectedDay === new Date(x.Date).getDay())

                                return (
                                    <FavWeather
                                        key={i}
                                        handleDaySelection={(e) => {
                                            this.setState({
                                                selectedDay: e
                                            });
                                        }}
                                        selectedDay={selectedDay}
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
            </div >
        );
    }
}
MyFav.contextType = ThemeContext



const mapStateToProps = state => {
    return {
        weatherData: state.weatherData,
        selectedOption: state.selectedOption,
        code: state.code,
        city: state.city,
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

export default connect(mapStateToProps, mapDispatchToProps)(MyFav)
