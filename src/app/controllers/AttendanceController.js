import Attendance from '../models/Attendance';

class AttendanceController {
  async store(req, res) {
    const {
      id,
      coordinator,
      subject,
      description,
      date,
    } = await Attendance.create(req.body);

    return res.json({
      id,
      coordinator,
      subject,
      description,
      date,
    });
  }

  async index(req, res) {
    if (req.params.attendanceId) {
      const attendance = await Attendance.findOne({
        where: { id: req.params.attendanceId },
      });

      return res.json({
        attendance,
      });
    }

    const attendances = await Attendance.findAll({
      order: ['id'],
    });
    JSON.stringify(attendances.attendances);
    return res.json(attendances);
  }

  async update(req, res) {
    const attendance = await Attendance.findByPk(req.params.attendanceId);

    const {
      id,
      coordinator,
      subject,
      description,
      date,
    } = await attendance.update(req.body);

    return res.json({
      id,
      coordinator,
      subject,
      description,
      date,
    });
  }

  async delete(req, res) {
    const attendance = await Attendance.destroy({
      where: {
        id: req.params.attendanceId,
      },
    });

    return res.json(attendance);
  }
}

export default new AttendanceController();
