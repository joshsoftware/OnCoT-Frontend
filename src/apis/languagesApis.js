import request from 'apis/apiHelper';

const fetchLanguages = () => request.get('/languages');

export default fetchLanguages;
