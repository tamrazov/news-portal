import React from 'react';
import store from '../store/store'
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer
export default class Home extends React.Component {
  getData() {
    store.fetchPosts();
  }
 
  componentDidMount() {
    this.getData();
  }

  render() {
    const postPreview = store.getPosts.map( el => {
      return(
        <Link
          to={`/Post/${el.id}`}
          key={el.id}
          className="post-preview"
        >
          {el.title}
        </Link>
      ) 
    })

    return(
      <div className="wrapper-content container-home">
        <div className="left-section-home">
          <p> All posts: { store.lengthPosts } </p>  
        </div>
        <div className="right-section-home">
          { store.lengthPosts > 0 ? postPreview : <h2> loading... </h2> }
        </div>
      </div>
    )
  }
}
