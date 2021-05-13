import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

import API_URL from '../api/API1'
import isValid from '../utils/ValidityChecker'
import validName from './../utils/ValidCityName'
// import * as Sentry from '@sentry/browser'
// extends Component
export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }


    // export const Demo = async () => {


    // getForcast = async value => {
    //     const forecast = await axios.get(
    //         `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${value}?apikey=${this.api_key}&details=true`
    //     )
    //         .then(this.setState({ loading: false }));
    //     console.log(forecast)
    //     this.setState({
    //         weatherForcast: forecast.data.DailyForecasts
    //     });
    // };
    /**
    * update address using reverse geocoding of Algolia PLaces to obtain city, state, country, cityID
    */
    updateAddress = async (latlong) => {
        // debugger${API_URL}
        // let hit = {}
        try {
            //  await axios.get(`https://weather-react-api-dev.vercel.app/address/coords/${latlong}`)

            const data = (
                await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Wsq3PheOoDIcr7AlcgGAVrFwBchUHzyi&q=${latlong}`)
            ).data
            // var x = await key
            // const { hits } = (
            //     await axios.get(`https://weather-react-api-dev.vercel.app/address/coords/${latlong}`)
            // ).data
            // console.log(data)
            // debugger
            // hit = key[0]
            // 
            if (isValid(data)) {
                // debugger
                const city = data.AdministrativeArea.EnglishName
                const code = data.Key
                // const city = hit.city ? hit.city[0] : ''
                // const state = hit.administrative ? hit.administrative[0] : ''
                // const country = hit.country ? hit.country : ''
                // const cityName = `${validName(city)}${validName(state)}${validName(
                //     country,
                //     false
                // )}`
                // const cityId = hit.objectID ? hit.objectID : ''
                // country_code in hit will be in lowercase
                // const countryCode = hit.country_code
                //     ? hit.country_code.toUpperCase()
                //     : ''
                // this.updateWeatherUnit(countryCode)
                // debugger
                // debugger
                this.setState({ city: city })
                this.props.handleOnChange(city, code, 1)
                // return {
                //     code: code,
                //     city: city
                // }
                // this.updateState({
                //     code: code,
                //     city: city
                // })
            }
        } catch (error) {

            console.log(error)
            //  Sentry.captureException(error)
        }
    }
    formatCoords = (latitude, longitude) => {
        // debugger

        return `${latitude},${longitude}`
    }
    getAddress = async () => {

        // debugger
        //  const data = {}
        if ('geolocation' in navigator) {



            await navigator.geolocation.getCurrentPosition(

                async (position) => {
                    const latlong = this.formatCoords(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                    // await
                    var y = this.updateAddress(latlong)
                    // debugger
                    // data.y = y
                    // data.position = position


                },
                (error) => {
                    ///debugger
                    console.error(error)
                    //     this.getIPAddress()
                }
            )
        } else {
            // debugger
            //  this.getIPAddress()
        }
        // debugger
        // return data
    }


    // const d = await getAddress() //Promise.resolve(getAddress())
    // debugger
    // return d







    componentDidMount() {

        // navigator.geolocation.getCurrentPosition(function (position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     console.log("Longitude is :", position.coords.longitude);
        // });
        this.getAddress()
    }

    render() {
        return (
            <div>
                <h4>Using geolocation JavaScript API in React</h4>
                <span>your location :{this.state.city || "please confirm access to your location"}</span>
            </div>
        );
    }
}

// export default Demo;