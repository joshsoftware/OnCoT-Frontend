import axios from 'axios';

export const getTimer = () => axios.get('https://www.random.org/integers/?num=1&min=7199&max=7200&col=1&base=10&format=plain&rnd=new');
