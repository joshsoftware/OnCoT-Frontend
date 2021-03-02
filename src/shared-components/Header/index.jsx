import { updateTimer,timerRequest } from 'actions/timerActions';
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import HeaderIDE from "shared-components/Header/HeaderIDE";

const HeaderIDEConatiner = () => {
    
    let totalProblems = 3;
    let currentProblem = 2;
    let organisationName = "Josh Inc.";

    const dispatch = useDispatch();
    
    const result = useSelector((state) => state.TimerReducer)

    console.log(result.counter)

    useEffect(() => {
        dispatch(timerRequest());
    }, [])
    
    useEffect(() => {
        setTimeout(()=>{result.counter >= 0 && dispatch(updateTimer(result.counter - 1))}, 1000);
    },[result.counter])
    
    let hours = Math.floor(result.counter / (60 * 60)%60).toLocaleString("en-US",{minimumIntegerDigits: 2});
    let minutes = Math.floor(result.counter / (60)%60).toLocaleString("en-US",{minimumIntegerDigits: 2});
    let seconds = Math.floor(result.counter % 60).toLocaleString("en-US",{minimumIntegerDigits: 2});

    let time;
    
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        time = "Expired";
    } else {
        time = hours + ":" + minutes + ":" + seconds;
    }
 
    return (
        <>
            {result.counter>=0 && <HeaderIDE
                totalProblems={totalProblems}
                currentProblem={currentProblem}
                organisationName={organisationName}
                time={time}
            />}
        </>
    );
}

export default HeaderIDEConatiner;