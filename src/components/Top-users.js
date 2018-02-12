import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import './Top-users.css';

const TopUsers = (props) => (
  <section className="topUsers hero">
    <section className="topUsersHeader notification is-info is-paddingless is-marginless hero-head">
      <h1 className="title is-size-2 is-marginless">Top Users</h1>
    </section>
    <section className="topUsersContent is-paddingless hero-body">
      {props.users && props.users.slice(0, 5).map((user, i) => {
        return (
          <Link to={`/users/${user.username}`} className="topUser box is-paddingless" alt={i}>
          <section className="topUserName">
          <span to={`users/${user.username}`} className="topUserSpan has-text-dark title is-size-4">{user.username}</span>
        </section>
          <span className="totalVotes has-text-dark subtitle">{user.totalVotes}</span>
          </Link>
        )
      })}
    </section>
  </section>
)

TopUsers.propTypes = {
  users: PT.array.isRequired
};


export default TopUsers