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
      <section className="articlesSection hero">
        <section className="articlesHolder hero-body customScroll">
          {this.state.articles.map((article, i) => {
            if (article.hidden) return null
            return (
              <section className="card" id="articleHolder" key={i}>
                <section className="card-header">
                <ArticleIcon topic={article.belongs_to}/>
                      <Link to={`/topics/${article.belongs_to}/articles`}><p className="is-size-7">{'<'}Nc/ {article.belongs_to} /></p></Link>
                      <section className="media-right">
                      <span
                        className='is-pulled-right button is-small is-text' id="hideButton"
                        onClick={() => this.hideArticle(i)}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </span>
                      </section>
                </section>
                <section className="card-content is-paddingless">
                  <section className="cardBody">
                    <strong><Link to={`/articles/${article._id}`}>{article.title}</Link></strong>
                    <p>Submitted by <Link to={`/users/${article.created_by}`}>{article.created_by}</Link> to <Link to={`/topics/${article.belongs_to}/articles`}> {article.belongs_to}</Link></p>
                  <section className="commentsAndVotes">
                 <Voter article={article} updateArticleVote={this.updateArticleVote} />
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
    return fetch(`${process.env.REACT_APP_API_URL}/articles/${articleId}?${vote}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json()
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