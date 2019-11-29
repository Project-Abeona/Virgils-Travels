import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class Hotels extends Component {
  constructor(props) {
    super(props)

    let temp = new Date()
    let temp1 = new Date()
    temp1.setDate(temp1.getDate() + 1)

    let date = String(temp).split(" ")
    let date1 = String(temp1).split(" ")

    this.state = {
      location: '',
      people: 1,
      startDate: temp,
      endDate: temp1,
      from: date[3] + "-" + months[date[1]] + "-" + date[2],
      to: date1[3] + "-" + months[date1[1]] + "-" + date1[2]
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
    let city = this.state.location.replace(' ', '+')

    if(city === ''){
      city = 'Long+Beach'
    }

    console.log('https://www.hipmunk.com/hotels#w=' + city + ';i=' + this.state.from + ';o=' + this.state.to + ';is_search_for_business=false')
    // https://www.hipmunk.com/hotels#w=Redwood+City,+CA;i=2019-12-06;o=2019-12-08;s=Pullman+San+Francisco+Bay;is_search_for_business=false
    window.open('https://www.hipmunk.com/hotels#w=' + city + ';i=' + this.state.from + ';o=' + this.state.to + ';hp=' + this.state.people + ';is_search_for_business=false')
  }

  render() {
    const amount_style = {
      minWidth: 60,
    }
    return (
        <div className="container">
            <br/><br/>
                <h1><center>Hotels Search</center></h1>
                <hr/>
                <center>

                  <div className="row">
                    <div className="col-lg-2"></div>

                    <div className="col-lg-8">
                    <FormControl fullWidth>
                      <InputLabel htmlFor="standard-adornment-amount">Location (City) - Default: Long Beach</InputLabel>
                      <Input onChange={this.handleChangeLocation} value={this.state.location}/>
                    </FormControl>
                    </div>

                    <div className="col-lg-2"></div>
                  </div>

                  <br/>

                  <div className="row">
                    <div className="col-sm-2"></div>

                    <div className="col-sm-3">
                      Start date: <br/>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeFrom}
                        placeholderText="Select departure date..."
                      />
                    </div>

                    <div className="col-sm-3">
                      End date: <br/>
                      <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleChangeTo}
                        placeholderText="Select departure date..."
                      />
                    </div>

                    <div className="col-sm-2">
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Adult</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.people}
                        onChange={this.handleChangePeople}
                        style={amount_style}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                      </Select>
                    </FormControl>
                    </div>

                    <div className="col-sm-3"></div>
                  </div>
                  <br/><br/>

                  <Button onClick={this.onSubmit} variant="contained" color="primary">
                    Search Hotels &nbsp;<span role="img" aria-label="Hotel"> 🏨</span>
                  </Button>

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