import React from 'react';
import { Link } from 'react-router-dom';
import ArticleComments from './Article-comments';
import SingleArticleHeader from './Single-article-header';
import './Single-article.css';

class SingleArticle extends React.Component {
  state = {
    article: {},
    comments: []
    }

  componentDidMount() {
    this.fetchArticle(this.props.match.params.articleId);
    this.fetchArticleComments(this.props.match.params.articleId)
  }

  render() {
    const { article } = this.state
    return (
      <section className="singleArticleMain">
        <section className="scrolling">
          <SingleArticleHeader comments={this.state.comments}  updateArticleVote={this.updateArticleVote} article={this.state.article} />
          <ArticleComments comments={this.state.comments} fetchArticleComments={this.fetchArticleComments} submitComment={this.submitComment} params={this.props.match.params} article={this.state.article} />
        </section>
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
    const article = this.state.article
    return fetch(`${process.env.REACT_APP_API_URL}/articles/${articleId}?vote=${vote}`, {
      method: 'PUT'
    })
      .then((res) => {
        return res.json()
      })
      .then((updatedArticle) => {  
        this.setState({
          article: updatedArticle
        })
      })
      .catch(console.error)
    }

    submitComment = (id, event, comment) => {
      event.preventDefault()
      return fetch(`${process.env.REACT_APP_API_URL}/articles/${id}/comments`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          text: comment
        })
      })
        .then(buffer => buffer.json())
        .then(res => {
          const comments = this.state.comments.slice(0)
          comments.push(res)
          this.setState({
            comments
          })
        })
    }

    fetchArticleComments = (id) => {
      fetch(`${process.env.REACT_APP_API_URL}/articles/${id}/comments`)
        .then(buffer => buffer.json())
        .then(({ comments }) => {
          this.setState({ comments })
        })
        .catch(console.error)
    }
}

export default SingleArticle;