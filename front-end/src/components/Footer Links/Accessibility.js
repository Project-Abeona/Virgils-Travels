import React, { Component } from 'react'



class A11y extends Component {
  
  render() {
    return (

        <div className="container">
          <br/><br/>
          
          <h1><center>Accessibility</center></h1><br/>
            <hr></hr>
            <p>
              Virgil's Travels strives to improve the usability and Accessibility of its domestic
              website for all users, including those with disabilities. Virgil's Travels efforts
              to improve digital usability and accessibility are guided by the relevant portions
              of the Web Accessibility Guidelines 2.0, Level AA and other existing recommendations
            </p>
            <p>
              Our efforts are ongoing and tested on a periodic basis. If you are a user with a 
              disability, or an individual assisting a user with a disability, and have difficulty
              accessing or navigating our digital channel, please contact us at: </p>

              <a href = {"mailto:" + this.props.email}>
              <u>virgilstravelsaccessibility@gmail.com</u>
              </a>
              <br/>

              <p>
              <br/>
              In your message, please provide your contact information, the web address or other location
              where you experienced difficulty, and a brief description of the problem you encountered.
                          
            </p>
            
          <br/><br/><br/>
        </div>

    )
  }
}

export default A11y