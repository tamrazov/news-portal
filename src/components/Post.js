import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom'

import Store from '../store/store'

@observer
export default class Post extends React.Component {

  componentDidMount() {
    console.log(this)
  }
  
  render() {
    const post  = Store.getPosts[this.props.match.params.id];

    return(
      <div className="container-post">
        <Link to='/Home'>
          Back
        </Link>
        <div className="post">
          <h2 className="post-title">
            { post.title }
          </h2>
          <div className="post-body">
            { post.body }
          </div>
        </div>
      </div>
    )
  }
}
