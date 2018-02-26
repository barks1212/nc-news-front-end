import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import './Top-users.css';

const TopUsers = (props) => (
  <section className="topUsers is-mobile">
    <section className="topUsersHeader">
      <h1 className="title is-size-3 has-text-white ">Top Users</h1>
    </section>
    <section className="topUsersContent">
      {props.users && props.users.slice(0, 5).sort((a, b) => {
        return b.totalVotes - a.totalVotes
      }).map((user, i) => {
        return (
          <Link to={`/users/${user.username}`} className="topUser box is-paddingless" key={i}>
          <section className="topUserName">
          <span to={`users/${user.username}`} className="topUserSpan has-text-dark title is-size-5"> {user.username}</span>
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