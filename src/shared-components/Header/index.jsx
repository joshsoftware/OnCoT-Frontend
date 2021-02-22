import React from 'react';
import { Col, Navbar, NavbarBrand, Button } from 'reactstrap';

import "./HeaderIDE.css";

function timer() {
    var countDownDate = new Date("Feb 22, 2021 17:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  // Display the result in the element with id="demo"
  document.getElementById('timeLeft').innerHTML = hours + ":" + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeLeft").innerHTML = "Expired";
  }
}, 1000);
}

var currentProblem = 1;
var totalProblems = 3;

const HeaderIDE = (props) => {
    timer();
    return (
        <Navbar className="bg-dark justify-content-around" md="auto" xl="auto" lg="auto" p-1>
            <NavbarBrand className="mx-5 text-white font-weight-bold">
                <h3 className="font-weight-bold">Josh Software Inc.</h3>
            </NavbarBrand>
            <Col className="mx-5 d-flex justify-content-end mr-5">
                <h3 className="text-success align-middle mr-5 font-weight-bold">OnCOT</h3>
            </Col>
            <Col className="mx-5 justify-content-end d-flex">
                <div className="mx-5 justify-content-end d-flex">
                    <Button className="p-2 btn-circle">{"<"}</Button>
                    <h5 className="text-white align-middle mt-2 mx-3">Problem {currentProblem}/{totalProblems}</h5>
                    <Button className="p-2 btn-circle">{">"}</Button>
                </div>
                <h2 className="text-white align-middle font-weight-bold" id="timeLeft"></h2>
            </Col>
        </Navbar>
    );
}

export default HeaderIDE;
