import classnames from 'classnames';
import { ComponentPropsWithRef, FC } from 'react';

import styles from './Button.module.css';

type ButtonVariant = 'contained' | 'outlined';
interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  isLoading = false,
  ...props
}) => {
  const classes = classnames(styles.button, styles[variant]);

  return (
    <button className={classes} disabled={isLoading} {...props}>
      {!isLoading && children}
      {isLoading && <div className={styles['dot-flashing']} />}
    </button>
  );
};
