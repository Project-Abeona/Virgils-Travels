import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BusinessList from './BusinessList';
import Yelp from '../Yelp/EventYelp';

class Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: '',
      searched: false,
      events: []
    }

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.searchYelp = this.searchYelp.bind(this);
  }

  handleLocationChange(event){
    this.setState({location: event.target.value})
    console.log(this.state)
  }

  searchYelp(location) {
    Yelp.search(location).then(eventss => {
      this.setState({
        events: eventss
      });
    });
  }

  onSubmit(){
    this.searchYelp(this.state.location)
    this.setState({searched: true})
    console.log(this.state.events)
    console.log(this.state)
  }

  render() {
    
    const foodList = (
      <>
        <hr/>
        
        <BusinessList businesses={this.state.events} />
      </>
    )

    const nada = (
      <>

      </>
    )

    return (

        <div className="container">
          <br/><br/>
          <div class = "centering" data-analytics-section = "Center">
            <div class = "block center">
              <h1 class = "h1"><center>Event Search</center></h1>
              <hr></hr>

              <center>

              <div className="row">
                <div className="col-sm-2">

                </div>

                <div className="col-sm-8">
                  <TextField
                    id="standard-full-width"
                    label="Location"
                    style={{ margin: 8 }}
                    placeholder="Where are you located? (Zip or City)"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                  />
                </div>

                <div className="col-sm-2">
                  </div>
              </div>

                    <br/>

              <Button onClick={this.onSubmit} variant="contained" color="primary">
                    Search Events &nbsp;<span role="img" aria-label="Calendar">📅</span>
                  </Button>

              </center>

              {this.state.searched ? foodList : nada}

              
            </div>
          </div>
          
          
         

          <br/><br/><br/>
        </div>

    )
  }
}

export default Event