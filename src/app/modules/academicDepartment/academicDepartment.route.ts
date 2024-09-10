import express from 'express';
import { validateRequest } from '../../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

//application router

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmantValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);

router.get('/:id', AcademicDepartmentControllers.getAcademicDepartmentById);

router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmantValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const academicDepartmentRoute = router;
