import axios from 'axios';
import React, { Component } from 'react';

class User extends Component {
  state = {
    user: {}
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/chasedonovan`)
      .then(res => {
        this.setState({
          user: res.data,
        });
        console.log('res', res)
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
              <h3>Name: {this.state.user.login} </h3>
              <p>Repo Count: {this.state.user.public_repos}</p> 
              <p>GitHub: {this.state.user.html_url}</p>
              <br />
            </div>
          </div>
    );
  }
}

export default User;