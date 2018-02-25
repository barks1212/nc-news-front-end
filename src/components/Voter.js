import React from 'react';

class Voter extends React.Component {
  state = {
    voteUp: false,
    voteDown: false
  }
  render() {
    return (
      <section className="voteCount">
        <span className="upArrow"><i className="fa fa-arrow-up" style={this.state.voteUp ? {color: 'hsl(217, 71%, 53%)'} : {}} id="upArrow" aria-hidden="true" onClick={() => this.voteChangeHandler(this.props.article._id, "up")}></i></span>
        {this.props.article.votes}
        <span className="downArrow"><i className="fa fa-arrow-down" style={this.state.voteDown ? {color: 'hsl(348, 100%, 61%)'} : {}} id="downArrow" aria-hidden="true" onClick={() => this.voteChangeHandler(this.props.article._id, "down")}></i></span>
      </section>
    )
  }

  voteChangeHandler = (id, vote) => {
    if (vote === 'up' && !this.state.voteUp && !this.state.voteDown) {
      this.setState({voteUp: true})
      this.props.updateArticleVote(id, vote)
    }
    else if (vote === 'up' && this.state.voteUp && !this.state.voteDown) {
       this.setState({voteUp: false})
       vote = 'down';
       this.props.updateArticleVote(id, vote)
    }
    else if (vote === 'up' && !this.state.voteUp && this.state.voteDown) {
      this.setState({voteUp: true, voteDown: false})
      this.props.updateArticleVote(id, vote)
      this.props.updateArticleVote(id, vote)
    }
    if (vote === 'down' && !this.state.voteDown && !this.state.voteUp) {
      this.setState({voteDown: true})
      this.props.updateArticleVote(id, vote)
    }
    else if (vote === 'down' && this.state.voteDown && !this.state.voteUp) {
       this.setState({voteDown: false})
       vote = 'up';
       this.props.updateArticleVote(id, vote)
    }
    else if (vote === 'down' && !this.state.voteDown && this.state.voteUp) {
      this.setState({voteDown: true, voteUp: false})
      this.props.updateArticleVote(id, vote)
      this.props.updateArticleVote(id, vote)
    }
  }
}
export default Voter