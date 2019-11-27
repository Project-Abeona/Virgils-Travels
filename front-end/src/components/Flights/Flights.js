import React, { Component } from 'react'
import { getFlights } from '../UserFunctions'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import DatePicker from "react-datepicker";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "react-datepicker/dist/react-datepicker.css";

class Flights extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infants_lap: 0,
      children: 0,
      seniors: 0,
      country: 'US',
      from0: 'LAX',
      to0: 'SFO',
      date0: 'Dec 25 2019',
      pax: 1,
      cabin: 'Coach',
      result: {},
      startDate: new Date()
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangePax = this.handleChangePax.bind(this);
    this.handleChangeSeniors = this.handleChangeSeniors.bind(this);
    this.handleChangeChildren = this.handleChangeChildren.bind(this);
    this.handleChangeInfants = this.handleChangeInfants.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
  }

  handleChangeInfants(event){
    this.setState({
      infants_lap: event.target.value
    });
  }

  handleChangeSeniors(event){
    this.setState({
      seniors: event.target.value
    });
  }

  handleChangeChildren(event){
    this.setState({
      children: event.target.value
    });
  }

  handleChangePax(event){
    this.setState({
      pax: event.target.value
    });
  }

  handleChangeDate(date){

    let date_api = String(date).split(" ");
    this.setState({
      startDate: date,
      date0: date_api[1] + " " + date_api[2] + " " + date_api[3]
    });
  }

  handleChangeFrom(event) {
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(event.currentTarget.innerText);
    try {
      this.setState({from0: matches[1]});
    }
    catch(error) {
      this.setState({from0: 'null'});
    }
  }

  handleChangeTo(event) {
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(event.currentTarget.innerText);
    try {
      this.setState({to0: matches[1]});
    }
    catch(error) {
      this.setState({to0: 'null'});
    }
  }

  

  onSubmit(e) {
    e.preventDefault()
    /*
    const query = {
      infants_lap: this.state.form.infantsCount,//DONE
      children: this.state.form.childrenCount, //DONE
      seniors: this.state.form.seniorsCount, //DONE
      country: "US", //ehhh?
      from0: this.state.form.fromAirport, //"LAX" DONE
      to0: this.state.form.toAirport, //"SFO" DONE
      date0: this.state.form.dateLeaving, //"Dec 27, 2019" DONE
      pax: this.state.form.adultCount, //DONE
      cabin: "Coach" //ehh maybe
    }
*/
    const query = {
      infants_lap: this.state.infants_lap,
      children: this.state.children,
      seniors: this.state.seniors,
      country: this.state.country,
      from0: this.state.from0,
      to0: this.state.to0,
      date0: this.state.date0,
      pax: this.state.pax,
      cabin: this.state.cabin
    }

    getFlights(query).then(res => {
        this.setState({
          result: res
        })
      
    })
  }

  render() {
    const amount_style = {
      minWidth: 60,
    }
    return (

        <div className="container">
            <br/><br/>

                <h1><center>Flights Search</center></h1>
                <hr/>

                <form>
                  <center>
                    <div className="row">
                      <Autocomplete
                        onChange={this.handleChangeFrom}
                        id="combo-box-demo"
                        options={airports}
                        getOptionLabel={option => option.airport}
                        style={{ width: '50%' }}
                        renderInput={params => (
                          <div className="col-lg-6">
                          <TextField {...params} value={this.state.from0} label="Departing from" fullWidth />
                          </div>
                        )}
                      />

                      <br/>

                      <Autocomplete
                        onChange={this.handleChangeTo}
                        id="combo-box-demo"
                        options={airports}
                        getOptionLabel={option => option.airport}
                        style={{ width: '50%' }}
                        renderInput={params => (
                          <div className="col-lg-6">
                          <TextField {...params} label="Arriving to" fullWidth />
                          </div>
                        )}
                      />

                    </div>
                    <br/>

                    <div className="col-sm-6">
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Adult</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.pax}
                        onChange={this.handleChangePax}
                        style={amount_style}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                      </Select>
                    </FormControl>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Children</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.children}
                        onChange={this.handleChangeChildren}
                        style={amount_style}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                      </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Seniors</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.seniors}
                        onChange={this.handleChangeSeniors}
                        style={amount_style}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                      </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Infants</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.infants_lap}
                        onChange={this.handleChangeInfants}
                        style={amount_style}
                      >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                      </Select>
                    </FormControl>
                    </div>

                    <br/>
                    Departure date: <br/>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChangeDate}
                      placeholderText="Select departure date..."
                    />

                  </center>
                </form>

                <br/>
                <center>
                  <Button onClick={this.onSubmit} variant="contained" color="primary">
                    Search Flights <span role="img" aria-label="Airplane">✈️</span>
                  </Button>
                </center> 
                <br/>


            <br/><br/><br/>
        </div>

    )
  }
}

const airports = [
  { airport: 'Los Angeles International Airport (LAX)', abbr: 'LAX' },
  { airport: 'Hartsfield–Jackson Atlanta International Airport (ATL)', abbr: 'ATL' },
  { airport: 'O\'Hare International Airport (ORD)', abbr: 'ORD' },
  { airport: 'Dallas/Fort Worth International Airport (DFW)', abbr: 'DFW' },
  { airport: 'Denver International Airport (DEN)', abbr: 'DEN' },
  { airport: "John F. Kennedy International Airport (JFK)", abbr: 'JFK' },
  { airport: 'San Francisco International Airport (SFO)', abbr: 'SFO' },
  { airport: 'Seattle–Tacoma International Airport (SEA)', abbr: 'SEA' },
  { airport: 'McCarran International Airport (LAS)', abbr: 'LAS' },
  { airport: 'Orlando International Airport (MCO)', abbr: 'MCO' },
  { airport: 'Newark Liberty International Airport (EWR)', abbr: 'EWR' },
  { airport: 'Charlotte Douglas International Airport (CLT)', abbr: 'CLT' },
  { airport: 'Phoenix Sky Harbor International Airport (PHX)', abbr: 'PHX' },
  { airport: 'George Bush Intercontinental Airport (IAH)', abbr: 'IAH' },  { airport: 'Newark Liberty International Airport (EWR)', abbr: 'EWR' },
  { airport: 'Miami International Airport (MIA)', abbr: 'MIA' },
  { airport: 'Logan International Airport (BOS)', abbr: 'BOS' },
  { airport: 'Minneapolis–Saint Paul International Airport (MSP)', abbr: 'MSP' }
];

export default Flights