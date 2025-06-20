import clsx from 'clsx';
import { ToggleGroup } from 'radix-ui';
import React from 'react';

import './ToggleGroup.scss';

export type ToggleGroupProps = ToggleGroup.ToggleGroupMultipleProps | ToggleGroup.ToggleGroupSingleProps;
export type ItemProps = ToggleGroup.ToggleGroupItemProps;

export const Root = React.forwardRef<React.ComponentRef<typeof ToggleGroup.Root>, ToggleGroupProps>(({ className, children, ...props }, forwardedRef) => (
  <ToggleGroup.Root className={clsx('themed-ui__toggle-group__root', className)} ref={forwardedRef} {...props}>
    {children}
  </ToggleGroup.Root>
));

export const Item = React.forwardRef<React.ComponentRef<typeof ToggleGroup.Item>, ItemProps>(({ className, children, ...props }, forwardedRef) => (
  <ToggleGroup.Item className={clsx('themed-ui__toggle-group__item', className)} ref={forwardedRef} {...props}>
    {children}
  </ToggleGroup.Item>
));
