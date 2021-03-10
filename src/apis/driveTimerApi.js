import axios from 'axios';

export const getDriveTimer = () => axios.get('https://www.random.org/integers/?num=1&min=9&max=11&col=1&base=10&format=plain&rnd=new');
