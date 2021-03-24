import axios from 'axios';

export const finishTestApi = (data) => axios.post('https://api.mocki.io/v1/2f784985', data);
