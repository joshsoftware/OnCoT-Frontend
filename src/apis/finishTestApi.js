import axios from 'axios';

export const finishTestApi = (data) => axios.post('https://api.mocki.io/v1/1efd9564', data);
