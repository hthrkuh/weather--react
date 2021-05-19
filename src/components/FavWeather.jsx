import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Fav from "./Fav";

export const FavWeather = ({
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


        <div className="single-day col-11 flex-fill m-0 m-2 navbar-brand">
            <div id={selectedCity} code={code} className="container h-100  mx-auto mt-2 gray  rounded text-white ">

                {weatherData[0] ? (
                    <Link className=" navbar-brand" to={{
                        pathname: "/weather--react",
                        search: "?selectedCity=" + selectedCity + "&code=" + code,
                    }}>
                        <div className=" d-flex p-2 bd-highlight justify-content-center text-light text-break ">

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
        </div>
    );
};
