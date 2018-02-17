import React from 'react';
import { Link } from 'react-router-dom';
import ArticleIcon from './Article-icon';
import Voter from './Voter';
import ArticleComments from './Article-comments';
import './Single-article.css';

class SingleArticle extends React.Component {
  state = {
    article: {}
  }

  componentDidMount() {
    this.fetchArticle(this.props.match.params.articleId);
  }

  render() {
    const { article } = this.state
    return (
      <section className="singleArticleMain">
        <section className="title hero is-medium is-primary is-bold">
          <section className="hero-head">
            {this.state.article && <ArticleIcon topic={article.belongs_to} />}
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
              <Voter article={this.state.article} updateArticleVote={this.updateArticleVote} />
              <span className="seperator has-text-weight-light">|</span>
              <i className="fa fa-comment" aria-hidden="true"></i> <p className="subtitle is-marginless">Comment</p>
            </section>
          </section>
        </section>
        <ArticleComments />
      </section>
    )
  }

  fetchArticle = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/articles/${id}`)
      .then(buffer => buffer.json())
      .then((article) => {
        this.setState({ article: article.articles[0] })
      })
      .catch(console.error)
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

export default SingleArticle;