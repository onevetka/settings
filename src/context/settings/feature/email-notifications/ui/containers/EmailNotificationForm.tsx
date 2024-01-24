'use client';
import { SaveOrDiscard } from '@/context/settings/shared/save-or-discard/ui/components/SaveOrDiscard';
import { useEmailNotificationSettings } from '../../store/useEmailNotificationSettings';
import { LazyToDoSection } from './LazyToDoSection';
import { EmailNotificationSettings } from './EmailNotificationSettings';

export const EmailNotificationForm: React.FC = () => {
  const { viewModel } = useEmailNotificationSettings();

  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      <EmailNotificationSettings />
      <LazyToDoSection />
      {viewModel.saveOrDiscard && (
        <SaveOrDiscard viewModel={viewModel.saveOrDiscard} />
      )}
    </div>
  );
};
