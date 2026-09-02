import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('ui-button', {
  variants: { variant: { outline: 'ui-button-outline', solid: 'ui-button-solid' } },
  defaultVariants: { variant: 'solid' },
});

export function Button({ className, variant, ...props }) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
