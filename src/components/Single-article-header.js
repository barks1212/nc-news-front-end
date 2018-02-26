import React from 'react'
import { Link } from 'react-router-dom';

import Voter from './Voter';
import ArticleIcon from './Article-icon';

class SingleArticleHeader extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <section className="hero is-mobile is-small is-bold" id="articleContainer">
        <section className="hero-head">
          {this.props.article && <ArticleIcon topic={article.belongs_to} />}
          <section className="container" id="articleInfo">
            <span className="articleTopic"><Link to={`/topics/${article.belongs_to}/articles`}><p className="is-size-7 has-text-white">{'<'}Nc/ {article.belongs_to} /></p></Link></span>
            <span className="articleOwner"><Link to={`/users/${article.created_by}`}><p className="is-size-7 has-text-white">{article.created_by}</p></Link></span>
          </section>
          <section className="homeButton is-pulled-right">
            <Link to='/'><a className='button is-size-6 has-text-danger'>
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
            </Link>
          </section>
        </section>
        <section className="hero-body is-paddingless" id="articleBody">
          <section className="container" id="articleContents">
            <section className="articleTitle">
              <h1 className="title has-text-white is-size-4">{article.title}</h1>
            </section>
            <section className="articleText">
              <h2 className="subtitle has-text-white is-size-5">{article.body}</h2>
            </section>
          </section>
        </section>
        <section className="hero-footer" id="articleFooter">
          <section className="container" id="commentsAndVotes">
            <Voter article={article} updateArticleVote={this.props.updateArticleVote} />
            <span className="seperator has-text-weight-light">|</span>
            <i className="fa fa-comment" aria-hidden="true"></i> <p className="subtitle is-marginless">{this.props.comments.length}</p>
          </section>
        </section>
      </section>
    )
  }
}

export default SingleArticleHeader;