import {
   TYPE_IN_CITYNAME_FIELD,
   weatherData,
   SelectedOption
} from './actions'


export const initialState = {
   api_key: ["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3",
      "Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS",
      "EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud",
      "keIkcwQuwHMsCqZJawOVskNUec3ErVQq"],
   userInput: {
      err: false
   },
   weatherData: [],
   code: "215854",
   city: "Tel Aviv",
   geo: false,
   loading: true,
   data: {
      callerError: false,
   },

}


export function rootReducer(state = initialState, action) {
   switch (action.type) {

      case TYPE_IN_CITYNAME_FIELD:
         return {
            ...state,
            userInput: {
               ...state.err,
               err: action.err
            }
         }
      case weatherData:
         return {
            ...state,
            weatherData: action.weatherData,
            loading: false

         }

      case SelectedOption:
         return {
            ...state,
            code: action.code,
            city: action.city,
            loading: true,
            geo: action.geo || false,
         }


      default:
         return state


   }
}
