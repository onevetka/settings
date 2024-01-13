import { AppError } from "../../../../../../core/appError/domain/entity/appError";
import { AppErrorViewState } from "../../../../../../core/appError/ui/viewState/appErrorViewState";
import { UserInfoState } from "../../store/UserInfoState";
import { UserInfoViewState } from "./UserInfoViewState";

export class UserInfoPageViewState {
  userInfo: UserInfoViewState | 'skeleton' | AppErrorViewState;

  constructor(state: UserInfoState) {
    switch (state.status) {
      case 'loading':
        this.userInfo = 'skeleton';
        break;
      case 'idle':
        this.userInfo = new UserInfoViewState(state);
        break;
      default:
        this.userInfo = new AppErrorViewState(new AppError({
          code: 'ERROR_INVALID_SYSTEM_STATUS',
          message: 'Что-то пошло не так, обратитесь в поддержку',
          path: [],
        }));
    }
  }
}