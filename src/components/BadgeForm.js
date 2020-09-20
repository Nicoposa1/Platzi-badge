import React from 'react'

class BadgeForm extends React.Component{
  // state = {};
  // handleChange = e => {
  //   // console.log({ 
  //     // name: e.target.name,
  //     // value: e.target.value, });
  //     this.setState({
  //       [e.target.name]:e.target.value
  //     })
  //   }
  handleClick = e => {
    console.log("Button was clicked");
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  }; 
  render(){
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-goup">
            <label>Fitst Name</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="firstName"
            value={this.props.formValue.firstName} />
          </div>

          <div className="form-goup">
            <label>Last Name</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="lastName" 
            value={this.props.formValue.lastName} />
          </div>

          <div className="form-goup">
            <label>Email</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="email" 
            name="email" 
            value={this.props.formValue.email} />
          </div>

          <div className="form-goup">
            <label>Job Title</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="jobTittle" 
            value={this.props.formValue.jobTittle} />
          </div>

          <div className="form-goup">
            <label>Twitter</label>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            type="text" 
            name="twitter"
            value={this.props.formValue.twitter} />
          </div>

          <button 
            onClick={this.handleClick} 
            className="btn btn-primary">
              Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm