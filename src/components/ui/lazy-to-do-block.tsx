import { cn } from '@/lib/utils';

function LazyToDoBlock({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-md bg-primary/10', className)} {...props} />
  );
}

export { LazyToDoBlock };
