import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import api from '../api'

class BadgeNew extends React.Component{
  state = { form: {
    firstName:'',
    lastName:'',
    email:'',
    jobTittle:'',
    twitter:'',
  } }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  }
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render(){
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container-badge">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName={this.state.form.firstName || 'FIRST_NAME' } 
              lastName={this.state.form.lastName || 'LAST_NAME'}
              jobTittle={this.state.form.jobTittle || 'JOB_TITTLE'} 
              twitter={this.state.form.twitter || 'twitter' } 
              email= {this.state.form.email || 'EMAIL'} 
              avatarUrl="https://es.gravatar.com/userimage/192994403/013c21725ee2b66b21941e678d3bb965.jpg" />
            </div>
            <div className="col-6">
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValue={this.state.form} 
            />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew