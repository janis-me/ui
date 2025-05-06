import clsx from 'clsx';
import { Progress } from 'radix-ui';
import React from 'react';

import './Progress.scss';

export type ProgressProps = Progress.ProgressProps;
export type IndicatorProps = Progress.ProgressIndicatorProps;

export const Root = React.forwardRef<React.ComponentRef<typeof Progress.Root>, ProgressProps>(({ className, children, ...props }, forwardedRef) => (
  <Progress.Root className={clsx('themed-ui__progress__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Progress.Root>
));

export const Indicator = React.forwardRef<React.ComponentRef<typeof Progress.Indicator>, IndicatorProps>(({ className, children, ...props }, forwardedRef) => (
  <Progress.Indicator className={clsx('themed-ui__progress__indicator', className)} ref={forwardedRef} {...props}>
    {children}
  </Progress.Indicator>
));
