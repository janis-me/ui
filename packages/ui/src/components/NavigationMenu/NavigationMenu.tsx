import clsx from 'clsx';
import { NavigationMenu } from 'radix-ui';
import React from 'react';

export type NavigationMenuProps = NavigationMenu.NavigationMenuProps;
export type ListProps = NavigationMenu.NavigationMenuListProps;
export type ItemProps = NavigationMenu.NavigationMenuItemProps;
export type TriggerProps = NavigationMenu.NavigationMenuTriggerProps;
export type ContentProps = NavigationMenu.NavigationMenuContentProps;
export type LinkProps = NavigationMenu.NavigationMenuLinkProps;
export type ViewportProps = NavigationMenu.NavigationMenuViewportProps;
export type IndicatorProps = NavigationMenu.NavigationMenuIndicatorProps;

export const Sub = NavigationMenu.Sub;

export const Root = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Root>, NavigationMenuProps>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Root className={clsx('themed-ui__navigation-menu__root', className)} ref={forwardedRef} {...props}>
    {children}
  </NavigationMenu.Root>
));

export const List = React.forwardRef<React.ComponentRef<typeof NavigationMenu.List>, ListProps>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.List className={clsx('themed-ui__navigation-menu__list', className)} ref={forwardedRef} {...props}>
    {children}
  </NavigationMenu.List>
));

export const Item = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Item>, ItemProps>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Item className={clsx('themed-ui__navigation-menu__item', className)} ref={forwardedRef} {...props}>
    {children}
  </NavigationMenu.Item>
));

export const Trigger = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Trigger>, TriggerProps>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Trigger className={clsx('themed-ui__navigation-menu__trigger', className)} ref={forwardedRef} {...props}>
    {children}
  </NavigationMenu.Trigger>
));

export const Content = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Content>, ContentProps>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Content className={clsx('themed-ui__navigation-menu__content', className)} ref={forwardedRef} {...props}>
    {children}
  </NavigationMenu.Content>
));

export const Link = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Link>, LinkProps>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenu.Link className={clsx('themed-ui__navigation-menu__link', className)} ref={forwardedRef} {...props}>
    {children}
  </NavigationMenu.Link>
));

export const Viewport = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Viewport>, ViewportProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <NavigationMenu.Viewport className={clsx('themed-ui__navigation-menu__viewport', className)} ref={forwardedRef} {...props}>
      {children}
    </NavigationMenu.Viewport>
  ),
);

export const Indicator = React.forwardRef<React.ComponentRef<typeof NavigationMenu.Indicator>, IndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <NavigationMenu.Indicator className={clsx('themed-ui__navigation-menu__indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </NavigationMenu.Indicator>
  ),
);
