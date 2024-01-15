import { AppErrorViewState } from '../../../../../../core/appError/ui/viewState/appErrorViewState';
import { userInfo } from '../../domain/entity/userInfo';
import { userInfoState } from '../../store/UserInfoState';
import { Skeleton } from '../components/Skeleton/Skeleton';
import { BlockError } from '../containers/BlockError/BlockError';
import { UserInfo } from '../containers/UserInfo/UserInfo';
import { UserInfoPageViewState } from '../viewState/UserInfoPageViewState';
import { UserInfoViewState } from '../viewState/UserInfoViewState';

export const USER_INFO_STATE_STUB = userInfoState({
  status: 'idle',
  user: userInfo({
    firstName: 'Mike',
    lastName: 'Vetkin',
    email: 'mikevetkin@gmail.com',
    phone: '8-900-300-500-00',
  }),
});

export const UserInfoPage = () => {
  const viewState = new UserInfoPageViewState(USER_INFO_STATE_STUB);

  switch (viewState.userInfo.constructor) {
    case UserInfoViewState:
      return <UserInfo viewState={viewState.userInfo as UserInfoViewState} />;
    case AppErrorViewState:
      return <BlockError viewState={viewState.userInfo as AppErrorViewState} />;
    default:
      return <Skeleton />;
  }
};
