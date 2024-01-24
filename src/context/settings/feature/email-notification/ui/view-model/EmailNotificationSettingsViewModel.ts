import { SettingSwitchViewModel } from './SettingSwitchViewModel';
import { EmailNotificationSettingsState } from '../../store/EmailNotificationSettingsState';
import { SwitcherViewModel } from '@/core/view-model/SwitcherViewModel';
import { Dispatch } from 'react';
import { EmailNotificationSettingsEvent } from '../../store/EmailNotificationSettingsEvent';
import { SaveOrDiscardViewModel } from '@/context/settings/shared/save-or-discard/ui/view-model/SaveOrDiscardViewModel';
import { isEqual } from 'lodash';
import { ButtonViewModel } from '@/core/view-model/ButtonViewModel';

export class EmailNotificationSettingsViewModel {
  settings: SettingSwitchViewModel[];
  saveOrDiscard: SaveOrDiscardViewModel | undefined;

  constructor(
    state: EmailNotificationSettingsState,
    dispatch: Dispatch<EmailNotificationSettingsEvent>
  ) {
    const { draftSettings, originalSettings } = state;

    this.settings = [
      new SettingSwitchViewModel({
        title: 'Marketing emails',
        description: 'Receive emails about new products, features, and more.',
        switcher: new SwitcherViewModel({
          checked: draftSettings.isEnabledMarketingEmails,
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
          checked: draftSettings.isEnabledSecurityEmails,
          onCheckedChange: () =>
            dispatch({
              type: 'ToggleSecurityEmailsEvent',
            }),
        }),
      }),
    ];

    this.saveOrDiscard = isEqual(draftSettings, originalSettings)
      ? undefined
      : new SaveOrDiscardViewModel({
          save: new ButtonViewModel({
            label: 'Save',
            onClick: () => null,
          }),
          discard: new ButtonViewModel({
            label: 'Discard',
            onClick: () => null,
          }),
        });
  }
}
