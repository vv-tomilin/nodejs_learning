const db = require('../db.js');

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = db.query(
      'INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
      [title, content, userId],
    );

    res.json(newPost.rows);
  }

  async getPostsByUser(req, res) {

  }
}

module.exports = new PostController();