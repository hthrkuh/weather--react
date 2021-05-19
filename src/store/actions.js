import store from './store'
import http from "../services/httpService";

export const TYPE_IN_CITYNAME_FIELD = "TYPE_IN_CITYNAME_FIELD"
export const weatherData = "weatherData"
export const SelectedOption = "SelectedOption"

const api_key = ["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3",
   "Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS",
   "EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud",
   "keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]

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
   return function () {

      return http.get(
         `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${api_key[2]}&details=true`
      )
         .catch(
            () => {
               http.get(
                  `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${api_key[3]}&details=true`
               ).then((response) => {

                  store.dispatch(forecast(response))
               })
            }
         )
         .then((response) => {
            if (response)
               store.dispatch(forecast(response))
         })



   }


};


export function forecast(forecast) {
   return {
      type: weatherData,
      weatherData: forecast.data.DailyForecasts,

   }
}

export function selectedOption(selectedOption) {
   return {
      type: SelectedOption,
      code: selectedOption.code,
      city: selectedOption.city,
   }
}




