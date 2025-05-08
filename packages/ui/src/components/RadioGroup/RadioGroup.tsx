import clsx from 'clsx';
import { RadioGroup } from 'radix-ui';
import React from 'react';

import './RadioGroup.scss';

export type RadioGroupProps = RadioGroup.RadioGroupProps;
export type RadioGroupItemProps = RadioGroup.RadioGroupItemProps;
export type RadioGroupIndicatorProps = RadioGroup.RadioGroupIndicatorProps;

export const Root = React.forwardRef<React.ComponentRef<typeof RadioGroup.Root>, RadioGroupProps>(({ className, children, ...props }, forwardedRef) => (
  <RadioGroup.Root className={clsx('themed-ui__radio-group__root', className)} ref={forwardedRef} {...props}>
    {children}
  </RadioGroup.Root>
));

export const Item = React.forwardRef<React.ComponentRef<typeof RadioGroup.Item>, RadioGroupItemProps>(({ className, children, ...props }, forwardedRef) => (
  <RadioGroup.Item className={clsx('themed-ui__radio-group__item', className)} ref={forwardedRef} {...props}>
    {children}
  </RadioGroup.Item>
));

export const Indicator = React.forwardRef<React.ComponentRef<typeof RadioGroup.Indicator>, RadioGroupIndicatorProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <RadioGroup.Indicator className={clsx('themed-ui__radio-group__indicator', className)} ref={forwardedRef} {...props}>
      {children}
    </RadioGroup.Indicator>
  ),
);
