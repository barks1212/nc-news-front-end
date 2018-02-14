import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const TopicsNav = (props) => {
  return (
    <section className='homeDashButtons'>
      <Link to='/'><a className='button is-size-2 has-text-danger'>
      <i className="fa fa-home" aria-hidden="true"></i>
      <span className="buttonFooter is-size-7">Show All</span>
      </a>
      </Link>
      <Link to='/topics/football/articles'><a className='button is-size-2 has-text-danger'>
      <i className="fa fa-futbol-o" aria-hidden="true"></i>
      <span className="buttonFooter is-size-7">Football</span>
      </a>
      </Link>
      <Link to='/topics/coding/articles'><a className='button is-size-2 has-text-danger'>
      <i className="fa fa-code" aria-hidden="true"></i>
      <span className="buttonFooter is-size-7">Coding</span>
      </a>
      </Link>
      <Link to='/topics/cooking/articles'><a className='button is-size-2 has-text-danger'>
      <i className="fa fa-cutlery" aria-hidden="true"></i>
      <span className="buttonFooter is-size-7">Cooking</span>
      </a>
      </Link>
    </section>
  )
}

TopicsNav.propTypes = {
  topics: PT.array.isRequired
};


export default TopicsNav;