import React from 'react';
import { Link } from 'react-router-dom';
import ArticleComments from './Article-comments';
import SingleArticleHeader from './Single-article-header';
import './Single-article.css';

class SingleArticle extends React.Component {
  state = {
    article: {},
    }

  componentDidMount() {
    this.fetchArticle(this.props.match.params.articleId);
  }

  render() {
    const { article } = this.state
    return (
      <section className="singleArticleMain">
        <section className="scrolling">
          <SingleArticleHeader article={this.state.article} />
          <ArticleComments params={this.props.match.params} />
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

}

export default SingleArticle;