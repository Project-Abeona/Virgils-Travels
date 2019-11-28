import React, { Component } from 'react'
import '../static/css/Landing.css'

var welcome = {
  fontSize: 50
};

var features = {
  fontSize: 50,
  color: 'white' + '!important'
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
            <div className="col-sm-6 mx-auto">
              <h2 className="text-center" style={features}>
                <a href="/flights">Flights</a>
              </h2>
            </div>
            <div className="col-sm-6 mx-auto">
              <h2 className="text-center" style={features}>
                <a href="/flights">Hotels</a>
              </h2>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-sm-6 mx-auto">
              <h2 className="text-center" style={features}>
                <a href="/flights">Events</a>
              </h2>
            </div>
            <div className="col-sm-6 mx-auto">
              <h2 className="text-center" style={features}>
                <a href="/flights">Food</a>
              </h2>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Landing
