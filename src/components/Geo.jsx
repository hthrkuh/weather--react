import React, { Component } from "react";
import http from "../services/httpService";
import isValid from '../utils/ValidityChecker'
import { connect } from 'react-redux'
import store from '../store/store'
import { selectedOption, getForcast } from '../store/actions'

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
        let data
        const api_keys = JSON.parse(process.env.REACT_APP_API_KEYS)
        try {

            data = (
                await http.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${api_keys[1]}&q=${latlong}`)

            ).data
        } catch (error) { //https://cors-anywhere.herokuapp.com/
            data = (
                await http.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${api_keys[3]}&q=${latlong}`)
            ).data

        } finally {
            if (isValid(data)) {
                const city = data.AdministrativeArea.EnglishName
                const code = data.Key
                this.setState({ city: city })
                this.props.selectedOption({ city: city, code: code, geo: true })
                this.props.getForcast(code)
            }
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
                <span>your location :{this.state.city || <span className="text-danger"> please confirm access to your location </span>}</span>
            </div >
        );
    }
}


const mapStateToProps = state => {

    return {
        code: state.code,
        city: state.city,
    }
}

const mapDispatchToProps = (e) => {

    return {
        selectedOption: (e) => {
            return store.dispatch(selectedOption(e))
        },
        getForcast: (e) => {
            return store.dispatch(getForcast(e))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)