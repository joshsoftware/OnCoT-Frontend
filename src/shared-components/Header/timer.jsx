localStorage.setItem("counter", 3600);

const time = () => {  
    localStorage.getItem("counter") > 0 && setInterval(() => {
        let counter = localStorage.getItem("counter");
        localStorage.setItem("counter", counter-1);
    }, 1000);
}
time();
