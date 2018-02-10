import React from "react";
import { Link } from "react-router-dom";
import TopicsNav from './Topic-nav'
import './Home-page.css';

class Home extends React.Component {

  state = {
    topics: {},
    users: {},
    user: {},
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    return (
      <section>
        <TopicsNav topics={this.state.topics}/>
      </section>
    )
  }

  fetchTopics = () => {
   return fetch(`${process.env.REACT_APP_API_URL}/topics`)
      .then(buffer => buffer.json())
      .then(( {topics} ) => {
        this.setState({ topics })
      })
      .catch(console.error)
  }

  fetchUsers = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/`)
    .then(buffer => buffer.json())
    .then(({users}) => {
      this.setState({ users })
    })
    .catch(console.error)
  }

  fetchUserById = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/:username`)
      .then(buffer => buffer.json())
      .then(({ user }) => {
        this.setState({ user })
      })
      .catch(console.error)
  }
}


export default Home;