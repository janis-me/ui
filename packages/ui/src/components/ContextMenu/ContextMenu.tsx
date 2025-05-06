import clsx from 'clsx';
import { ContextMenu } from 'radix-ui';
import React from 'react';

import './ContextMenu.scss';

export type ContextMenuProps = ContextMenu.ContextMenuProps;
export type TriggerProps = ContextMenu.ContextMenuTriggerProps;
export type ContentProps = ContextMenu.ContextMenuContentProps;
export type LabelProps = ContextMenu.ContextMenuLabelProps;
export type ItemProps = ContextMenu.ContextMenuItemProps;
export type GroupProps = ContextMenu.ContextMenuGroupProps;
export type CheckboxItemProps = ContextMenu.ContextMenuCheckboxItemProps;
export type ItemIndicatorProps = ContextMenu.ContextMenuItemIndicatorProps;
export type RadioGroupProps = ContextMenu.ContextMenuRadioGroupProps;
export type RadioItemProps = ContextMenu.ContextMenuRadioItemProps;
export type SubTriggerProps = ContextMenu.ContextMenuSubTriggerProps;
export type SubContentProps = ContextMenu.ContextMenuSubContentProps;
export type SeparatorProps = ContextMenu.ContextMenuSeparatorProps;
export type ArrowProps = ContextMenu.ContextMenuArrowProps;
export type PortalProps = ContextMenu.ContextMenuPortalProps;
export type SubProps = ContextMenu.ContextMenuSubProps;

export const Root = ContextMenu.Root;
export const Portal = ContextMenu.Portal;
export const Sub = ContextMenu.Sub;

export const Trigger = React.forwardRef<React.ComponentRef<typeof ContextMenu.Trigger>, TriggerProps>(({ className, children, ...props }, forwardedRef) => (
  <ContextMenu.Trigger className={clsx('themed-ui__context-menu__trigger', className)} ref={forwardedRef} {...props}>
    {children}
  </ContextMenu.Trigger>
));

export const Content = React.forwardRef<React.ComponentRef<typeof ContextMenu.Content>, ContentProps>(({ className, children, ...props }, forwardedRef) => (
  <ContextMenu.Content className={clsx('themed-ui__context-menu__content', className)} ref={forwardedRef} {...props}>
    {children}
  </ContextMenu.Content>
));

export const Label = React.forwardRef<React.ComponentRef<typeof ContextMenu.Label>, LabelProps>(({ className, children, ...props }, forwardedRef) => (
  <ContextMenu.Label className={clsx('themed-ui__context-menu__label', className)} ref={forwardedRef} {...props}>
    {children}
  </ContextMenu.Label>
));

export const Item = React.forwardRef<React.ComponentRef<typeof ContextMenu.Item>, ItemProps>(({ className, children, ...props }, forwardedRef) => (
  <ContextMenu.Item className={clsx('themed-ui__context-menu__item', className)} ref={forwardedRef} {...props}>
    {children}
  </ContextMenu.Item>
));

export const Group = React.forwardRef<React.ComponentRef<typeof ContextMenu.Group>, GroupProps>(({ className, children, ...props }, forwardedRef) => (
  <ContextMenu.Group className={clsx('themed-ui__context-menu__group', className)} ref={forwardedRef} {...props}>
    {children}
  </ContextMenu.Group>
));

export const CheckboxItem = React.forwardRef<React.ComponentRef<typeof ContextMenu.CheckboxItem>, CheckboxItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.CheckboxItem className={clsx('themed-ui__context-menu__checkbox-item', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.CheckboxItem>
  ),
);

export const ItemIndicator = React.forwardRef<React.ComponentRef<typeof ContextMenu.ItemIndicator>, ItemIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.ItemIndicator className={clsx('themed-ui__context-menu__item-indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.ItemIndicator>
  ),
);

export const RadioGroup = React.forwardRef<React.ComponentRef<typeof ContextMenu.RadioGroup>, RadioGroupProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.RadioGroup className={clsx('themed-ui__context-menu__radio-group', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.RadioGroup>
  ),
);

export const RadioItem = React.forwardRef<React.ComponentRef<typeof ContextMenu.RadioItem>, RadioItemProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.RadioItem className={clsx('themed-ui__context-menu__radio-item', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.RadioItem>
  ),
);

export const SubTrigger = React.forwardRef<React.ComponentRef<typeof ContextMenu.SubTrigger>, SubTriggerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.SubTrigger className={clsx('themed-ui__context-menu__sub-trigger', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.SubTrigger>
  ),
);

export const SubContent = React.forwardRef<React.ComponentRef<typeof ContextMenu.SubContent>, SubContentProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.SubContent className={clsx('themed-ui__context-menu__sub-content', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.SubContent>
  ),
);

export const Separator = React.forwardRef<React.ComponentRef<typeof ContextMenu.Separator>, SeparatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContextMenu.Separator className={clsx('themed-ui__context-menu__separator', className)} ref={forwardedRef} {...props}>
      {children}
    </ContextMenu.Separator>
  ),
);
