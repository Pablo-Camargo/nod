// eslint-disable-next-line no-unused-vars

import User from '../models/User';

class UsersControllers {
  async index(req, res) {
    const { page, limit, name, email } = req.query;
    const where = {};
    if (!page || !limit) {
      return res.status(400).json({
        massage: 'Invalid params',
      });
    }
    if (name) {
      where.name = name;
    }
    if (email) {
      where.email = email;
    }
    const users = await User.findAndCountAll({
      where,
      limit,
      offset: limit * (page - 1),
    });
    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.body;
    const users = await User.findByPk(id);
    return res.json(users);
  }

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });
    return res.json(user);
  }

  async update(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;
    // eslint-disable-next-line radix
    const parse = parseInt(id);

    if (Number.isNaN(parse)) {
      return res.status(400).json({
        massage: 'Invalid ID',
      });
    }
    const user = await User.findByPk(parse);

    user.name = name;
    user.email = email;
    user.save(user);

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;
    // eslint-disable-next-line radix
    const parse = Number.parseInt(id);

    if (Number.isNaN(parse)) {
      return res.status(400).json({
        massage: 'Invalid ID',
      });
    }
    const user = await User.findByPk(parse);
    await user.destroy();
    return res.json();
  }
}
export default new UsersControllers();
