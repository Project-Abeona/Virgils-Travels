import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getFlights = query => {
  return axios
    .post('flights', {
      infants_lap: query.infants_lap,
      children: query.children,
      seniors: query.seniors,
      country: query.country,
      from0: query.from0,
      to0: query.to0,
      date0: query.date0,
      pax: query.pax,
      cabin: query.cabin
    })
    .then(response => {
      window.open(JSON.parse(response['data'])['search']['url'])
      return {'url': JSON.parse(response['data'])['search']['url']}
    })
    .catch(err => {
      console.log(err)
    })
}