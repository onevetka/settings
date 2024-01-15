import { UserInfoState } from '../../store/UserInfoState';
import { ContactViewState } from './ContactViewState';

export class UserInfoViewState {
  name: string;
  contacts: ContactViewState[];

  constructor(state: UserInfoState) {
    this.name = `${state.user.firstName} ${state.user.lastName}`;

    const { email, phone } = state.user;

    this.contacts = [];

    if (phone) {
      this.contacts.push(
        new ContactViewState({
          label: 'Почта',
          value: email,
        })
      );
    }

    if (email) {
      this.contacts.push(
        new ContactViewState({
          label: 'Телефон',
          value: phone,
        })
      );
    }
  }
}
