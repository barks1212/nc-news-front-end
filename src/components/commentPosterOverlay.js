import React from 'react';
import './CommentPosterOverlay.css';

class CommentPosterOverlay extends React.Component {
  state = {
    comment: ''
  }
  render() {
    return (
      <section className="commentPosterOverlay is-overlay">
        <section className="postHolder">
          <section className="contents">
            <section className="header">
              <span className="backArrow is-size-4"><i className="fa fa-arrow-left" aria-hidden="true" onClick={() => this.props.overlayHandler()}></i>
              </span>
            </section>
            <section className="articleDetailsOverlay">
              <h1 className="title is-size-5">{this.props.article.title}</h1>
            </section>
            <section className="postArea">
              <form className='field is-grouped' onSubmit={(e) => this.mainSubmit(this.props.params.articleId, e, this.state.comment)} >
                <section className='control is-expanded'>
                  <textarea autoFocus id="commentInputField" className='textarea is-large' onChange={this.changeHandler} value={this.state.comment} placeholder='Write a comment...' />
                </section>
                <section className="submitButton">
                  <button className='control button is-pulled-right is-info' id="submitButton" type='submit'>Post comment</button>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    )
  }
  changeHandler = (event) => {
    if (event) event.preventDefault();
    this.setState({
      comment: event.target.value,
    });
  }

  mainSubmit = (id, event, comment) => {
    event.preventDefault()
    this.props.submitComment(id, event, comment)
    this.props.overlayHandler()
    this.setState({ comment: '' })
  }

}

export default CommentPosterOverlay;