import React, { Component } from "react";
// import axios from "axios";
import http from "../services/httpService";
import isValid from '../utils/ValidityChecker'
import { connect } from 'react-redux'
import store from '../store/store'
import { selectedOption } from '../store/actions'


// import * as Sentry from '@sentry/browser'
// export default 
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    /**
    * update address using reverse geocoding of Algolia PLaces to obtain city, state, country, cityID
    */
    updateAddress = async (latlong) => {

        try {

            const data = (
                await http.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${this.props.api_key[2]}&q=${latlong}`)

            ).data

            if (isValid(data)) {
                const city = data.AdministrativeArea.EnglishName
                const code = data.Key
                this.setState({ city: city })
                this.props.selectedOption({ city: city, code: code })
            }

        } catch (error) {
            console.log(error)
        }
    }
    formatCoords = (latitude, longitude) => {
        return `${latitude},${longitude}`
    }
    getAddress = async () => {
        if ('geolocation' in navigator) {
            await navigator.geolocation.getCurrentPosition(

                async (position) => {
                    const latlong = this.formatCoords(
                        position.coords.latitude,
                        position.coords.longitude
                    )
                    this.updateAddress(latlong)
                },
                (error) => {
                    console.error(error)
                }
            )
        }
    }
    componentDidMount() {
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


const mapStateToProps = state => {

    return {
        code: state.code,
        city: state.city,
        api_key: state.api_key,
    }
}

const mapDispatchToProps = (e) => {

    return {
        selectedOption: (e) => {
            return store.dispatch(selectedOption(e))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)