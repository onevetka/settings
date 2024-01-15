import { AppErrorViewState } from '../../../../../../../core/appError/ui/viewState/appErrorViewState';

interface BlockErrorProps {
  viewState: AppErrorViewState;
}

export const BlockError: React.FC<BlockErrorProps> = ({ viewState }) => {
  return <div>{viewState.label}</div>;
};
