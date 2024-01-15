import { Contact } from '../../components/Contact/Contact';
import { UserInfoViewState } from '../../viewState/UserInfoViewState';

interface UserInfoProps {
  viewState: UserInfoViewState;
}

export const UserInfo: React.FC<UserInfoProps> = ({ viewState }) => {
  const { name, contacts } = viewState;

  return (
    <div className="userInfo">
      <div>
        <h5>Основное</h5>
        <div>{name}</div>
      </div>
      <div>
        <h5>Контакты</h5>
        {contacts.map((contact) => (
          <Contact viewState={contact} />
        ))}
      </div>
    </div>
  );
};
