import { InputType } from 'storybook/internal/types';

export const variantArgType = {
  control: 'radio',
  options: ['destructive', 'outline', 'secondary', 'ghost', 'link', 'default'],
} as InputType;

export const sizeArgType = {
  control: 'radio',
  options: ['default', 'sm', 'lg', 'icon'],
} as InputType;
