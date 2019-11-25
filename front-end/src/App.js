import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Footer from './components/Footer'
import FAQ from './components/Footer Links/FAQ'
import FourOhFour from './components/404'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/faq" component={FAQ} />
            <Route path="*" component={FourOhFour} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
