const db = require('../db.js');

class UserController {
  async createUser(req, res) {
    const { name, surename } = req.body;

    const newPerson = await db.query(
      'INSERT INTO person (name, surename) values ($1, $2) RETURNING *',
      [name, surename]
    );

    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query(
      'SELECT * FROM person'
    );

    res.json(users.rows);
  }

  async getOneUsers(req, res) {
    const id = req.params.id;
    const user = await db.query(
      'SELECT * FROM person WHERE id = $1',
      [id]
    );

    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { id, name, surename } = req.body;
    const user = await db.query(
      'UPDATE person SET name = $1, surename = $2 where id = $3 RETURNING *',
      [name, surename, id]
    );

    res.json(user.rows);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(
      'DELETE FROM person WHERE id = $1',
      [id]
    );

    res.json(user.rows[0]);
  }
}

module.exports = new UserController();