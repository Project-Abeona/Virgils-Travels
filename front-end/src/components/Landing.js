import React, { Component } from 'react'
import '../static/css/Landing.css'

var welcome = {
  fontSize: 50
};

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">

            <div className="col-sm-8 mx-auto">
              <h1 className="text-center" style={welcome}>Welcome to Virgil's Travels!</h1>
              <hr/>
              <p>Our web application is intended to make traveling much easier. Our goal and vision is to allow our users to have access to popular tourist spots, great dining options, and awesome things to do!</p>
            </div>

        </div>
      </div>
    )
  }
}

export default Landing
