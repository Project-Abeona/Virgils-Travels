import React, { Component } from 'react'
import bryLogo from '../../static/images/rsz_bryr.jpg'
import davLogo from '../../static/images/rsz_Dave.jpg'
import vtLogo from '../../static/images/rsz_Logo.jpg'
import clay from '../../static/images/rsz_Clay.jpg'
import Hector from '../../static/images/rsz_Hector.jpg'
import Brandon from '../../static/images/rsz_Brandon.jpg'
import Card from '../Cards/CardUi'

class Team extends Component {

  render() {
    return (
    <div className = "container">
      <br/><br/>
      <h1><center>Meet the team</center></h1>
      
      <br/>
      <hr/>
      <h5>
        <center>Our team was assembled in our CECS 445 class taught by professor Hubert Huynh.
          We are all seniors at California State University Long Beach and this is our website.
          We hope you stick with us as we continue to develop our site!
        </center>

      </h5>
      <hr/>
      
     <div className = "container-fluid d-flex justify-content-center">
          
      <div className = "row justify-content-md-center">
        <div className = "col-lg-4">
        <br/>
          <Card name ="David Ibarra" imgsrc = {davLogo} title = "David Ibarra" 
          text ="Hey my name is David Ibarra and I am a member of Team UTI." 
          emailLink = "davidjewnose@gmail.com"/>
        </div>
        
        <div className = "col-lg-4">
        <br/>
          <Card name ="Bryan Rojas" imgsrc = {bryLogo} title = "Bryan Rojas" 
          text ="Hey my name is Bryan Rojas and I am a member of Team UTI." 
          emailLink = "BryanRojacs@gmail.com"/>
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {Hector} title ="Hector Mendoza" text = "Hey my name is Hector Mendoza and I am a member of Team UTI."
          emailLink = "mendozahector555@gmail.com"/>
        </div>
        
        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {clay} title = "Clayton Asada" text = "Hey my name is Clayton Asada and I am a member of Team UTI."
          emailLink = "casada94@gmail.com"/>
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {vtLogo} title ="Team UTI" text = "Everyone here is a part of the team! We all worked on this site together!"
          emailLink = "virgilstravels@gmail.com"/>
        
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {Brandon} title = "Brandon Mitchell" text = "Hey my name is Brandon Mitchell and I am a member of Team UTI."
          emailLink = "brandonslist@yahoo.com"/>
          <br/>
        </div>
        
      </div>

      
      
     </div>
     </div>

        

    )
  }
}

export default Team