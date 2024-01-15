import { UserInfo, userInfo } from "../domain/entity/userInfo"

export interface UserInfoState {
  status: 'loading' | 'idle'
  user: UserInfo;
}

export const userInfoState = (data: Partial<UserInfoState> = {}): UserInfoState => ({
  status: 'loading',
  user: userInfo(),
  ...data,
});