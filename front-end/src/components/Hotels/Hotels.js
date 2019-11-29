import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import { getFlights } from '../UserFunctions'

class Hotels extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      from: '',
      to: '',
      people: 1,
      startDate: new Date(),
      endDate: new Date()
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleChangePeople = this.handleChangePeople.bind(this);
  }

  handleChangeLocation(event){
    this.setState({
      location: event.target.value
    });
  }

  handleChangeFrom(event){
    let date_api = String(event).split(" ");
    let formatted_date = date_api[3] + "-" + months[date_api[1]] + "-" + date_api[2];
    this.setState({
      startDate: event,
      from: formatted_date
    });
    
  }

  handleChangeTo(event){
    let date_api = String(event).split(" ");
    let formatted_date = date_api[3] + "-" + months[date_api[1]] + "-" + date_api[2];
    this.setState({
      endDate: event,
      to: formatted_date
    });
  }

  handleChangePeople(event){
    this.setState({
      people: event.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault()

    const query = {
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      people: this.state.people
    }

    getFlights(query).then(res => {
        this.setState({
          result: res
        })
      
    })
  }

  render() {
    return (
        <div className="container">
            <br/><br/>
                <h1><center>Hotels Search</center></h1>
                <hr/>
                <center>

                  <div className="row">
                    <div className="col-lg-12">
                    <FormControl fullWidth>
                      <InputLabel htmlFor="standard-adornment-amount">Location (City)</InputLabel>
                      <Input/>
                    </FormControl>
                    </div>
                  </div>

                  <br/>

                  <div className="row">
                    <div className="col-sm-4">
                      Start date: <br/>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeFrom}
                        placeholderText="Select departure date..."
                      />
                    </div>

                    <div className="col-sm-4">
                      End date: <br/>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeFrom}
                        placeholderText="Select departure date..."
                      />
                    </div>
                  </div>

                </center>


            <br/><br/><br/>
        </div>
    )
  }
}

const months = {
  'Jan': '01',
  'Feb': '02',
  'Mar': '03',
  'Apr': '04',
  'May': '05',
  'Jun': '06',
  'Jul': '07',
  'Aug': '08',
  'Sep': '09',
  'Oct': '10',
  'Nov': '11',
  'Dec': '12'
}

export default Hotels