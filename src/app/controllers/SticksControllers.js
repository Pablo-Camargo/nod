import Stick from '../models/Stick';
import User from '../models/User';

class SticksControllers {
  async index(req, res) {
    const notas = await Stick.findAll();
    return res.json(notas);
  }

  async show(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;
    const id = user_id;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: '/user not found' });
    }
    const post = await Stick.findAll({ where: { user_id } });
    return res.json(post);
  }

  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id } = req.params;
    const { content } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: '/user not found' });
    }
    const post = await Stick.create({ content, user_id });
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
    const user = await User.findByPk(parse);

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
    const user = await Stick.findByPk(parse);
    await user.destroy();
    return res.json();
  }
}
export default new SticksControllers();
