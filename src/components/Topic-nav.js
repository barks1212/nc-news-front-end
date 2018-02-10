import React from 'react';
import { Link } from 'react-router-dom';

const TopicsNav = (props) => {
  return (
    <section className='homeDashButtons'>
      <Link to='/'><a className='button is-size-2 has-text-danger'>
      <i className="fas fa-home"></i>
      <span className="buttonFooter is-size-7">Show All</span>
      </a>
      </Link>
      <Link to='/topics/football/articles'><a className='button is-size-2 has-text-danger'>
      <i className="fas fa-volleyball-ball"></i>
      <span className="buttonFooter is-size-7">Football</span>
      </a>
      </Link>
      <Link to='/topics/coding/articles'><a className='button is-size-2 has-text-danger'>
      <i class="fas fa-code"></i>
      <span className="buttonFooter is-size-7">Coding</span>
      </a>
      </Link>
      <Link to='/topics/cooking/articles'><a className='button is-size-2 has-text-danger'>
      <i class="fas fa-utensils"></i>
      <span className="buttonFooter is-size-7">Cooking</span>
      </a>
      </Link>
      
    </section>
  )

}

export default TopicsNav;