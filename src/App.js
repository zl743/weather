import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Day1 from './components/day';
import Day2 from './components/day2';
import Day3 from './components/day3';
import Day4 from './components/day4';
import Day5 from './components/day5';
import Navbar from './components/navbar';
import axios from 'axios';


class App extends Component {
  state = {
    fiveDayForecast : [],
    date : '',
    weatherCss : '',
    time: ''
  }

  componentDidMount() {
    var weather1_1, weather1_2, weather1_3, weather1_4, weather1_5, weather1_6, weather1_7, weather1_8,weather2,weather3,weather4,weather5, temp1_1, temp1_2, temp1_3, temp1_4, temp1_5, temp1_6, temp1_7, temp1_8,temp2,temp3,temp4,temp5;
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=5128581&units=imperial&APPID=31eb5ca581d516c0e6e7b71be029c8b2')
    .then(res => {
      temp1_1 = Math.round(res.data.list[0].main.temp);
      temp1_2 = Math.round(res.data.list[1].main.temp);
      temp1_3 = Math.round(res.data.list[2].main.temp);
      temp1_4 = Math.round(res.data.list[3].main.temp);
      temp1_5 = Math.round(res.data.list[4].main.temp);
      temp1_6 = Math.round(res.data.list[5].main.temp);
      temp1_7 = Math.round(res.data.list[6].main.temp);
      temp1_8 = Math.round(res.data.list[7].main.temp);
      temp2 = Math.round(res.data.list[8].main.temp);
      temp3 = Math.round(res.data.list[16].main.temp);
      temp4 = Math.round(res.data.list[24].main.temp);
      temp5 = Math.round(res.data.list[32].main.temp);
      weather1_1 = res.data.list[0].weather[0].description;
      weather1_2 = res.data.list[1].weather[0].description;
      weather1_3 = res.data.list[2].weather[0].description;
      weather1_4 = res.data.list[3].weather[0].description;
      weather1_5 = res.data.list[4].weather[0].description;
      weather1_6 = res.data.list[5].weather[0].description;
      weather1_7 = res.data.list[6].weather[0].description;
      weather1_8 = res.data.list[7].weather[0].description;
      weather2 = res.data.list[6].weather[0].description;
      weather3 = res.data.list[16].weather[0].description;
      weather4 = res.data.list[24].weather[0].description;
      weather5 = res.data.list[32].weather[0].description;
      //console.log(res);
      const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var today = new Date();
      var month = monthNames[today.getMonth()];
      if(today.getHours()>0 && today.getHours() < 6){
        this.setState({time: 'night'})
      } else if(today.getHours()>= 6 && today.getHours() < 12){
        this.setState({time: 'morning'})
      } else if(today.getHours()>= 13 && today.getHours() < 18){
        this.setState({time: 'afternoon'})
      } else if(today.getHours()>= 18 && today.getHours() < 20){
        this.setState({time: 'evening'})
      }else{
        this.setState({time: 'night'})
      }
      this.setState({
        date: month + ' ' + today.getDay(),
        weatherCss: weather1_1.replace(/\s/g, ''),
      })
    document.body.className = this.state.weatherCss + ' ' + this.state.time
    console.log(this.state.weatherCss.replace(/\s/g, ''))
      var day1, day2, day3, day4, day5;
      switch (today.getDay()) {
        case 1:
          day1 = [...this.state.fiveDayForecast, {day: 'Monday', temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Tuesday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Wednesday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Thursday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Friday', temperature: temp5, weather: weather5}];
          break;
        case 2:
          day1 = [...this.state.fiveDayForecast, {day: 'Tuesday', temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Wednesday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Thursday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Friday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Saturday', temperature: temp5, weather: weather5}];
          break;
        case 3:
          day1 = [...this.state.fiveDayForecast, {day: 'Wednesday',  temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Thursday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Friday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Saturday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Sunday', temperature: temp5, weather: weather5}];
          break;
        case 4:
          day1 = [...this.state.fiveDayForecast, {day: 'Thursday',  temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Friday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Saturday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Sunday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Monday', temperature: temp5, weather: weather5}];
          break;
        case 5:
          day1 = [...this.state.fiveDayForecast, {day: 'Friday',  temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Saturday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Sunday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Monday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Tuesday', temperature: temp5, weather: weather5}];
          break;
        case 6:
          day1 = [...this.state.fiveDayForecast, {day: 'Saturday', temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Sunday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Monday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Tuesday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Wednesday', temperature: temp5, weather: weather5}];
          break;
        default:
          day1 = [...this.state.fiveDayForecast, {day: 'Sunday',  temperature: temp1_1, temperature2: temp1_2, temperature3: temp1_3, temperature4: temp1_4, temperature5: temp1_5, temperature6: temp1_6, temperature7: temp1_7, temperature8: temp1_8, weather1: weather1_1, weather2: weather1_2, weather3: weather1_3, weather4: weather1_4, weather5:weather1_5,weather6:weather1_6, weather7:weather1_7, weather8:weather1_8}];
          day2 = [...day1, {day: 'Monday', temperature: temp2, weather: weather2}];
          day3 = [...day2, {day: 'Tuesday', temperature: temp3, weather: weather3}];
          day4 = [...day3, {day: 'Wednesday', temperature: temp4, weather: weather4}];
          day5 = [...day4, {day: 'Thursday', temperature: temp5, weather: weather5}];
          break;
      }
      this.setState({fiveDayForecast: day5});
    });

  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar days={this.state.fiveDayForecast}/>
        <Switch>
          <Route exact path="/" render={(props) => <Day1 {...props} days={this.state.fiveDayForecast} time={this.state.time}/>} />
          <Route exact path="/day1" render={(props) => <Day1 {...props} days={this.state.fiveDayForecast} time={this.state.time}/>} />
          <Route exact path="/day2" render={(props) => <Day2 {...props} days={this.state.fiveDayForecast} time={this.state.time}/>} />
          <Route exact path="/day3" render={(props) => <Day3 {...props} days={this.state.fiveDayForecast} time={this.state.time}/>} />
          <Route exact path="/day4" render={(props) => <Day4 {...props} days={this.state.fiveDayForecast} time={this.state.time}/>} />
          <Route exact path="/day5" render={(props) => <Day5 {...props} days={this.state.fiveDayForecast} time={this.state.time}/>} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
