import { userInfoState } from "../../store/UserInfoState";
import { UserInfoPageViewState } from "./UserInfoPageViewState";
import { UserInfoViewState } from "./UserInfoViewState";

describe('UserInfoPageViewState (Модель представления страницы с информацией о пользователе)', () => {
  test('Если система в состоянии загрузки, показать скелетон', () => {
    const viewState = new UserInfoPageViewState(userInfoState({
      status: 'loading'
    }));

    expect(viewState.userInfo).toBe('skeleton');
  });
  test('Если система в состоянии простоя, показать информацию о пользователе', () => {
    const viewState = new UserInfoPageViewState(userInfoState({
      status: 'idle'
    }));

    expect(viewState.userInfo).toBeInstanceOf(UserInfoViewState);
  });
});