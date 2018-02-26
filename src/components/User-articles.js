import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import Voter from './Voter';

class UserArticles extends React.Component {
  render() {
    return (
      <section className="userArticles">
        {this.props.articles.map((article, i) => {
          return (
            <section className="card" key={i}>
              <section className="card-content is-paddingless">
                <section className="cardBody">
                <Link to={`/topics/${article.belongs_to}/articles`}><p className="is-size-7">{'<'}Nc/ {article.belongs_to} /></p></Link>
                  <strong><Link to={`/articles/${article._id}`}>{article.title}</Link></strong>
                 
                  <section className="commentsAndVotes">
                    <Voter article={article} updateArticleVote={this.updateArticleVote} /> 
                    <span className="seperator has-text-weight-light">|</span>
                    <i className="fa fa-comment" aria-hidden="true"></i> {article.comments}
                  </section>
                </section>
              </section>
            </section>
          )
        })}
      </section>
    )
  }
  updateArticleVote = (articleId, vote) => {
    return fetch(`${process.env.REACT_APP_API_URL}/articles/${articleId}?${vote}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json()
      })
  }
}

UserArticles.propTypes = {
  articles: PT.array
}



export default UserArticles