import Sticks from '../models/Sticks';
import Users from '../models/Users';

class SticksControllers {
  async index(req, res) {
    const notas = await Sticks.findAll();
    return res.json(notas);
  }

  async show(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;

    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: '/user not found' });
    }
    const post = await Sticks.findAll({ where: { user_id } });
    return res.json(post);
  }

  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;
    const { content } = req.body;
    const user = await Users.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: '/user not found' });
    }
    const post = await Sticks.create({ content, user_id });
    return res.json(post);
  }

  async update(req, res) {
    const { content } = req.body;
    const { id } = req.params;
    // eslint-disable-next-line radix
    const parse = parseInt(id);

    if (Number.isNaN(parse)) {
      return res.status(400).json({
        massage: 'Invalid ID',
      });
    }
    const user = await Users.findByPk(parse);

    user.content = content;
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
    const user = await Sticks.findByPk(parse);
    await user.destroy();
    return res.json();
  }
}
export default new SticksControllers();
