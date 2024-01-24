'use client';
import { useEmailNotificationSettings } from '../../store/useEmailNotificationSettings';
import { SettingSwitch } from '../components/SettingSwitch';

export const EmailNotificationForm: React.FC = () => {
  const { viewModel } = useEmailNotificationSettings();

  return (
    <form onSubmit={() => null} className="w-full space-y-6">
      <div>
        <h3 className="mb-4 text-left text-lg font-medium">
          Email Notifications
        </h3>
        <div className="space-y-4">
          {viewModel.settings.map((setting) => (
            <SettingSwitch viewModel={setting} />
          ))}
        </div>
      </div>
    </form>
  );
};
