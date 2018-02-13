import React from 'react';
import { Link } from 'react-router-dom';
import './User-page.css';
import UserArticles from './User-articles';
import UserComments from './User-comments';

class UserPage extends React.Component {
  state = {
    user: {},
    userArticles: [],
    userComments: [],
    toggle: true,
  }

  componentDidMount() {
    this.fetchUserById(this.props.match.params.username)
    this.fetchArticlesByUser(this.props.match.params.username)
    this.fetchCommentsByUser(this.props.match.params.username)
  }

  componentWillReceiveProps(newprops) {
    this.state.toggle ? this.fetchArticlesByUser(newprops.match.params.username) : this.fetchCommentsByUser(newprops.match.params.username)
  }

  render() {
    const { user } = this.state;
    return (
      <section className="hero" id="userMain">
        <section className="hero is-danger" id="userTop">
          <section className="hero-head">
            <nav className="navbar">
              <section className="container">
                <section className="navbar-brand">
                  <Link to='/'><a className='button is-size-5 has-text-danger'>
                    <i className="fas fa-home"></i>
                  </a>
                  </Link>
                </section>
              </section>
            </nav>
          </section>
          <section className="hero-body">
            <section className="container has-text-centered" id="userPageHero">
              <section className="profileImage is-overlay">
                <figure className="image is-128x128" id="profileImage">
                  <img src={user.avatar_url} alt="userPic" />
                </figure>
                <h1 className="title">{user.username}</h1>
                <h2 className="subtitle">{user.totalVotes} total reputation</h2>
              </section>
            </section>
          </section>
        </section>
        <section className="hero is-info" id="userBody">
          <section className="hero-body">
            <section className="container" id="userInfo">
              <section className="buttons has-addons is-centered" id="userButtons">
                <span className="button is-text is-size-2" onClick={() => this.handleChangeArticles(this.state.toggle)} id="articles">Articles</span>
                <span className="button is-text is-size-2" onClick={() => this.handleChangeComments(this.state.toggle)} id="comments">Comments</span>
              </section>
              {this.state.toggle ? <UserArticles articles={this.state.userArticles}/>
              : <UserComments comments={this.state.userComments}/>}
            </section>
          </section>
        </section>
      </section>
    )
  }

  fetchUserById = (username) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${username}`)
      .then(buffer => buffer.json())
      .then((user) => {
        this.setState({ user: user.users[0] })
      })
      .catch(console.error)
  }

  fetchArticlesByUser = (username) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${username}/articles`)
      .then(buffer => buffer.json())
      .then((userArticles) => {
        this.setState({ userArticles })
      })
      .catch(console.error)
  }
  fetchCommentsByUser = (username) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${username}/comments`)
      .then(buffer => buffer.json())
      .then((userComments) => {
        this.setState({ userComments })
      })
      .catch(console.error)
  }

  handleChangeArticles = (flag) => {
    if (flag === false) this.setState({toggle: true})
  }

  handleChangeComments = (flag) => {
    if (flag === true) this.setState({toggle: false})
  }

}


export default UserPage;