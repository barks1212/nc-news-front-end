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
              <section className="card-content">
                <Voter article={article} updateArticleVote={this.updateArticleVote} />
                <section className="cardBody">
                  <strong><Link to={`/articles/${article._id}`}>{article.title}</Link></strong>
                  <p>Submitted by <Link to={`/users/${article.created_by}`}>{article.created_by}</Link> to <Link to={`/topics/${article.belongs_to}/articles`}> {article.belongs_to}</Link></p>
                  <p>{article.comments} comments</p>
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