import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface FormValuesProps<FieldType> {
  loading: boolean;
  defaultValues?: FieldType;
  errorMessage?: string;
  onSubmit: (formValue: FieldType) => void;
}

export interface IMenu {
  key: string;
  label?: string;
  icon?: ReactNode;
  src?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  showDot?: boolean;
  count?: number;
}
