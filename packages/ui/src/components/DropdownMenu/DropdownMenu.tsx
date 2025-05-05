import clsx from 'clsx';
import { DropdownMenu } from 'radix-ui';
import React from 'react';

import './DropdownMenu.scss';

export const Root = DropdownMenu.Root;
export const Portal = DropdownMenu.Portal;
export const Sub = DropdownMenu.Sub;

export const Trigger = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Trigger>, DropdownMenu.DropdownMenuTriggerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Trigger className={clsx('themed-ui__dropdown-menu__trigger', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Trigger>
  ),
);

export const Content = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Content>, DropdownMenu.DropdownMenuContentProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Content className={clsx('themed-ui__dropdown-menu__content', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Content>
  ),
);

export const Label = React.forwardRef<React.ComponentRef<typeof DropdownMenu.DropdownMenuLabel>, DropdownMenu.DropdownMenuLabelProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Label className={clsx('themed-ui__dropdown-menu__label', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Label>
  ),
);

export const Item = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Item>, DropdownMenu.DropdownMenuItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Item className={clsx('themed-ui__dropdown-menu__item', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Item>
  ),
);

export const Group = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Group>, DropdownMenu.DropdownMenuGroupProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Group className={clsx('themed-ui__dropdown-menu__group', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Group>
  ),
);

export const CheckboxItem = React.forwardRef<React.ComponentRef<typeof DropdownMenu.CheckboxItem>, DropdownMenu.DropdownMenuCheckboxItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.CheckboxItem className={clsx('themed-ui__dropdown-menu__checkbox-item', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.CheckboxItem>
  ),
);

export const ItemIndicator = React.forwardRef<React.ComponentRef<typeof DropdownMenu.ItemIndicator>, DropdownMenu.DropdownMenuItemIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.ItemIndicator className={clsx('themed-ui__dropdown-menu__item-indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.ItemIndicator>
  ),
);

export const RadioGroup = React.forwardRef<React.ComponentRef<typeof DropdownMenu.RadioGroup>, DropdownMenu.DropdownMenuRadioGroupProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.RadioGroup className={clsx('themed-ui__dropdown-menu__radio-group', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.RadioGroup>
  ),
);

export const RadioItem = React.forwardRef<React.ComponentRef<typeof DropdownMenu.RadioItem>, DropdownMenu.DropdownMenuRadioItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.RadioItem className={clsx('themed-ui__dropdown-menu__radio-item', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.RadioItem>
  ),
);

export const SubTrigger = React.forwardRef<React.ComponentRef<typeof DropdownMenu.SubTrigger>, DropdownMenu.DropdownMenuSubTriggerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.SubTrigger className={clsx('themed-ui__dropdown-menu__sub-trigger', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.SubTrigger>
  ),
);

export const SubContent = React.forwardRef<React.ComponentRef<typeof DropdownMenu.SubContent>, DropdownMenu.DropdownMenuSubContentProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.SubContent className={clsx('themed-ui__dropdown-menu__sub-content', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.SubContent>
  ),
);

export const Separator = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Separator>, DropdownMenu.DropdownMenuSeparatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Separator className={clsx('themed-ui__dropdown-menu__separator', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Separator>
  ),
);
