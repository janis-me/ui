import clsx from 'clsx';
import { Slider } from 'radix-ui';
import React from 'react';

import './Slider.scss';

export type SliderProps = Slider.SliderProps;
export type ThumbProps = Slider.SliderThumbProps;
export type TrackProps = Slider.SliderTrackProps;
export type RangeProps = Slider.SliderRangeProps;

export const Root = React.forwardRef<React.ComponentRef<typeof Slider.Root>, SliderProps>(({ className, children, ...props }, forwardedRef) => (
  <Slider.Root className={clsx('themed-ui__slider__root', className)} ref={forwardedRef} {...props}>
    {children}
  </Slider.Root>
));

export const Thumb = React.forwardRef<React.ComponentRef<typeof Slider.Thumb>, ThumbProps>(({ className, children, ...props }, forwardedRef) => (
  <Slider.Thumb className={clsx('themed-ui__slider__thumb', className)} ref={forwardedRef} {...props}>
    {children}
  </Slider.Thumb>
));

export const Track = React.forwardRef<React.ComponentRef<typeof Slider.Track>, TrackProps>(({ className, children, ...props }, forwardedRef) => (
  <Slider.Track className={clsx('themed-ui__slider__track', className)} ref={forwardedRef} {...props}>
    {children}
  </Slider.Track>
));

export const Range = React.forwardRef<React.ComponentRef<typeof Slider.Range>, RangeProps>(({ className, children, ...props }, forwardedRef) => (
  <Slider.Range className={clsx('themed-ui__slider__range', className)} ref={forwardedRef} {...props}>
    {children}
  </Slider.Range>
));
