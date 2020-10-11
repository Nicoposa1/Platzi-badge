import React from 'react'

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import PageLoading from '../components/Loader'
import api from '../api'

class BadgeEdit extends React.Component{
  state = { 
    loading:true,
    error: null,
    form: {
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    twitter:'',
  } }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })

    try{
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, form: data })
    }catch(error){
      this.setState({ loading: false, error: error })
    }
  }

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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render(){
    if(this.state.loading){
      return <PageLoading />
    }
    return(
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container-badge">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName={this.state.form.firstName || 'FIRST_NAME' } 
              lastName={this.state.form.lastName || 'LAST_NAME'}
              jobTitle={this.state.form.jobTitle || 'JOB_TITTLE'} 
              twitter={this.state.form.twitter || 'twitter' } 
              email= {this.state.form.email || 'EMAIL'} 
              avatarUrl="https://es.gravatar.com/userimage/192994403/013c21725ee2b66b21941e678d3bb965.jpg" />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValue={this.state.form} 
              error={this.state.error}
            />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit