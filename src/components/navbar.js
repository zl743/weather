import React, {Component} from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Day1 from './day';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';
import Day5 from './day5';

class Navbar extends Component {
  /*
  setTimeout(()=>{
    props.history.push('/about')
  },2000)
  */
  handleNavClick = () => {
    if(document.getElementById('mobile-toggle').classList.contains('active')){
      document.getElementById('mobile-toggle').style.left = '0px';
      document.getElementById('mobile-toggle').style.top = '65px';
      document.getElementById('mobile-toggle').classList.remove('active');
    }
    else{
      document.getElementById('mobile-toggle').style.left = '300px';
      document.getElementById('mobile-toggle').style.top = '65px';
      document.getElementById('mobile-toggle').classList.add('active');
    }

  }
  handleSidenavClick = () => {
    document.getElementById('mobile-toggle').style.left = '0px';
    document.getElementById('mobile-toggle').style.top = '65px';
    document.getElementById('mobile-toggle').classList.remove('active');
  }
  render(){
    if(typeof this.props.days[0] !== 'undefined'){
      let day1 = this.props.days[0];
      let day2 = this.props.days[1];
      let day3 = this.props.days[2];
      let day4 = this.props.days[3];
      let day5 = this.props.days[4];
      return(
      <div>
        <nav className="transparent z-depth-0">
          <div class="nav-wrapper">
            <a href="#!" data-target="mobile-toggle" class="sidenav-trigger button-collapse"><i onClick={this.handleNavClick} class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
            <li><NavLink to="/day1">{day1.day}</NavLink></li>
            <li><NavLink to="/day2">{day2.day}</NavLink></li>
            <li><NavLink to="/day3">{day3.day}</NavLink></li>
            <li><NavLink to="/day4">{day4.day}</NavLink></li>
            <li><NavLink to="/day5">{day5.day}</NavLink></li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-toggle">
            <li><NavLink onClick={this.handleSidenavClick} to="/day1">{day1.day}</NavLink></li>
            <li><NavLink onClick={this.handleSidenavClick} to="/day2">{day2.day}</NavLink></li>
            <li><NavLink onClick={this.handleSidenavClick} to="/day3">{day3.day}</NavLink></li>
            <li><NavLink onClick={this.handleSidenavClick} to="/day4">{day4.day}</NavLink></li>
            <li><NavLink onClick={this.handleSidenavClick} to="/day5">{day5.day}</NavLink></li>
        </ul>
      </div>

      )
    } else{
      return(
        <div className="day">
        Loading Nav...
        </div>
      )
    }
  }


}

export default withRouter(Navbar);
