import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-accent text-primary hover:bg-accent-light shadow-lg hover:shadow-2xl hover:-translate-y-1',

  secondary:
    'bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-2xl hover:-translate-y-1',

  outline:
    'border-2 border-accent text-accent hover:bg-accent hover:text-primary hover:-translate-y-1',

  ghost:
    'text-primary hover:bg-primary/5',

  white:
    'bg-white text-primary hover:bg-white/90 shadow-lg hover:-translate-y-1',
};

const sizes = {
  sm: 'h-10 px-4',
  md: 'h-12 px-6',
  lg: 'h-14 px-8',
};

export const Button = forwardRef(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          `
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          font-semibold
          transition-all
          duration-300
          ease-out
          `,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';