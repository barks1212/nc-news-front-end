import React from 'react';
import PT from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Voter from './Voter';

class UserArticles extends React.Component {
  render() {
    return (
      <section className="userArticles">

        {this.props.articles.message ? <Redirect to="/*" /> : this.props.articles.map((article, i) => {
          return (
            <section className="card" key={i}>
              <section className="card-content is-paddingless">
                <section className="cardBody">
                <Link to={`/topics/${article.belongs_to}/articles`}><p className="is-size-7">{'<'}Nc/ {article.belongs_to} /></p></Link>
                  <strong><Link to={`/articles/${article._id}`}>{article.title}</Link></strong>
                  <section className="commentsAndVotes">
                    <Voter article={article} updateArticleVote={this.props.updateArticleVote} /> 
                    <span className="seperator has-text-weight-light">|</span>
                    <i className="fa fa-comment" id="commentIcon" aria-hidden="true"></i> <p className="has-text-white"> {article.comments}</p>
                  </section>
                </section>
              </section>
            </section>
          )
        })}
      </section>
    )
  }
}

UserArticles.propTypes = {
  articles: PT.array
}



export default UserArticles