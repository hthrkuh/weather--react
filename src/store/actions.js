import store from './store'
import http from "../services/httpService";
import { toast } from "react-toastify";

export const TYPE_IN_CITYNAME_FIELD = "TYPE_IN_CITYNAME_FIELD"
export const weatherData = "weatherData"
export const SelectedOption = "SelectedOption"



export function typePlacename(e) {

   let res = /[^A-Za-z-\s]/ig.test(e);
   let err
   if (res && e !== "") {
      err = true
   } else {
      err = false
   }
   return {
      type: TYPE_IN_CITYNAME_FIELD,
      err: err
   }
}

export function getLocations(q = "Tel Aviv") {

   return async function () {
      if (/[^A-Za-z-\s]/ig.test(q))
         return []

      let locations
      const api_keys = JSON.parse(process.env.REACT_APP_API_KEYS)
      for (let i = 0; i < api_keys.length; i++) {

         locations = await new Promise((resolve, reject) => {
            resolve(http.get(
               `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${api_keys[i]}&q=${q}`
            ).catch((x) => {
               console.error(x)
               toast.info("API KEY HAS BEEN CHANGED")
            }))
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
            let label = location.AdministrativeArea.LocalizedName + " - " + location.LocalizedName;
            let value = location.Country.LocalizedName;
            let code = location.Key;
            cityCountry.push({ label, value, code });
         }

      }
      return cityCountry
   }
};



export function getForcast(value) {
   return async function () {
      const api_keys = JSON.parse(process.env.REACT_APP_API_KEYS)
      let Forecast
      for (let i = 0; i < api_keys.length; i++) {


         Forecast = await new Promise((resolve, reject) => {
            resolve(http.get(
               `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${api_keys[i]}&details=true`
            ).catch((x) => {
               console.error(x)
               toast.info("API KEY HAS BEEN CHANGED")
            }))
         }).catch((x) => {
            console.error(x)
            toast.info("API KEY HAS BEEN CHANGED")
         })

         if (Forecast)
            return store.dispatch(forecast(Forecast))


      }

   }




};


export function forecast(forecast) {
   return {
      type: weatherData,
      weatherData: forecast?.data.DailyForecasts,

   }
}

export function selectedOption(selectedOption) {
   return {
      type: SelectedOption,
      code: selectedOption.code,
      city: selectedOption.city,
   }
}




