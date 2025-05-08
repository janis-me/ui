import clsx from 'clsx';
import { Checkbox } from 'radix-ui';
import React from 'react';

import './Checkbox.scss';

export type CheckboxProps = Checkbox.CheckboxProps;
export type IndicatorProps = Checkbox.CheckboxIndicatorProps;

export const Root = React.forwardRef<React.ComponentRef<typeof Checkbox.Root>, CheckboxProps>(({ className, children, ...props }, forwardedRef) => (
  <Checkbox.Root className={clsx('themed-ui__checkbox__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Checkbox.Root>
));

export const Indicator = React.forwardRef<React.ComponentRef<typeof Checkbox.Indicator>, IndicatorProps>(({ className, children, ...props }, forwardedRef) => (
  <Checkbox.Indicator className={clsx('themed-ui__checkbox__indicator', className)} ref={forwardedRef} {...props}>
    {children}
  </Checkbox.Indicator>
));
