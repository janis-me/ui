import clsx from 'clsx';
import { Checkbox } from 'radix-ui';
import React from 'react';

import './Checkbox.scss';

export const Root = React.forwardRef<React.ComponentRef<typeof Checkbox.Root>, Checkbox.CheckboxProps>(({ className, children, ...props }, forwardedRef) => (
  <Checkbox.Root className={clsx('themed-ui__checkbox__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Checkbox.Root>
));

export const Indicator = React.forwardRef<React.ComponentRef<typeof Checkbox.Indicator>, Checkbox.CheckboxIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Checkbox.Indicator className={clsx('themed-ui__checkbox__indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </Checkbox.Indicator>
  ),
);
