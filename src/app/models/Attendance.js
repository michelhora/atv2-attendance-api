import Sequelize, { Model } from 'sequelize';

class Attendance extends Model {
  static init(sequelize) {
    super.init(
      {
        coordinator: Sequelize.STRING,
        subject: Sequelize.STRING,
        description: Sequelize.STRING,
        date: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default Attendance;
