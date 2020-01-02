import { observable, computed, action } from 'mobx';

export class Posts {
  posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ];

  get allPosts() {
    return this.posts
  }

  get Lenght() {
    return this.posts.length;
  }

  addPosts = () => {
    this.posts.push({
      "userId": 1,
      "id": 2,
      "title": "dddddddddddd",
      "body": "dddddddddddddddddddddddddddddddddddddddd"
    });
    console.log(this.posts)
  }


};

export default new Posts();