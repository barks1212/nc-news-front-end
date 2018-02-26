import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import CommentPosterOverlay from './commentPosterOverlay';
import PT from 'prop-types';

class ArticleComments extends React.Component {
  state = {
    overlayOn: false,
  }


  render() {
    const { comments } = this.props;
    return (
      <section className="commentsMain">
        {this.props.comments && comments.map((comment, i) => {
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
        {this.state.overlayOn ? <CommentPosterOverlay
          overlayHandler={this.overlayHandler}
          article={this.props.article}
          comments={this.props.comments}
          fetchArticleComments={this.props.fetchArticleComments}
          submitComment={this.props.submitComment}
          params={this.props.params} /> : null}
        <section className="commentPoster">
            <section className="field is-marginless is-paddingless" id="commentAdder">
              <section className="control is-paddingless is-marginless">
                <input className="input is-medium is-danger" id="commentAdd" type="text" placeholder="Add a comment..." onClick={this.overlayHandler} />
              </section>
            </section>
          </section>
        </section>
    )
  }


  overlayHandler = () => {
    !this.state.overlayOn ? this.setState({ overlayOn: true })
      :
      this.setState({ overlayOn: false })
  }

}


export default ArticleComments;