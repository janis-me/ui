import clsx from 'clsx';
import React from 'react';

import './Button.scss';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  primary?: boolean | undefined;
  secondary?: boolean | undefined;
  info?: boolean | undefined;
  success?: boolean | undefined;
  warning?: boolean | undefined;
  error?: boolean | undefined;
  round?: boolean | undefined;
  small?: boolean | undefined;
  large?: boolean | undefined;
}

export const Root = React.forwardRef<React.ComponentRef<React.ElementType<'button'>>, ButtonProps>(
  ({ className, children, primary, secondary, info, success, warning, error, round, large, small, ...props }, forwardedRef) => {
    const _primary = primary || (!secondary && !info && !success && !warning && !error);
    const _secondary = secondary;
    const _info = info;
    const _success = success;
    const _warning = warning;
    const _error = error;
    const _round = round;
    const _small = small;
    const _large = large && !small;

    return (
      <button
        className={clsx(
          'themed-ui__button__root',
          {
            'themed-ui__button--primary': _primary,
            'themed-ui__button--secondary': _secondary,
            'themed-ui__button--info': _info,
            'themed-ui__button--success': _success,
            'themed-ui__button--warning': _warning,
            'themed-ui__button--error': _error,
            'themed-ui__button--round': _round,
            'themed-ui__button--small': _small,
            'themed-ui__button--large': _large,
          },
          className,
        )}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </button>
    );
  },
);
