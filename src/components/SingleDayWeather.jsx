import React from "react";
import Moment from "react-moment";

export const SingleDayWeather = ({
  selectedDay,
  dayIndex,
  dayDate,
  dayIcon,
  dayMinTemp,
  dayMaxTemp,
  selectedConvert,
  handleDaySelection,
}) => {
  return (
    <div
      className={`border border-2 border-dark me-1 mb-2 single-day ${selectedDay === dayIndex ? "selected" : ""}`}
      onClick={handleDaySelection}
    >
      <div className="flex-row bd-highlight m-2 ">
        <h6>
          <Moment format="ddd">{dayDate}</Moment>
        </h6>
        <img
          className="small-image"
          src={`https://developer.accuweather.com/sites/default/files/${dayIcon >= 10 ? dayIcon : "0" + dayIcon
            }-s.png`}
          alt="weather-icon"
        />
        <h6>{dayMaxTemp} {selectedConvert ? "°F" : "°C"}</h6>
        <h6>{dayMinTemp} {selectedConvert ? "°F" : "°C"}</h6>
      </div>
    </div>
  );
};
