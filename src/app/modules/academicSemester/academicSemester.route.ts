import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { validateRequest } from '../../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import auth from '../../../middlewares/auth';

const router = express.Router();

//application router

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get(
  '/',
  auth('admin'),
  AcademicSemesterControllers.getAllAcademicSemesters,
);

router.get('/:id', AcademicSemesterControllers.getAcademicSemesterById);

router.patch(
  '/:id',
  validateRequest(
    AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

export const academicSemesterRoute = router;
