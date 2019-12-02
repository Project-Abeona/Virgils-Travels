import React, { Component, PureComponent } from 'react'
import pdf from '../../static/documents/Sprints.pdf'




class Docu extends Component {
  

  render() {
    
    return (
      
        
      
          
        <div className="container">
          
          <br/><br/>
          <h1><center>Documentation</center></h1>
          <hr/>
          <p>
            Welcome to our documentation page. In this page we have all of our technical documents that include
            our ideas, process, planning, and our time spent on the creation of every item in relating to the 
            website. If you wish to view the items, take a look below!
          </p>
          <br/>
          <hr/>
          <h3>Click Below for deliverables.</h3>
          <hr/>
          <a href={pdf} >Documentation PDF</a>
          

          

          
          <br/><br/><br/><br/><br/><br/>
        </div>
        
        
        
       
    )
  }
}

export default Docu 