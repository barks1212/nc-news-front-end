import React from 'react';

class CommentPoster extends React.Component {
  render() {
    return (
      <section className="footer">
      <section className="field" id="commentAdder">
        <section className="control">
          <input className="input" type="text" placeholder="Add a comment..." />
        </section>
      </section>
    </section>
    )
  }
}

export default CommentPoster;