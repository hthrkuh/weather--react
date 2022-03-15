import {
   TYPE_IN_CITYNAME_FIELD,
   weatherData,
   SelectedOption
} from './actions'


export const initialState = {
   userInput: {
      err: false
   },
   weatherData: [],
   code: "215854",
   city: "Tel Aviv",
   geo: false,
   loading: true,


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
