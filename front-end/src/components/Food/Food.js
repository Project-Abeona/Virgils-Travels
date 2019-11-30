import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BusinessList from './BusinessList';
import Yelp from '../Yelp/Yelp';

class Food extends Component {
  constructor(props){
    super(props);
    this.state = {
      food: '',
      location: '',
      sortBy: 'best_match',
      searched: false,
      businesses: []
    }

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleFoodChange = this.handleFoodChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.searchYelp = this.searchYelp.bind(this);
  }

  handleLocationChange(event){
    this.setState({location: event.target.value})
    console.log(this.state)
  }

  handleFoodChange(event){
    this.setState({food: event.target.value})
    console.log(this.state)
  }

  searchYelp(food, location, sortBy) {
    Yelp.search(food, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      });
    });
  }

  onSubmit(){
    this.searchYelp(this.state.food, this.state.location, this.state.sortBy)
    this.setState({searched: true})
    console.log(this.state.businesses)
    console.log(this.state)
  }

  render() {
    
    const foodList = (
      <>
        <hr/>
        
        <BusinessList businesses={this.state.businesses} />
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
              <h1 class = "h1"><center>Food Search</center></h1>
              <hr></hr>

              <center>

              <div className="row">
                <div className="col-sm-2">

                </div>

                <div className="col-sm-8">
                  <TextField
                    id="standard-full-width"
                    label="Food"
                    style={{ margin: 8 }}
                    placeholder="What type of food are you looking for?"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={this.state.food}
                    onChange={this.handleFoodChange}
                  />
                </div>

                <div className="col-sm-2">
                  
                  </div>
              </div>

              <br/>

              <div className="row">
                <div className="col-sm-2">

                </div>

                <div className="col-sm-8">
                  <TextField
                    id="standard-full-width"
                    label="City"
                    style={{ margin: 8 }}
                    placeholder="Location (Zip or City)"
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
                    Search Food &nbsp;<span role="img" aria-label="Burger">🍔</span>
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

export default Food