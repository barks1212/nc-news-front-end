import React from 'react';
import PT from 'prop-types';

class CommentVoter extends React.Component {
  state= {
    voteUp: false,
    voteDown: false
  }
  render () {
    return (
      <section className="voteCountComments">
        <span className="upArrowComments"><i className="fa fa-chevron-up" style={this.state.voteUp ? {color: 'hsl(217, 71%, 53%)'} : {}} id="upArrowComments" aria-hidden="true" onClick={() => this.voteChangeHandler(this.props.comment._id, "up")}></i></span>
        {this.props.comment.votes}
        <span className="downArrowComments"><i className="fa fa-chevron-down" style={this.state.voteDown ? {color: 'hsl(348, 100%, 61%)'} : {}} id="downArrowComments" aria-hidden="true" onClick={() => this.voteChangeHandler(this.props.comment._id, "down")}></i></span>
      </section>
    )
  }
  voteChangeHandler = (id, vote) => {
    if (vote === 'up' && !this.state.voteUp && !this.state.voteDown) {
      this.setState({voteUp: true})
      this.props.updateCommentVote(id, vote)
    }
    else if (vote === 'up' && this.state.voteUp && !this.state.voteDown) {
       this.setState({voteUp: false})
       vote = 'down';
       this.props.updateCommentVote(id, vote)
    }
    else if (vote === 'up' && !this.state.voteUp && this.state.voteDown) {
      this.setState({voteUp: true, voteDown: false})
      this.props.updateCommentVote(id, vote)
      this.props.updateCommentVote(id, vote)
    }
    else if (vote === 'down' && !this.state.voteDown && !this.state.voteUp) {
      this.setState({voteDown: true})
      this.props.updateCommentVote(id, vote)
    }
    else if (vote === 'down' && this.state.voteDown && !this.state.voteUp) {
       this.setState({voteDown: false})
       vote = 'up';
       this.props.updateCommentVote(id, vote)
    }
    else if (vote === 'down' && !this.state.voteDown && this.state.voteUp) {
      this.setState({voteDown: true, voteUp: false})
      this.props.updateCommentVote(id, vote)
      this.props.updateCommentVote(id, vote)
    }
  }
}

CommentVoter.propTypes = {
  comment: PT.object,
  updateCommentVote: PT.func,
}

export default CommentVoter;