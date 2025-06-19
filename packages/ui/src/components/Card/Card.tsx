import clsx from 'clsx';
import React from 'react';

import './Card.scss';

export interface CardProps extends React.ComponentPropsWithRef<'div'> {}

export const Root = React.forwardRef<React.ComponentRef<React.ElementType<'card'>>, CardProps>(({ className, children, ...props }, forwardedRef) => {
  return (
    <div className={clsx('themed-ui__card__root', className)} ref={forwardedRef} {...props}>
      {children}
    </div>
  );
});
