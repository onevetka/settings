import {
  EmailNotificationSettings,
  emailNotificationSettings,
} from '../domian/entity/EmailNotificationSettings';

export interface EmailNotificationSettingsState {
  originalSettings: EmailNotificationSettings;
  draftSettings: EmailNotificationSettings;
}

export const emailNotificationSettingsState = (
  data: Partial<EmailNotificationSettingsState> = {}
): EmailNotificationSettingsState => ({
  originalSettings: emailNotificationSettings(),
  draftSettings: emailNotificationSettings(),
  ...data,
});
