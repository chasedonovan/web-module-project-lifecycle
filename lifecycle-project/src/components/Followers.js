import axios from 'axios';
import React, { Component } from 'react';


class Followers extends Component {
  state = {
    followerList: [],
    followers: '',
    visibleFollowers: [],
    user: {}
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/chasedonovan/followers`)
      .then(resp => {
        this.setState({
          followerList: resp.data,
          visibleFollowers: resp.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  handleChange = (e) => {
    this.setState({
      ...this.state,
      followers: e.target.value,
      visibleFollowers: this.state.followerList.filter(follower => {
        console.log(follower);
        return follower.login.includes(e.target.value)
      })
    })
  }


  render() {
    return (
      <div>
        <h2> Followers </h2>
        <div className="searchSection">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="search followers" value={this.state.followers} onChange={this.handleChange} />
          </form>
        </div>

        <div id="followerList">
          {this.state.visibleFollowers.map(follower => {
              console.log(follower);
              return <div className="followerCard">
                      <div className="followerImage">
                        <img style = {{width: 150}}
                        src={follower.avatar_url} alt={this.state.user.login}/>
                      </div>
                      <div className="followerBody">
                        <h3>Username: {follower.login}</h3>
                        <p>Repo Count: {follower.public_repos}</p>
                        <p>GitHub: {follower.url}</p>
                      </div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Followers;