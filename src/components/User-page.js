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
      <section className="userMain is-mobile" id="userMain">
        <section className="hero is-danger" id="userTop">
          <section className="hero-head">
            <nav className="navbar">
              <section className="container" id="home">
                <section className="navbar-brand">
                  <Link to='/'><a className='button is-size-5 has-text-danger'>
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>
                  </Link>
                </section>
              </section>
            </nav>
          </section>
          <section className="hero-body is-paddingless">
            <section className="container has-text-centered" id="userPageHero">
              <section className="profileImage">
                <figure className="image is-128x128" id="profileImage">
                  <img src={user.avatar_url} alt="userPic" />
                </figure>
              </section>
            </section>
          </section>
        </section>
        <section className="userBody" id="userBody">
            <section className="container has-text-centered is-paddingless is-marginless" id="userInfo">
                <h1 className="title has-text-white is-size-4 is-paddingless is-marginless">{user.username}</h1>
                <h2 className="subtitle has-text-white is-size-6 is-paddingless is-marginless">{user.totalVotes} total reputation</h2>
              <section className="buttons has-addons is-centered" id="userButtons">
                <span className="button is-text has-text-black is-size-4" onClick={() => this.handleChangeArticles(this.state.toggle)} id="articles">Articles</span>
                <span className="button is-text has-text-black is-size-4" onClick={() => this.handleChangeComments(this.state.toggle)} id="comments">Comments</span>
              </section>
              {this.state.toggle ? <UserArticles updateArticleVote={this.updateArticleVote} articles={this.state.userArticles}/>
              : <UserComments comments={this.state.userComments}/>}
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

  updateArticleVote = (articleId, vote) => {
    return fetch(`${process.env.REACT_APP_API_URL}/articles/${articleId}?vote=${vote}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json()
      })
      .then((updatedArticle) => {  
        const newArticles = this.state.userArticles.map((article) => {
          if (updatedArticle._id === article._id) {
            return Object.assign({}, article, {
              votes: updatedArticle.votes
            });
          }
          return article
        })
        this.setState({
          userArticles: newArticles
        })
      })
    }

  handleChangeArticles = (flag) => {
    if (flag === false) this.setState({toggle: true})
  }

  handleChangeComments = (flag) => {
    if (flag === true) this.setState({toggle: false})
  }

}


export default UserPage;