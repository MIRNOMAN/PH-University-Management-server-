import express from 'express';
import { studenterController } from './Student.controller';

const router = express.Router();

//application router

router.post('/create-student', studenterController.createStudent);

router.get('/', studenterController.getAllStudents);

router.get('/:studentId', studenterController.getSingleStudents);

export const studentRoute = router;
