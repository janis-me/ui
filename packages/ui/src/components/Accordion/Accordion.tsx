import clsx from 'clsx';
import { Accordion } from 'radix-ui';
import React from 'react';

import './Accordion.scss';

export type AccordionProps = Accordion.AccordionSingleProps | Accordion.AccordionMultipleProps;
export type ItemProps = Accordion.AccordionItemProps;
export type HeaderProps = Accordion.AccordionHeaderProps;
export type TriggerProps = Accordion.AccordionTriggerProps;
export type ContentProps = Accordion.AccordionContentProps;

export const Root = React.forwardRef<React.ComponentRef<typeof Accordion.Root>, AccordionProps>(({ className, children, ...props }, forwardedRef) => (
  <Accordion.Root className={clsx('themed-ui__accordion__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Accordion.Root>
));

export const Item = React.forwardRef<React.ComponentRef<typeof Accordion.Item>, ItemProps>(({ className, children, ...props }, forwardedRef) => (
  <Accordion.Item className={clsx('themed-ui__accordion__item', className)} ref={forwardedRef} {...props}>
    {children}
  </Accordion.Item>
));

export const Header = React.forwardRef<React.ComponentRef<typeof Accordion.Header>, HeaderProps>(({ className, children, ...props }, forwardedRef) => (
  <Accordion.Header className={clsx('themed-ui__accordion__header', className)} ref={forwardedRef} {...props}>
    {children}
  </Accordion.Header>
));

export const Trigger = React.forwardRef<React.ComponentRef<typeof Accordion.Trigger>, TriggerProps>(({ className, children, ...props }, forwardedRef) => (
  <Accordion.Trigger className={clsx('themed-ui__accordion__trigger', className)} ref={forwardedRef} {...props}>
    {children}
  </Accordion.Trigger>
));

export const Content = React.forwardRef<React.ComponentRef<typeof Accordion.Content>, ContentProps>(({ className, children, ...props }, forwardedRef) => (
  <Accordion.Content className={clsx('themed-ui__accordion__content', className)} ref={forwardedRef} {...props}>
    {children}
  </Accordion.Content>
));
