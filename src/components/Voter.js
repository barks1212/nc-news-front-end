import React from 'react';

class Voter extends React.Component {
  state = {
    votes: this.props.article.votes
  }
  render() {
    return (
    <section className="voteCount">
      <span className="upArrow"><i className="fa fa-arrow-up" aria-hidden="true" onClick={() => this.voteUpOrDown(this.props.article._id, "vote=up")}></i></span>
      {this.state.votes}
      <span className="downArrow"><i className="fa fa-arrow-down" aria-hidden="true" onClick={() => this.voteUpOrDown(this.props.article._id, "vote=down")}></i></span>
    </section>
    )
  }

   voteUpOrDown = (id, vote) => {
    return this.props.updateArticleVote(id, vote) 
      .then((res) => {
        this.setState({
          votes: res.votes
        })
      })
  }
}
export default Voter