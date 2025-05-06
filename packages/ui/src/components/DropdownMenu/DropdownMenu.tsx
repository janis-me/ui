import clsx from 'clsx';
import { DropdownMenu } from 'radix-ui';
import React from 'react';

import './DropdownMenu.scss';

export type DropdownProps = DropdownMenu.DropdownMenuProps;
export type TriggerProps = DropdownMenu.DropdownMenuTriggerProps;
export type ContentProps = DropdownMenu.DropdownMenuContentProps;
export type LabelProps = DropdownMenu.DropdownMenuLabelProps;
export type ItemProps = DropdownMenu.DropdownMenuItemProps;
export type GroupProps = DropdownMenu.DropdownMenuGroupProps;
export type CheckboxItemProps = DropdownMenu.DropdownMenuCheckboxItemProps;
export type ItemIndicatorProps = DropdownMenu.DropdownMenuItemIndicatorProps;
export type RadioGroupProps = DropdownMenu.DropdownMenuRadioGroupProps;
export type RadioItemProps = DropdownMenu.DropdownMenuRadioItemProps;
export type SubTriggerProps = DropdownMenu.DropdownMenuSubTriggerProps;
export type SubContentProps = DropdownMenu.DropdownMenuSubContentProps;
export type SeparatorProps = DropdownMenu.DropdownMenuSeparatorProps;
export type ArrowProps = DropdownMenu.DropdownMenuArrowProps;
export type PortalProps = DropdownMenu.DropdownMenuPortalProps;
export type SubProps = DropdownMenu.DropdownMenuSubProps;

export const Root = DropdownMenu.Root;
export const Portal = DropdownMenu.Portal;
export const Sub = DropdownMenu.Sub;

export const Trigger = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Trigger>, TriggerProps>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenu.Trigger className={clsx('themed-ui__dropdown-menu__trigger', className)} ref={forwardedRef} {...props}>
    {children}
  </DropdownMenu.Trigger>
));

export const Content = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Content>, ContentProps>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenu.Content className={clsx('themed-ui__dropdown-menu__content', className)} ref={forwardedRef} {...props}>
    {children}
  </DropdownMenu.Content>
));

export const Label = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Label>, LabelProps>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenu.Label className={clsx('themed-ui__dropdown-menu__label', className)} ref={forwardedRef} {...props}>
    {children}
  </DropdownMenu.Label>
));

export const Item = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Item>, ItemProps>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenu.Item className={clsx('themed-ui__dropdown-menu__item', className)} ref={forwardedRef} {...props}>
    {children}
  </DropdownMenu.Item>
));

export const Group = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Group>, GroupProps>(({ className, children, ...props }, forwardedRef) => (
  <DropdownMenu.Group className={clsx('themed-ui__dropdown-menu__group', className)} ref={forwardedRef} {...props}>
    {children}
  </DropdownMenu.Group>
));

export const CheckboxItem = React.forwardRef<React.ComponentRef<typeof DropdownMenu.CheckboxItem>, CheckboxItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.CheckboxItem className={clsx('themed-ui__dropdown-menu__checkbox-item', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.CheckboxItem>
  ),
);

export const ItemIndicator = React.forwardRef<React.ComponentRef<typeof DropdownMenu.ItemIndicator>, ItemIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.ItemIndicator className={clsx('themed-ui__dropdown-menu__item-indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.ItemIndicator>
  ),
);

export const RadioGroup = React.forwardRef<React.ComponentRef<typeof DropdownMenu.RadioGroup>, RadioGroupProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.RadioGroup className={clsx('themed-ui__dropdown-menu__radio-group', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.RadioGroup>
  ),
);

export const RadioItem = React.forwardRef<React.ComponentRef<typeof DropdownMenu.RadioItem>, RadioItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.RadioItem className={clsx('themed-ui__dropdown-menu__radio-item', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.RadioItem>
  ),
);

export const SubTrigger = React.forwardRef<React.ComponentRef<typeof DropdownMenu.SubTrigger>, SubTriggerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.SubTrigger className={clsx('themed-ui__dropdown-menu__sub-trigger', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.SubTrigger>
  ),
);

export const SubContent = React.forwardRef<React.ComponentRef<typeof DropdownMenu.SubContent>, SubContentProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.SubContent className={clsx('themed-ui__dropdown-menu__sub-content', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.SubContent>
  ),
);

export const Separator = React.forwardRef<React.ComponentRef<typeof DropdownMenu.Separator>, SeparatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DropdownMenu.Separator className={clsx('themed-ui__dropdown-menu__separator', className)} ref={forwardedRef} {...props}>
      {children}
    </DropdownMenu.Separator>
  ),
);

export function Arrow(props: ArrowProps) {
  return <DropdownMenu.Arrow className="themed-ui__dropdown-menu__arrow" {...props} />;
}
