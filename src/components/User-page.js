import React from 'react';
import { Link } from 'react-router-dom';
import './User-page.css';

class UserPage extends React.Component {
  state = {
    user: {},
    toggle: true,
    buttonColor: 'black',
  }

  componentDidMount() {
    this.fetchUserById(this.props.match.params.username)
  }
  render() {
    const { user } = this.state;
    let { toggle, buttonColor } = this.state;
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
                <span className="button is-text is-size-2" onClick={this.articlesButton} style={{ 'color': this.state.buttonColor }} id="articles">Articles</span>
                <span className="button is-text is-size-2"onClick={this.commentsButton} style={{ 'color': this.state.buttonColor }} id="comments">Comments</span>
              </section>
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

  articlesButton = () => {
    if (this.state.toggle === false) this.setState({ buttonColor: 'black' })
    if (this.state.toggle === false && this.state.buttonColor === 'black') this.setState({ buttonColor: 'blue', toggle: true })
  }

  commentsButton = () => {
    if (this.state.toggle === true) this.setState({ buttonColor: 'black' })
    if (this.state.toggle === true && this.state.buttonColor === 'black') this.setState({ buttonColor: 'blue', toggle: false })
  }
}


export default UserPage;