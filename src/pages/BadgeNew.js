import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName="Nicolás" 
              lastName="Posa" 
              jobTittle="Frontend Engineer" 
              twitter="nicoposa1" 
              avatarUrl="https://es.gravatar.com/userimage/192994403/013c21725ee2b66b21941e678d3bb965.jpg" />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew