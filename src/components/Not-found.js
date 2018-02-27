import React from 'react';
import { Link } from 'react-router-dom';
import './Not-found.css';

const NotFound = () => (
  <section className="hero is-large is-mobile" id="notFound">
    <Link to='/'><a className='button is-size-5 has-text-danger' id="home404">
      <i className="fa fa-home" aria-hidden="true"></i>
    </a>
    </Link>
    <h1 className="title is-size-1" id="title404">404</h1>
    <img className="gif" alt="gif" src='https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif' />
  </section>
)

export default NotFound;