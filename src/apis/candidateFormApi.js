import axios from 'axios';
import { CANDIDATE_INFO_API } from 'constants/appConstants';

const candidateInfoPostApi = (data) => axios.post(CANDIDATE_INFO_API, data);

export default candidateInfoPostApi;