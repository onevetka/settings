import { SettingSwitchViewModel } from './SettingSwitchViewModel';
import { EmailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { SwitcherViewModel } from '@/core/view-model/SwitcherViewModel';
import { Dispatch } from 'react';
import { EmailNotificationSettingsEvent } from '../../store/EmailNotificationSettingsEvent';

export class EmailNotificationSettingsViewModel {
  settings: SettingSwitchViewModel[];
  // actionButtons: ButtonViewModel[];

  constructor(
    state: EmailNotificationSettingsState,
    dispatch: Dispatch<EmailNotificationSettingsEvent>
  ) {
    this.settings = [
      new SettingSwitchViewModel({
        title: 'Marketing emails',
        description: 'Receive emails about new products, features, and more.',
        switcher: new SwitcherViewModel({
          checked: state.draftSettings.isEnabledMarketingEmails,
          onCheckedChange: () =>
            dispatch({
              type: 'ToggleMarketingEmailsEvent',
            }),
        }),
      }),
      new SettingSwitchViewModel({
        title: 'Security emails',
        description: 'Receive emails about your account security.',
        switcher: new SwitcherViewModel({
          checked: state.draftSettings.isEnabledSecurityEmails,
          onCheckedChange: () =>
            dispatch({
              type: 'ToggleSecurityEmailsEvent',
            }),
        }),
      }),
    ];
  }
}
