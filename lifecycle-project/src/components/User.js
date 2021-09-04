import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
  state = {
    user: {}
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/chasedonovan`)
      .then(resp => {
        this.setState({
          user: resp.data,
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
          <div className="infoCard">
            <div className="infoImg">
              <img style = {{width: 300}}
              src={this.state.user.avatar_url} alt={this.state.user.login}/>
            </div>

            <div className="infoBody">
              <h3>Name: {this.state.user.name} </h3>
              <br />
              <p>Bio: {this.state.user.bio} </p> 
              <br />
              <p>Location: {this.state.user.location}</p> <br />
            </div>
          </div>
    );
  }
}

export default User;