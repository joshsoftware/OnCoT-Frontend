import React, { useState, useEffect } from 'react';
import HeaderIDE from "shared-components/Header/HeaderIDE";
import "shared-components/Header/timer";

const HeaderIDEConatiner = () => {
    let totalProblems = 3;
    let currentProblem = 2;
    let organisationName = "Josh Inc.";

    const [timer, setTimer] = useState();

    useEffect(() => {
        setInterval(() => {
            setTimer(localStorage.getItem("counter"));
        }
        , 1000);
    },[])
    
    let hours = Math.floor(timer / (60 * 60)%60).toLocaleString();
    let minutes = Math.floor(timer / (60)%60).toLocaleString();
    let seconds = Math.floor(timer%60);

    let time = hours + ":" + minutes + ":" + seconds;

    return (
        <>
            <HeaderIDE
                totalProblems={totalProblems}
                currentProblem={currentProblem}
                organisationName={organisationName}
                time={time}
            />
        </>
    );
}

export default HeaderIDEConatiner;