import clsx from 'clsx';
import { Switch } from 'radix-ui';
import React from 'react';

import './Switch.scss';

export type SwitchProps = Switch.SwitchProps;
export type ThumbProps = Switch.SwitchThumbProps;

export const Root = React.forwardRef<React.ComponentRef<typeof Switch.Root>, SwitchProps>(({ className, children, ...props }, forwardedRef) => (
  <Switch.Root className={clsx('themed-ui__switch__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Switch.Root>
));

export const Thumb = React.forwardRef<React.ComponentRef<typeof Switch.Thumb>, ThumbProps>(({ className, children, ...props }, forwardedRef) => (
  <Switch.Thumb className={clsx('themed-ui__switch__thumb', className)} ref={forwardedRef} {...props}>
    {children}
  </Switch.Thumb>
));
