import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGurdian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: 'string',
    required: true,
  },
  middleName: {
    type: 'string',
    required: true,
  },
  lastName: {
    type: 'string',
    required: true,
  },
});

const gurdianSchema = new Schema<Guardian>({
  fatherName: {
    type: 'string',
    required: true,
  },
  fatherOccupation: {
    type: 'string',
    required: true,
  },
  fatherContactNumber: {
    type: 'string',
    required: true,
  },
  motherName: {
    type: 'string',
    required: true,
  },
  motherOccupation: {
    type: 'string',
    required: true,
  },
  motherContactNumber: {
    type: 'string',
    required: true,
  },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: 'string',
    required: true,
  },
  Occupation: {
    type: 'string',
    required: true,
  },
  contactNumber: {
    type: 'string',
    required: true,
  },
  address: {
    type: 'string',
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: 'string' },
  name: userNameSchema,
  gender: ['Male', 'Female'],
  dateOfBirth: { type: String, required: true },
  contactNumber: { type: String, required: true },
  ImergencyNumber: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: {
    type: 'string',
    required: true,
  },
  isActive: ['active', 'inactive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
