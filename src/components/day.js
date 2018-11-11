import React from 'react';
import morningClearSky from '../img/clearsky-m.svg';
import nightClearSky from '../img/clearsky-n.svg';
import morningFewClouds from '../img/fewclouds-m.svg';
import nightFewClouds from '../img/fewclouds-n.svg';
import morningMist from '../img/mist-m.svg';
import nightMist from '../img/mist-n.svg';
import morningRain from '../img/rain-m.svg';
import nightRain from '../img/rain-n.svg';
import morningSnow from '../img/snow-m.svg';
import nightSnow from '../img/snow-n.svg';
import morningTstorm from '../img/thunderstorm-m.svg';
import nightTstorm from '../img/thunderstorm-n.svg';

const Day1 = (props) => {
  if(typeof props.days[0] !== 'undefined'){
    let day1 = props.days[0];
    let day2 = props.days[1];
    let day3 = props.days[2];
    let day4 = props.days[3];
    let day5 = props.days[4];
    if(props.time == 'morning' || props.time == 'afternoon'){
      switch (day1.weather1){
        case 'clear sky':
          var weather = morningClearSky;
          break;
        case 'few clouds':
          var weather = morningFewClouds;
          break;
        case 'scattered clouds':
          var weather = morningFewClouds;
          break;
        case 'overcast clouds':
          var weather = morningFewClouds;
          break;
        case 'broken clouds':
          var weather = morningFewClouds;
          break;
        case 'rain':
          var weather = morningRain;
          break;
        case 'light rain':
          var weather = morningRain;
          break;
        case 'shower rain':
          var weather = morningRain;
          break;
        case 'thunderstorm':
          var weather = morningTstorm;
          break;
        case 'mist':
          var weather = morningMist;
          break;
        default:
          break;
      }

    }else if(props.time == 'evening' || props.time == 'night'){
      switch (day1.weather1){
        case 'clear sky':
          var weather = nightClearSky;
          break;
        case 'few clouds':
          var weather = nightFewClouds;
          break;
        case 'scattered clouds':
          var weather = nightFewClouds;
          break;
        case 'overcast clouds':
          var weather = nightFewClouds;
          break;
        case 'broken clouds':
          var weather = nightFewClouds;
          break;
        case 'rain':
          var weather = nightRain;
          break;
        case 'light rain':
          var weather = nightRain;
          break;
        case 'shower rain':
          var weather = nightRain;
          break;
        case 'thunderstorm':
          var weather = nightTstorm;
          break;
        case 'mist':
          var weather = nightMist;
          break;
        default:
          break;
      }

    }
    return(
      <div className="day row">
      <div className="col l3 m12 s12 dayForecast left-align">
        {day2.day}: {day2.weather}, <span className="bold">{day2.temperature}&#176; F</span>
        <hr className="forecast"/>
        {day3.day}: {day3.weather}, <span className="bold">{day3.temperature}&#176; F</span>
        <hr className="forecast"/>
        {day4.day}: {day4.weather}, <span className="bold">{day4.temperature}&#176; F</span>
        <hr className="forecast"/>
        {day5.day}: {day5.weather}, <span className="bold">{day5.temperature}&#176; F</span>
        <hr className="forecast"/>
      </div>
      <div className="dayDiv center-align col l6 m12 s12">
        Today is <span className="bold">{day1.day}</span> and it is <span className="bold">{day1.temperature}&#176; F</span> outside.
         <br/>
         <div className="center-align">
         <img className="responsive-img" src={weather} width="50%" />
         </div>
         {day1.weather1}
      </div>
        <div className="left-align dayForecast col l3 m12 s12">
         NOW: {day1.weather1}, <span className="bold">{day1.temperature}&#176; F</span>
         <hr className="forecast"/>
         3 HOURS: {day1.weather2}, <span className="bold">{day1.temperature2}&#176; F</span>
         <hr className="forecast"/>
         6 HOURS: {day1.weather3}, <span className="bold">{day1.temperature3}&#176; F</span>
         <hr className="forecast"/>
         9 HOURS: {day1.weather4}, <span className="bold">{day1.temperature4}&#176; F</span>
         <hr className="forecast"/>
         12 HOURS: {day1.weather5}, <span className="bold">{day1.temperature5}&#176; F</span>
         <hr className="forecast"/>
         15 HOURS: {day1.weather6}, <span className="bold">{day1.temperature6}&#176; F</span>
         <hr className="forecast"/>
         18 HOURS: {day1.weather7}, <span className="bold">{day1.temperature7}&#176; F</span>
         <hr className="forecast"/>
         21 HOURS: {day1.weather8}, <span className="bold">{day1.temperature8}&#176; F</span>
        </div>
      </div>
    )
  } else{
    return(
      <div className="day">
      What is today...
      </div>
    )
  }



}

export default Day1;
