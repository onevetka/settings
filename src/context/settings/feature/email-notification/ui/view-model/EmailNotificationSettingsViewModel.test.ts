import { emailNotificationSettings } from '../../domian/entity/EmailNotificationSettings';
import { emailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { EmailNotificationSettingsViewModel } from './EmailNotificationSettingsViewModel';

describe('EmailNotificationSettingsViewModel (Модель представления настроек уведомлений по почте)', () => {
  describe('Кнопки сохранения и отмены', () => {
    test('Если пользователь не вносил изменения, кнопки скрыты', () => {
      const viewModel = new EmailNotificationSettingsViewModel(
        emailNotificationSettingsState({
          originalSettings: emailNotificationSettings(),
          draftSettings: emailNotificationSettings(),
        }),
        () => null
      );

      expect(viewModel.saveOrDiscard).toBeUndefined();
    });

    // test.skip('При внесении пользователем изменений кнопки показываются', () => {
    //   const viewModel = new EmailNotificationSettingsViewModel(
    //     emailNotificationSettingsState({
    //       originalSettings: emailNotificationSettings({
    //         isEnabledMarketingEmails: true,
    //       }),
    //       draftSettings: emailNotificationSettings({
    //         isEnabledMarketingEmails: false,
    //       }),
    //     }),
    //     () => null
    //   );

    //   // expect(viewModel.saveOrDiscard).toBeInstanceOf(SaveOrDiscardViewModel);
    // });
  });
});
