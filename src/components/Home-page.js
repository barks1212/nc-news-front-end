import React from "react";
import TopicsNav from './Topic-nav';
import Articles from './Articles';
import TopUsers from './Top-users';
import Headers from './Headers';
import './Home-page.css';

class Home extends React.Component {

  state = {
    topics: [],
    users: [],
  };

  componentDidMount() {
    this.fetchTopics();
    this.fetchUsers();
  }

  render() {
    return (
      <section className="homeMain">
      <Headers />
        <section className="homeBody">
          <TopicsNav topics={this.state.topics} />
          <section className="columns">
            <section className="column is-two-thirds">
              <Articles topics={this.state.topics} params={this.props.match ? this.props.match.params.topic : null} />
            </section>
            <section className="column is-one-third">
              <TopUsers users={this.state.users} />
            </section>
          </section>
        </section>
      </section>
    )
  }

  fetchTopics = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/topics`)
      .then(buffer => buffer.json())
      .then(({ topics }) => {
        this.setState({ topics })
      })
      .catch(console.error)
  }

  fetchUsers = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/`)
      .then(buffer => buffer.json())
      .then(({ users }) => {
        this.setState({ users })
      })
      .catch(console.error)
  }
}


export default Home;