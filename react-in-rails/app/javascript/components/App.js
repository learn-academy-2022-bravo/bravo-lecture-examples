import React, { Component } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Navigation from './components/Navigation'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={AboutUs} />
        </Switch>
      </Router>
    )
  }
}
export default App
