import clsx from 'clsx';
import { Progress } from 'radix-ui';
import React from 'react';

import './Progress.scss';

export interface ProgressProps extends Progress.ProgressProps {
  primary?: boolean | undefined;
  secondary?: boolean | undefined;
  info?: boolean | undefined;
  success?: boolean | undefined;
  warning?: boolean | undefined;
  error?: boolean | undefined;
}
export type IndicatorProps = Progress.ProgressIndicatorProps;

export const Root = React.forwardRef<React.ComponentRef<typeof Progress.Root>, ProgressProps>(
  ({ className, children, primary = true, secondary, info, success, warning, error, ...props }, forwardedRef) => {
    const _primary = !secondary || (primary && !secondary);
    const _secondary = secondary;
    const _info = info;
    const _success = success;
    const _warning = warning;
    const _error = error;

    return (
      <Progress.Root
        className={clsx(
          'themed-ui__progress__root',
          {
            'themed-ui__progress--primary': _primary,
            'themed-ui__progress--secondary': _secondary,
            'themed-ui__progress--info': _info,
            'themed-ui__progress--success': _success,
            'themed-ui__progress--warning': _warning,
            'themed-ui__progress--error': _error,
          },
          className,
        )}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </Progress.Root>
    );
  },
);

export const Indicator = React.forwardRef<React.ComponentRef<typeof Progress.Indicator>, IndicatorProps>(({ className, children, ...props }, forwardedRef) => (
  <Progress.Indicator className={clsx('themed-ui__progress__indicator', className)} ref={forwardedRef} {...props}>
    {children}
  </Progress.Indicator>
));
