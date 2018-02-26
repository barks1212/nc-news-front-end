import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import CommentPosterOverlay from './commentPosterOverlay';
import CommentVoter from './Comment-voter';
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
              {comment.created_by === 'northcoder' ? 
              <section className="deleteButton">
              <span className="button is-text is-size-7 is-pulled-left" id="delButton" onClick={() => this.props.deleteComment(this.props.params.articleId, comment._id)}> Delete</span> 
              </section>
              : null
            }
                <CommentVoter comment={comment} updateCommentVote={this.props.updateCommentVote} />
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