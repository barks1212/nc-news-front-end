import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

const UserComments = (props) => (
  <section className="userComments">
    {props.comments.map((comment, i) => {
      return (
        <Link to={`/articles/${comment.belongs_to}`}>
          <section className="card" key={i}>
            <section className="card-content">
              <section className="cardBody">
                <h1><strong>{comment.commentArticle}</strong></h1>
                <p className="is-size-7 "> {'<'}Nc/ {comment.commentTopic} >  {comment.votes} <i className="fa fa-arrow-up" aria-hidden="true"></i></p>
                <br/>
                <p className="is-size-7">{comment.body}</p>
              </section>
            </section>
          </section>
        </Link>
      )
    })}
  </section>
)

export default UserComments