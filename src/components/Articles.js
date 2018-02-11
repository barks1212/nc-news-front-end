import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import Voter from './Voter';
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

}

Articles.propTypes = {
  topics: PT.array.isRequired
};

export default Articles