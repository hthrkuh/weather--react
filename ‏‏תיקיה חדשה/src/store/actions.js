import store from './store'
// import http from "http";
import http from "../services/httpService";
export const TYPE_IN_CITYNAME_FIELD = "TYPE_IN_CITYNAME_FIELD"
export const THROW_CALLER_ERROR = "THROW_CALLER_ERROR";
export const weatherData = "weatherData"
export const SelectedOption = "SelectedOption"

const api_key = ["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3", "Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS", "EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud", "keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]

export function typePlacename(e) {

   let res = /^[a-zA-Z]+$/.test(e);
   let err
   if (!res && e !== "") {
      err = true
   } else {
      err = false
   }
   return {
      type: TYPE_IN_CITYNAME_FIELD,
      err: err
   }
}
export function getForcast(value) {
   // debugger
   return function () {
      // const forecast = 
      return http.get(
         `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${api_key[2]}&details=true`
      ).then((response) => {
         // debugger
         store.dispatch(forecast(response))
      })

   }


};


export function forecast(forecast) {
   // debugger
   return {
      type: weatherData,
      weatherData: forecast.data.DailyForecasts,

   }
}

export function selectedOption(selectedOption) {
   // debugger
   return {
      type: SelectedOption,
      code: selectedOption.code,
      city: selectedOption.city,
   }
}


// return function () {

//    fetch(url)
//       .then(results => results.json())
//       .then(weatherData => {
//          store.dispatch(receiveWeatherData(weatherData))
//       })
//       .catch((error) => {
//          store.dispatch(throwCallerError(error.message))
//       })


// }



export function throwCallerError(error) {
   return {
      type: THROW_CALLER_ERROR,
      error: error
   }
}


