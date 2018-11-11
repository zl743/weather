import React from 'react';
import axios from 'axios';
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

const Day4 = (props) => {
  if(typeof props.days[0] !== 'undefined'){
    let day1 = props.days[0];
    let day2 = props.days[1];
    let day3 = props.days[2];
    let day4 = props.days[3];
    let day5 = props.days[4];
    if(props.time == 'morning' || props.time == 'afternoon'){
      switch (day4.weather){
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
      switch (day4.weather){
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
        case 'shower rain':
          var weather = nightRain;
          break;
        case 'light rain':
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
      <div className="day">
        Three days from now will be <span className="bold">{day4.day}</span> and it will be <span className="bold">{day4.temperature}&#176; F</span> outside.
         <div className="center-align">
         <img className="responsive-img" src={weather} width="50%" />
         </div>
         {day4.weather}
      </div>
    )
  } else{
    return(
      <div className="day">
      What is tomorrow...
      </div>
    )
  }
}

export default Day4;
