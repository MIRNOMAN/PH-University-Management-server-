import express from 'express';
import { validateRequest } from '../../../middlewares/validateRequest';
import { studentValidations } from './student.validation';
import { StudentControllers } from './Student.controller';

const router = express.Router();

//application router
router.get('/', StudentControllers.getAllStudents);

router.get('/:id', StudentControllers.getSingleStudent);

router.patch(
  '/:id',
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:id', StudentControllers.deleteStudent);

export const studentRoute = router;
