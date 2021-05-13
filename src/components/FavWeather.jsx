import React from "react";
// import { SingleDayWeather } from "./SingleDayWeather";
import Moment from "react-moment";
import { NavLink, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import App from '../App';
import Fav from "./Fav";

export const WeeklyWeatherContainer = ({
    weatherData,
    selectedCity,
    code,
    selectedDay,
    handleDaySelection,
    selectedConvert,
    fav
}) => {
    // debugger
    return (


        // <Route path="/" exact component={
        //     () => <App
        //         state={this.state}
        //         initfav={this.initfav}
        //         // loading={this.loading}
        //         getForcast={this.getForcast}
        //         temperatureConverter={this.temperatureConverter}
        //         handleDaySelection={this.handleDaySelection}
        //         fav={this.fav} isAuthed={true} />
        // }>
        <div className="col-11 flex-fill m-0 m-2 navbar-brand">
            {/* col-11 flex-fill m-0 m-2 */}

            <div id={selectedCity} code={code} className="container h-100  mx-auto mt-2 gray  rounded text-white ">

                {weatherData[0] ? (
                    <Link className=" navbar-brand" to={{
                        pathname: "/",
                        search: "?selectedCity=" + selectedCity + "&code=" + code,
                        //hash: "#the-hash",
                        // state: { selectedCity: selectedCity, code: code }
                    }}>
                        <div className="d-flex p-2 bd-highlight justify-content-center text-light text-break ">

                            <div className="flex-row bd-highlight text-wrap">

                                <h4>{selectedCity}</h4>
                                <Moment format="dddd">{weatherData[selectedDay].Date}</Moment>

                                <div className="flex-row bd-highlight">
                                    <span className="">
                                        {selectedConvert ? weatherData[selectedDay].Temperature.Minimum.Value + " F°" : ((parseFloat(weatherData[selectedDay].Temperature.Minimum.Value) - 32) / 1.8).toFixed(2) + " C°"}
                                    </span>                            <img
                                        src={`https://developer.accuweather.com/sites/default/files/${weatherData[selectedDay].Day.Icon >= 10
                                            ? weatherData[selectedDay].Day.Icon
                                            : "0" + weatherData[selectedDay].Day.Icon
                                            }-s.png`}
                                        alt="weather-icon"
                                    />
                                    <span>
                                        {selectedConvert ? weatherData[selectedDay].Temperature.Maximum.Value + " F°" : ((parseFloat(weatherData[selectedDay].Temperature.Maximum.Value) - 32) / 1.8).toFixed(2) + " C°"}
                                    </span>

                                    <p>{weatherData[selectedDay].Day.IconPhrase}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ) : null}
                < Fav
                    key={code}
                    city={selectedCity}
                    code={code}
                    active={true}
                    handleOnChange={(e) => fav(e)}
                />
            </div >
            {/* </Link > */}

        </div>
    );
};
