import { UserInfoState } from "../../store/UserInfoState";
import { UserInfoViewState } from "./UserInfoViewState";

export class UserInfoPageViewState {
  userInfo: UserInfoViewState | 'skeleton';

  constructor(state: UserInfoState) {
    switch (state.status) {
      case 'loading':
        this.userInfo = 'skeleton';
        break;
      case 'idle':
        this.userInfo = new UserInfoViewState(state);
        break;
      default:
        this.userInfo = 'skeleton';
    }
  }
}