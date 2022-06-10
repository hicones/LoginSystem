export interface IUser {
  uid?: string;
  name?: string;
  email: string;
  photoURL?: string;
  emailVerified?: any;
  phoneNumber?: any;
  accessToken?: string | null;
}
