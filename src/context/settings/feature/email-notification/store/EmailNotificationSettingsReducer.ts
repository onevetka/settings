import { EmailNotificationSettingsState } from './EmailNotificationSettingsState';
import { EmailNotificationSettingsEvent } from './emailNotificationSettingsEvent';

export const emailNotificationSettingsReducer = (
  state: EmailNotificationSettingsState,
  event: EmailNotificationSettingsEvent
) => {
  switch (event.type) {
    case 'ToggleMarketingEmailsEvent':
      return toggleMarketingEmails(state);
    case 'ToggleSecurityEmailsEvent':
      return toggleSecurityEmails(state);
  }
};

function toggleMarketingEmails(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    isEnabledMarketingEmails: !state.isEnabledMarketingEmails,
  };
}

function toggleSecurityEmails(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    isEnabledSecurityEmails: !state.isEnabledSecurityEmails,
  };
}
