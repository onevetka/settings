import { emailNotificationSettingsReducer } from './EmailNotificationSettingsReducer';
import { emailNotificationSettingsState } from './EmailNotificationSettingsState';

describe('EmailNotificationSettingsReducer (Способы использования настроек уведомлений)', () => {
  describe('ToggleMarketingEmailsEvent (Переключатель активности маркетинговых уведомлений)', () => {
    test('Включает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          isEnabledMarketingEmails: false,
        }),
        { type: 'ToggleMarketingEmailsEvent' }
      );

      expect(state.isEnabledMarketingEmails).toBe(true);
    });

    test('Отключает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          isEnabledMarketingEmails: true,
        }),
        { type: 'ToggleMarketingEmailsEvent' }
      );

      expect(state.isEnabledMarketingEmails).toBe(false);
    });
  });

  describe('ToggleSecurityEmailsEvent (Переключатель активности уведомлений безопасности)', () => {
    test('Включает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          isEnabledSecurityEmails: false,
        }),
        { type: 'ToggleSecurityEmailsEvent' }
      );

      expect(state.isEnabledSecurityEmails).toBe(true);
    });

    test('Отключает уведомления', () => {
      const state = emailNotificationSettingsReducer(
        emailNotificationSettingsState({
          isEnabledSecurityEmails: true,
        }),
        { type: 'ToggleSecurityEmailsEvent' }
      );

      expect(state.isEnabledSecurityEmails).toBe(false);
    });
  });
});
