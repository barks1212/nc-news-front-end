import React from "react";
import TopicsNav from './Topic-nav';
import Articles from './Articles';
import TopUsers from './Top-users';
import Headers from './Headers';
import HomeTopicFlare from './Home-topic-flare';
import './Home-page.css';

class Home extends React.Component {

  state = {
    topics: [],
    users: [],
    showArticles: true
  };

  componentDidMount() {
    this.fetchTopics();
    this.fetchUsers();
  }

  render() {

    return (
      <section className="homeMain">
        <Headers topic={this.props.match ? this.props.match.params.topic : null} showArticles={this.state.showArticles} />
        <section className="homeBody">
          <section className="homeContent">
            {this.state.showArticles ?
              <section className="homeArticles">
                <Articles topics={this.state.topics} params={this.props.match ? this.props.match.params.topic : null} />
              </section>
              :
              <section className="homeTopUsers">
                <TopUsers users={this.state.users} />
              </section>}
          </section>
        </section>
        <section className="homeFooter nav">
          <span className="button is-text is-size-5 has-text-white" onClick={() => this.showArticlesHome(this.state.showArticles)} id="articlesToggle">Articles</span>
          <span className="is-size-4 has-text-white">|</span>
          <span className="button is-text is-size-5 has-text-white" onClick={() => this.showTopUsersHome(this.state.showArticles)} id="usersToggle">Top Users</span>
        </section>
      </section>
    )
  }

  showArticlesHome = (flag) => {
    if (!flag) this.setState({ showArticles: true })
  }

  showTopUsersHome = (flag) => {
    if (flag) this.setState({ showArticles: false })
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