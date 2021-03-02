import axios from "axios";
import {CUSTOM_IO_API} from "constants/appConstants";

const customInputOutputPostApi = (data) => {
    console.log("API: ", CUSTOM_IO_API);
    return axios.post(CUSTOM_IO_API, data);
}

export default customInputOutputPostApi;