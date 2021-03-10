import Sequelize, { Model } from 'sequelize';

class Sticks extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'sticks',
      }
    );
    return this;
  }

  static associations(models) {
    this.belongsTo(models.Users, {
      as: 'users',
      foreignKey: 'user_id',
    });
  }
}
export default Sticks;
