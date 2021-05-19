import axios from "axios";
import { toast } from "react-toastify";


// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(null, error => {
    // debugger
    // const expectedError = error.response && error.response.status >= 403;
    toast.error(error.message);
    //if (expectedError) toast.error("An unexpected error occurrred.");
    return Promise.reject(error);
});
let http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};
export default http