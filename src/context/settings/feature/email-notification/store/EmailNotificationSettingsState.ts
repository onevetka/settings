export interface EmailNotificationSettingsState {
  isEnabledMarketingEmails: boolean;
  isEnabledSecurityEmails: boolean;
}

export const emailNotificationSettingsState = (
  data: Partial<EmailNotificationSettingsState> = {}
): EmailNotificationSettingsState => ({
  isEnabledMarketingEmails: false,
  isEnabledSecurityEmails: false,
  ...data,
});
