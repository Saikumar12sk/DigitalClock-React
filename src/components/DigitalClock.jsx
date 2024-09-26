import { useState, useEffect } from "react";
import './Clock.css'

const DigitalClock = () => {
  // useState for storing the current time
  const [time, setTime] = useState(new Date());
  // console.log(time)

  // useEffect for Handling the time
  useEffect(() => {
    let intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }; //cleanup function
  }, []); // dependency

  //Formating the Time
  function formatTime() {
    let hours = time.getHours();
    let min = time.getMinutes();
    let seconds = time.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${AddZero(hours)}:${AddZero(min)}:${AddZero(seconds)}  ${AmPm}`;
    // console.log(hours, min, seconds)
  }

  function AddZero(a) {
    return (a < 10 ? "0" : "") + a;
  }

  return (
    <div>
      {/* Video background */}
      <video autoPlay muted loop className="video-bg">
        <source src="https://videos.pexels.com/video-files/856938/856938-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
      <div className="container my-5">
        <div className=" w-50  p-5 rounded text-center ">
          <h1 className="text-light fw-bold display-4 shadow time"> 
            {formatTime()}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
