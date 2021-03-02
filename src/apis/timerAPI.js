import axios from "axios";

export const getTimer = () => {
    // console.log("insideTimer")
    return axios.get("https://www.random.org/integers/?num=1&min=1800&max=7200&col=1&base=10&format=plain&rnd=new");
}