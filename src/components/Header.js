import React from 'react';
import model from './../store'
import { observer } from 'mobx-react';

export default observer(function() {
  

  let posts = model.posts.map( (post) => {
      return (
        <li key={post.id}
        >
          { post.body }
        </li>
      )
    }
  )



  return(
    <div>
      { model.Lenght }
      <button onClick={ model.addPosts } >
        add
      </button>
      <br/>
      <div>
        { posts }
      </div>
    </div>
  );
});
