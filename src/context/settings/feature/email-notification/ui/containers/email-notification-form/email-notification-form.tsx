'use client';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export const EmailNotificationForm: React.FC = () => {
  return (
    <form onSubmit={() => null} className="w-full space-y-6">
      <div>
        <h3 className="mb-4 text-left text-lg font-medium">
          Email Notifications
        </h3>
        <div className="space-y-4">
          <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-0.5">
              <div className="text-left">Marketing emails</div>
              <div>Receive emails about new products, features, and more.</div>
            </div>
            <Switch checked={false} onCheckedChange={() => null} />
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-0.5">
              <div className="text-left">Security emails</div>
              <div>Receive emails about your account security.</div>
            </div>
            <Switch
              checked={true}
              onCheckedChange={() => null}
              disabled
              aria-readonly
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="secondary" type="submit">
          Discard
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};
