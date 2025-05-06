import clsx from 'clsx';
import React from 'react';

import './Button.scss';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  primary?: boolean | undefined;
  secondary?: boolean | undefined;
  error?: boolean | undefined;
  small?: boolean | undefined;
  large?: boolean | undefined;
}

export const Root = React.forwardRef<React.ComponentRef<React.ElementType<'button'>>, ButtonProps>(
  ({ className, children, primary = true, secondary, error, large, small, ...props }, forwardedRef) => {
    const _primary = !secondary || (primary && !secondary);
    const _secondary = secondary;
    const _error = error;
    const _small = small;
    const _large = large && !small;

    return (
      <button
        className={clsx(
          'themed-ui__button__root',
          {
            'themed-ui__button__primary': _primary,
            'themed-ui__button__secondary': _secondary,
            'themed-ui__button__error': _error,
            'themed-ui__button__small': _small,
            'themed-ui__button__large': _large,
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
