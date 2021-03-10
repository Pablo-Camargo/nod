import Sequelize from 'sequelize';
import databaseconfig from '../../config/database';

export default class BaseService {
  constructor() {
    this.sequelize = new Sequelize(databaseconfig);
  }

  async execute(sql, type) {
    const result = await this.sequelize.query(sql, { type });
    return result;
  }
}
