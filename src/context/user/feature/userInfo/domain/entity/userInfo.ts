export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const userInfo = (data: Partial<UserInfo> = {}): UserInfo => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ...data,
});