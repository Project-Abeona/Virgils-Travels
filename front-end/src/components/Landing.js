import React, { Component } from 'react'
import FlightCard from './Landing/FlightCard'
import HotelCard from './Landing/HotelCard'
import EventsCard from './Landing/EventsCard'
import FoodCard from './Landing/FoodCard'
import '../static/css/Landing.css'

var welcome = {
  fontSize: 50
};


class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">

          <div className="row">
            <div className="col-sm-12 mx-auto">
              <h1 className="text-center" style={welcome}>Welcome to Virgil's Travels!</h1>
              <hr/>
              <p>Our web application is intended to make traveling much easier. Our goal and vision is to allow our users to have access to popular tourist spots, great dining options, and awesome things to do!</p>
            </div>
          </div>

          <hr/>
          <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-4">
              <FlightCard/>
            </div>

            
            &nbsp;
            <div className="col-sm-4">
              <HotelCard/>
            </div>
            <div className="col-sm-2">
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-4">
              <EventsCard/>
            </div>

            
            &nbsp;
            <div className="col-sm-4">
              <FoodCard/>
            </div>
            <div className="col-sm-2">
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Landing
