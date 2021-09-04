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
      visibleFollowers: this.state.followerList.filter(F => {
        console.log(F);
        return F.login.includes(e.target.value)
      })
    })
  }


  render() {
    return (
      <div>
        <div className="searchSection">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="search followers" value={this.state.followers} onChange={this.handleChange} />
          </form>
        </div>

        <div id="followerList">
          {this.state.visibleFollowers.map(f => {
              console.log(f);
              return <div className="followerCard">
                      <div className="followerImage">
                        <img style = {{width: 150}}
                        src={f.avatar_url} alt={this.state.user.login}/>
                      </div>
                      <div className="followerBody">
                        <h3>Username: {f.login}</h3>
                        <p>GitHub: {f.url}</p>
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