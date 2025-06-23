import clsx from 'clsx';
import { Select } from 'radix-ui';
import React from 'react';

import './Select.scss';

export type SelectProps = Select.SelectProps;
export type ValueProps = Select.SelectValueProps;
export type IconProps = Select.SelectIconProps;
export type TriggerProps = Select.SelectTriggerProps;
export type ContentProps = Select.SelectContentProps;
export type LabelProps = Select.SelectLabelProps;
export type ItemProps = Select.SelectItemProps;
export type ItemTextProps = Select.SelectItemTextProps;
export type GroupProps = Select.SelectGroupProps;
export type ItemIndicatorProps = Select.SelectItemIndicatorProps;
export type SeparatorProps = Select.SelectSeparatorProps;
export type ArrowProps = Select.SelectArrowProps;
export type PortalProps = Select.SelectPortalProps;
export type ViewportProps = Select.SelectViewportProps;
export type ScrollUpButtonProps = Select.SelectScrollUpButtonProps;
export type ScrollDownButtonProps = Select.SelectScrollDownButtonProps;

export const Root = Select.Root;
export const Portal = Select.Portal;

export const Trigger = React.forwardRef<React.ComponentRef<typeof Select.Trigger>, TriggerProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Trigger className={clsx('themed-ui__select__trigger', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Trigger>
));

export const Value = React.forwardRef<React.ComponentRef<typeof Select.Value>, ValueProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Value className={clsx('themed-ui__select__value', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Value>
));

export const Icon = React.forwardRef<React.ComponentRef<typeof Select.Icon>, IconProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Icon className={clsx('themed-ui__select__icon', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Icon>
));

export const Content = React.forwardRef<React.ComponentRef<typeof Select.Content>, ContentProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Content className={clsx('themed-ui__select__content', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Content>
));

export const Label = React.forwardRef<React.ComponentRef<typeof Select.Label>, LabelProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Label className={clsx('themed-ui__select__label', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Label>
));

export const Item = React.forwardRef<React.ComponentRef<typeof Select.Item>, ItemProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Item className={clsx('themed-ui__select__item', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Item>
));

export const ItemText = React.forwardRef<React.ComponentRef<typeof Select.ItemText>, ItemTextProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.ItemText className={clsx('themed-ui__select__item-text', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.ItemText>
));

export const Group = React.forwardRef<React.ComponentRef<typeof Select.Group>, GroupProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Group className={clsx('themed-ui__select__group', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Group>
));

export const ItemIndicator = React.forwardRef<React.ComponentRef<typeof Select.ItemIndicator>, ItemIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Select.ItemIndicator className={clsx('themed-ui__select__item-indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </Select.ItemIndicator>
  ),
);

export const Separator = React.forwardRef<React.ComponentRef<typeof Select.Separator>, SeparatorProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Separator className={clsx('themed-ui__select__separator', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Separator>
));

export const Viewport = React.forwardRef<React.ComponentRef<typeof Select.Viewport>, ViewportProps>(({ className, children, ...props }, forwardedRef) => (
  <Select.Viewport className={clsx('themed-ui__select__viewport', className)} ref={forwardedRef} {...props}>
    {children}
  </Select.Viewport>
));

export const ScrollUpButton = React.forwardRef<React.ComponentRef<typeof Select.ScrollUpButton>, ScrollUpButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Select.ScrollUpButton className={clsx('themed-ui__select__scroll-button', className)} ref={forwardedRef} {...props}>
      {children}
    </Select.ScrollUpButton>
  ),
);

export const ScrollDownButton = React.forwardRef<React.ComponentRef<typeof Select.ScrollDownButton>, ScrollDownButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Select.ScrollDownButton className={clsx('themed-ui__select__scroll-button', className)} ref={forwardedRef} {...props}>
      {children}
    </Select.ScrollDownButton>
  ),
);
