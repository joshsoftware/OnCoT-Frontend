import request from 'apis/apiHelper';

const fetchLanguages = () => request.get('api/v1/languages/all');

export default fetchLanguages;
