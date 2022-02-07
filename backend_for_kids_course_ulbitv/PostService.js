import Post from "./Post.js";

class PostService {
  create(post) {
    const createdPost = Post.create(post);
    return createdPost;
  }

  getAll() {
    const posts = Post.find();
    return posts;
  }

  getOne(id) {
    if (!id) {
      throw new Error('No Id property');
    }

    const post = Post.findById(id);
    return post;
  }

  update(post) {
    if (!post._id) {
      throw new Error('не указан ID')
    }
    const updatedPost = Post.findByIdAndUpdate(post._id, post, { new: true })
    return updatedPost;
  }

  delete(id) {
    if (!id) {
      throw new Error('No Id property');
    }

    const post = Post.findByIdAndDelete(id);

    return post;
  }
}

export default new PostService();