import clsx from 'clsx';
import React from 'react';

import './Button.scss';

export type ButtonProps = React.ComponentPropsWithRef<'button'>;

export const Root = React.forwardRef<React.ComponentRef<React.ElementType<'button'>>, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <button className={clsx('themed-ui__button__root', className)} ref={forwardedRef} {...props}>
      {children}
    </button>
  ),
);
