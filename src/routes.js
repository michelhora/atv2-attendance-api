import { Router } from 'express';

import AttendanceController from './app/controllers/AttendanceController';

const routes = new Router();
routes.get('/teste', res => {
  return res.json('teucu');
});
routes.post('/attendance', AttendanceController.store);
routes.get('/attendance', AttendanceController.index);
routes.put('/attendance/:attendanceId', AttendanceController.update);
routes.delete('/attendance/:attendanceId', AttendanceController.delete);

export default routes;
