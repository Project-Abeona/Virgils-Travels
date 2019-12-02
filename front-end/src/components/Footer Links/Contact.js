import React, { Component } from 'react';
import vtLogo from '../../static/images/rsz_Logo.jpg'
import Card from '../Cards/CardUi'


class Contact extends Component {
  render() {
    return (
      
        <div className="container">
          <br/><br/>
          <head>
          
          </head>
          <h1><center>Contact Information</center></h1><br/>
            <hr></hr>
            
            <p>
              <center>If you have any trouble or are in need of assistance, feel free to contact us and we'll 
              respond to you as quickly as we can! Our email is down below! </center>
            </p>
            <div className = "container-fluid d-flex justify-content-center">
          
             <div className = "row justify-content-md-center">
            <div className = ".col xs-6 .col-md-4">
            <br/>
          <Card name ="Contact info" imgsrc = {vtLogo} title = "Contact Info" 
          text ="Contact us at any time!" 
          emailLink = "virgilstravels@gmail.com"/>
        </div>
        </div>
            

          <br/><br/><br/>
        </div>
        <br/><br/><br/><br/>
        </div>

    )
  }
}

export default Contact
