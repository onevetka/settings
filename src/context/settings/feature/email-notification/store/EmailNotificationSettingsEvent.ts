export interface ToggleMarketingEmailsEvent {
  type: 'ToggleMarketingEmailsEvent';
}

export interface ToggleSecurityEmailsEvent {
  type: 'ToggleSecurityEmailsEvent';
}

export type EmailNotificationSettingsEvent =
  | ToggleSecurityEmailsEvent
  | ToggleMarketingEmailsEvent;
