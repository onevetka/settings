export interface ToggleMarketingEmailsEvent {
  type: 'ToggleMarketingEmailsEvent';
}

export interface ToggleSecurityEmailsEvent {
  type: 'ToggleSecurityEmailsEvent';
}

export interface SaveEvent {
  type: 'SaveEvent';
}

export interface DiscardEvent {
  type: 'DiscardEvent';
}

export type EmailNotificationSettingsEvent =
  | ToggleSecurityEmailsEvent
  | ToggleMarketingEmailsEvent
  | SaveEvent
  | DiscardEvent;
