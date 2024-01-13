import { UserInfoState } from "../../store/UserInfoState";

export class UserInfoViewState {
  name: string;

  constructor(state: UserInfoState) {
    this.name = `${state.firstName} ${state.lastName}`;
  }
}