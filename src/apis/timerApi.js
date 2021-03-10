import axios from 'axios';

export const getTimer = () => axios.get('https://www.random.org/integers/?num=1&min=602&max=603&col=1&base=10&format=plain&rnd=new');
