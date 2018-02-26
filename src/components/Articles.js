import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import Voter from './Voter';
import ArticleIcon from './Article-icon';
import './Articles.css';


class Articles extends React.Component {
  state = {
    articles: [],
  }


  componentDidMount() {
    if (this.props.params !== null) this.fetchArticlesByTopic(this.props.params);
    else this.fetchArticles();
  }

  componentWillReceiveProps(newprops) {
    if (newprops.params !== null) this.fetchArticlesByTopic(newprops.params);
    else this.fetchArticles();
  }

  render() {
    return (
      <section className="articlesSection is-paddingless is-mobile">
        <section className="articlesHolder customScroll">
          {this.state.articles.map((article, i) => {
            if (article.hidden) return null
            return (
              <section className="card" id="articleHolder" key={i}>
                <section className="media-right">
                  <span
                    className='is-pulled-right button is-small is-text' id="hideButton"
                    onClick={() => this.hideArticle(i)}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </span>
                </section>
                <section className="card-header">
                  <ArticleIcon topic={article.belongs_to} />
                  <section className="articleDetails">
                    <section className="articleTopic">
                      <Link to={`/topics/${article.belongs_to}/articles`}><p className="is-size-7">{'<'}Nc/ {article.belongs_to} /></p></Link>
                    </section>
                    <section className="articleOwner">
                      <Link to={`/users/${article.created_by}`}><p className="is-size-7">{article.created_by}</p></Link>
                    </section>
                  </section>
                </section>
                <section className="card-content is-paddingless">
                  <section className="cardBody">
                    <strong><Link to={`/articles/${article._id}`}>{article.title}</Link></strong>
                    <p>Submitted by <Link to={`/users/${article.created_by}`}>{article.created_by}</Link> to <Link to={`/topics/${article.belongs_to}/articles`}> {article.belongs_to}</Link></p>
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
      </section>
    )
  }

  fetchArticles = () => {
    fetch(`${process.env.REACT_APP_API_URL}/articles`)
      .then(buffer => buffer.json())
      .then(({ articles }) => {
        this.setState({ articles })
      })
      .catch(console.error)
  }
  fetchArticlesByTopic = (topic) => {
    fetch(`${process.env.REACT_APP_API_URL}/topics/${topic}/articles`)
      .then(buffer => buffer.json())
      .then(({ articles }) => {
        this.setState({ articles })
      })
      .catch(console.error)
  }

  updateArticleVote = (articleId, vote) => {
    return fetch(`${process.env.REACT_APP_API_URL}/articles/${articleId}?vote=${vote}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json()
      })
      .then((updatedArticle) => {  
        const newArticles = this.state.articles.map((article) => {
          if (updatedArticle._id === article._id) {
            return Object.assign({}, article, {
              votes: updatedArticle.votes
            });
          }
          return article
        })
        this.setState({
          articles: newArticles
        })
      })
    }

  hideArticle = (index) => {
    this.setState({
      articles: this.state.articles.map((article, i) => {
        if (i === index) {
          return Object.assign({}, article, {
            hidden: true
          })
        }
        return article;
      })
    })
  }

}

Articles.propTypes = {
  topics: PT.array.isRequired
};

export default Articles