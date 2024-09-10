import { AppError } from '../../errors/appError';
import { academicSemsterCodeMapper } from './academicSemester.constrant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemsterCodeMapper[payload.name] !== payload.code) {
    throw new AppError(404, 'Invalid semester code');
  }
  const result = await AcademicSemester.create(payload);

  return result;
};

const getAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getAcademicSemesterByIdFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  if (!result) {
    throw new AppError(404, 'Academic Semester not found');
  }
  return result;
};

const updateAcademicSemesterInDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    academicSemsterCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(404, 'Invalid semester code');
  }
  const result = await AcademicSemester.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result) {
    throw new AppError(404, 'Academic Semester not found');
  }
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAcademicSemestersFromDB,
  getAcademicSemesterByIdFromDB,
  updateAcademicSemesterInDB,
};
