import { useReducer } from 'react';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';
import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { EmailNotificationSettingsViewModel } from '../ui/viewModel/EmailNotificationSettingsViewModel';

export const useEmailNotificationSettings = () => {
  const [state, dispatch] = useReducer(
    emailNotificationSettingsReducer,
    emailNotificationSettingsState()
  );

  const viewModel = new EmailNotificationSettingsViewModel(state, dispatch);

  return {
    viewModel,
  };
};
