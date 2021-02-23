const axios = require("axios").default;
const time = async () => {  
    await axios("https://www.random.org/integers/?num=1&min=1800&max=7200&col=1&base=10&format=plain&rnd=new")
        .then((response) => {
            localStorage.setItem("counter", response.data);
        }).catch((error) => {
            console.log(error);
    })
    
    console.log(localStorage.getItem("counter"));
    localStorage.getItem("counter") > 0 && setInterval(() => {
        let counter = localStorage.getItem("counter");
        localStorage.setItem("counter", counter-1);
    }, 1000);
}
time();
