import { Button } from '@/components/ui/button';

export const SaveDiscardBar = () => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <Button variant="secondary">Discard</Button>
        <Button type="submit">Save</Button>
      </div>
    </>
  );
};
