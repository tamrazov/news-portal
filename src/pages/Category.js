import React from 'react';
import store from '../store/store'
import { observer } from 'mobx-react';

@observer
export default class Category extends React.Component {

  addUsersPost( user ) {
    store.postsUsers(user);
  }

  componentDidMount() {
    this.addUsersPost();
  }

  render() {
    const postUser = store.getUsersPosts.map( post => {
      return(
        <div className="post" key={post.id}>
          <p> { post.id } </p>
          <h2 className="post-title">
            { post.title }
          </h2>
          <div className="post-body">
            { post.body }
          </div>
        </div>
      )
    })

    return(
      <div className="wrapper-content container-category">
         <div className="container-buttons">
          <button className="button btn btn-primary" onClick={ () => {this.addUsersPost(store.userOne) } }>
            user1
          </button>
          <button className="button btn btn-primary" onClick={ () => { this.addUsersPost(store.userTwo) } }>
            user2
          </button>
          <button className="button btn btn-primary" onClick={ () => { this.addUsersPost(store.userThree) } }>
            user3
          </button>
        </div>
        <div className="container-posts">
          { postUser }
        </div>
      </div>
    )
  }
}
