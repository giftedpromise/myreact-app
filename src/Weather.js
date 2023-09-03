import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div className="main">
      <h1>Lagos</h1>
      <div>Friday 12:50</div>
      <div>Rain</div>
      <ReactAnimatedWeather
        icon="RAIN"
        color="white"
        size={60}
        animate={true}
      />
      <div>18°C</div>
      <div className="row">
        <div className="col-sm-2">
          <div>Precipitation: 90%</div>
          <div> Wind: 3km/h</div>
        </div>
      </div>
    </div>
  );
}
