export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGurdian = {
  name: string;
  Occupation: string;
  contactNumber: string;
  address: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'Male' | 'Female';
  dateOfBirth?: string;
  contactNumber: string;
  ImergencyNumber: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  gurdian: Guardian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
};
