import React, { Component } from 'react'
import bryLogo from '../../static/images/rsz_bryr.jpg'
import davLogo from '../../static/images/rsz_Dave.jpg'
import vtLogo from '../../static/images/rsz_Logo.jpg'
import Card from '../Cards/CardUi'

class Team extends Component {

  render() {
    return (
    <div className = "container">
      <br/><br/>
      <h1><center>Meet the team</center></h1>
      
      <br/>
      <hr/>
      <h4>
        <center>Our team was assembled in our CECS 445 class taught by professor Hubert Huynh.
          We are all seniors at California State University Long Beach and this is our website.
          We hope you stick with us as we continue to develop our site!
        </center>

      </h4>
      <hr/>
      
     <div className = "container-fluid d-flex justify-content-center">
          
      <div className = "row">
        <div className = "col-md-4">
          
          <Card name ="David Ibarra" imgsrc = {davLogo} title = "David Ibarra" 
          text ="Hey my name is David Ibarra and I am a member of Team Late." 
          emailLink = "davidjewnose@gmail.com"/>
        </div>
        <div className = "col-md-4">
        
          <Card name ="Bryan Rojas" imgsrc = {bryLogo} title = "Bryan rojas" 
          text ="Hey my name is Bryan Rojas and I am a member of Team Late." 
          emailLink = "BryanRojacs@gmail.com"/>
        </div>
        <div className = "col-md-4">
        
          <Card imgsrc = {davLogo} title ="Hector Mendoza" text = "Hey my name is Hector Mendoza and I am a member of Team Late."
          emailLink = "mendozahector555@gmail.com"/>
        </div>
        
        <div className = "col-md-4">
        <br/>
          <Card imgsrc = {davLogo} title = "Clayton Asada" text = "Hey my name is Clayton Asada and I am a member of Team Late."
          emailLink = "{Add clay's email}"/>
        </div>
        <div className = "col-md-4">
        <br/>
          <Card imgsrc = {vtLogo} title ="Team Late" text = "Everyone here is a part of team late!"
          emailLink = "virgilstravels@gmail.com"/>
        <br/><br/>
        </div>
        <div className = "col-md-4">
        <br/>
          <Card imgsrc = {davLogo} title = "Brandon Mitchell" text = "Hey my name is Brandon Mitchell and I am a member of Team Late."
          emailLink = "{Add Brandon's email}"/>
        </div>
      </div>
      
      
     </div>
     </div>

        

    )
  }
}

export default Team