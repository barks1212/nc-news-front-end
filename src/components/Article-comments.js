import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

class ArticleComments extends React.Component {
  state = {
    comments: []
  }

  componentDidMount() {
    this.fetchArticleComments(this.props.params.articleId)
  }

  render() {
    const { comments } = this.state;
    return (
      <section className="commentsMain">
        {this.state.comments && comments.map((comment, i) => {
          return (
            <section className="container" id="eachComment">
              <section className="commentHead">
                <Link to={`/users/${comment.created_by}`}> <span className="has-text-weight-light">{comment.created_by}</span></Link> <span className="has-text-weight-light">. {Moment(comment.created_at).fromNow()}</span>
              </section>
              <section className="commentBody">
                {comment.body}
              </section>
              <section className="commentFooter">
                <p className="has-text-weight-light">{comment.votes}</p>
              </section>
            </section>
          )
        })}
        </section>
    )
  }

  fetchArticleComments = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/articles/${id}/comments`)
      .then(buffer => buffer.json())
      .then(({ comments }) => {
        console.log(comments)
        this.setState({ comments })
      })
      .catch(console.error)
  }

}

export default ArticleComments;