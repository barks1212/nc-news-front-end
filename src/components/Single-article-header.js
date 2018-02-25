import React from 'react'
import { Link } from 'react-router-dom';

import Voter from './Voter';
import ArticleIcon from './Article-icon';

class SingleArticleHeader extends React.Component {
  render () {
    const { article } = this.props;
    return (
      <section className="title hero is-medium is-primary is-bold" id="articleContainer">
            <section className="hero-head">
              {this.props.article && <ArticleIcon topic={article.belongs_to} />}
              <section className="container" id="articleInfo">
                <span className="articleTopic"><Link to={`/topics/${article.belongs_to}/articles`}><p className="is-size-7">{'<'}Nc/ {article.belongs_to} /></p></Link></span>
                <span className="articleOwner"><Link to={`/users/${article.created_by}`}><p className="is-size-7">{article.created_by}</p></Link></span>
              </section>
            </section>
            <section className="hero-body is-paddingless" id="articleBody">
              <section className="container" id="articleContents">
                <section className="articleTitle">
                  <h1 className="title">{article.title}</h1>
                </section>
                <section className="articleText">
                  <h2 className="subtitle">{article.body}</h2>
                </section>
              </section>
            </section>
            <section className="hero-footer" id="articleFooter">
              <section className="container" id="commentsAndVotes">
                <Voter article={article} updateArticleVote={this.updateArticleVote} />
                <span className="seperator has-text-weight-light">|</span>
                <i className="fa fa-comment" aria-hidden="true"></i> <p className="subtitle is-marginless">{article.comments}</p>
              </section>
            </section>
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

export default SingleArticleHeader;