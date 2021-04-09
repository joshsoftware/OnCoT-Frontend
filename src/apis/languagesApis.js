import request from 'apis/apiHelper';

const fetchLanguages = () => request.get('languages/all');

export default fetchLanguages;
