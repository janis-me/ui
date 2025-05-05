import clsx from 'clsx';
import { Progress } from 'radix-ui';
import React from 'react';

import './Progress.scss';

export const Root = React.forwardRef<React.ComponentRef<typeof Progress.Root>, Progress.ProgressProps>(({ className, children, ...props }, forwardedRef) => (
  <Progress.Root className={clsx('themed-ui__progress__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Progress.Root>
));

export const Indicator = React.forwardRef<React.ComponentRef<typeof Progress.Indicator>, Progress.ProgressIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Progress.Indicator className={clsx('themed-ui__progress__indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </Progress.Indicator>
  ),
);
