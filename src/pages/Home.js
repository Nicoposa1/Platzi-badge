import React from 'react'
import { Link } from 'react-router-dom'

import astronauts from '../images/astronauts.svg'
import platziconf from '../images/platziconf-logo.svg'
import './styles/Home.css'

class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="platziconf">
          <div className="platziconf-content">
            <img src={platziconf} alt=""/>
            <h1>print your badges</h1>
            <p>the easiest way to manage your <br/> conference</p>
            <Link to="/badges/" className="btn btn-success" >
                Start Now
            </Link>
          </div>
          <div className="platziconf-logo">
            <img src={astronauts} alt=""/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home