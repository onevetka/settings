import { ContactViewState } from '../../viewState/ContactViewState';

interface ContactProps {
  viewState: ContactViewState;
}

export const Contact: React.FC<ContactProps> = ({ viewState }) => {
  return (
    <div className="contact">
      <div className="label">{viewState.label}</div>
      <div className="value">{viewState.value}</div>
    </div>
  );
};
