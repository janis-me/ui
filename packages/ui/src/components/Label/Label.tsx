import clsx from 'clsx';
import { Label } from 'radix-ui';
import React from 'react';

import './Label.scss';

export const Root = React.forwardRef<React.ComponentRef<typeof Label.Root>, Label.LabelProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Label.Root className={clsx('themed-ui__label__root', className)} ref={forwardedRef} {...props}>
      {children}
    </Label.Root>
  ),
);
