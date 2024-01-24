import { EmailNotificationSettingsState } from './EmailNotificationSettingsState';
import { EmailNotificationSettingsEvent } from './EmailNotificationSettingsEvent';

export const emailNotificationSettingsReducer = (
  state: EmailNotificationSettingsState,
  event: EmailNotificationSettingsEvent
) => {
  switch (event.type) {
    case 'ToggleMarketingEmailsEvent':
      return toggleMarketingEmails(state);
    case 'ToggleSecurityEmailsEvent':
      return toggleSecurityEmails(state);
    case 'SaveEvent':
      return saveEvent(state);
    case 'DiscardEvent':
      return discardEvent(state);
  }
};

function toggleMarketingEmails(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    draftSettings: {
      ...state.draftSettings,
      isEnabledMarketingEmails: !state.draftSettings.isEnabledMarketingEmails,
    },
  };
}

function toggleSecurityEmails(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    draftSettings: {
      ...state.draftSettings,
      isEnabledSecurityEmails: !state.draftSettings.isEnabledSecurityEmails,
    },
  };
}

function saveEvent(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    originalSettings: state.draftSettings,
  };
}

function discardEvent(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    draftSettings: state.originalSettings,
  };
}
