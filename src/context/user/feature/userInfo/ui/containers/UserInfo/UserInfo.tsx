import { UserInfoViewState } from "../../viewState/UserInfoViewState";

interface UserInfoProps {
  viewState: UserInfoViewState;
}

export const UserInfo: React.FC<UserInfoProps> = ({ viewState }) => {
  const { name } = viewState;
  return <>
    <div>{name}</div>
  </>;
}