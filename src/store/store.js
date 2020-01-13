import { observable, computed, action } from 'mobx';
import Axios from 'axios';

class Store {
  @observable posts = [];
  @observable usersPosts = [];
  @observable userId = [1,2,3];
  @observable token = null;
  @observable status = null;

  @computed
  get userOne() {
    return this.userId[0];
  }

  @computed
  get userTwo() {
    return this.userId[1];
  }

  @computed
  get userThree() {
    return this.userId[2];
  }

  @computed
  get lengthPosts() {
    return this.posts.length;
  }

  @computed
  get getPosts() {
    return this.posts;
  }

  @computed
  get getUsersPosts() {
    return this.usersPosts;
  }

  @computed
  get getToken() {
    return this.token;
  }

  @action.bound
  postsUsers = (user = 1) => {
   this.usersPosts = this.posts.filter( post => {
      return post.userId === user; 
    })
  }

  @action.bound
  fetchPosts = () => {
    Axios.get('http://localhost:3004/posts')
    .then( res =>  {
      this.posts = res.data;
    })
    .catch( err => {
      console.log(err)
    })
  }

  @action.bound
  addPost = (data) => {
    Axios.post('http://localhost:3004/posts',data)
    .then(
      this.fetchPosts()
    )
    .catch( err => {
      console.log(err)
    })
  }

  @action.bound
  Auth = (data, router) => {
    Axios.post('https://reqres.in/api/login',data)
    .then( res => {
      this.token = res.data.token;
      this.status = res.status;
      router.push('/Home');
    })
    .catch( err => {
      router.push('/');
    })
  }
}

export default new Store();