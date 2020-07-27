import { StringLocale } from 'yup';

export interface IUser {
  username: string;
  fullname: string;
  role: { name: string };
}
