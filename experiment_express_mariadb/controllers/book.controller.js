const db = require('../db.js');

class BookController {
  async createBook(req, res) {
    const { id, title, author } = req.body;

    const newBook = await db.then((connection) => {
      connection.query(
        `INSERT INTO books (id, title, author) ` +
        `VALUES (?, ?, ?) RETURNING *;`,
        [id, title, author]
      )
      .then((row) => {
        connection.end();
        res.json(newBook);
        return row;
      })
    });
  }
};

module.exports = new BookController();