import axios from "axios";

const candidateInfoPostApi = (data) => {
    const API = "https://api.mocki.io/v1/b6a6f0e3";
    return axios.post(API, data);
}

export default candidateInfoPostApi;
