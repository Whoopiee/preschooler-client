import React from 'react';
import cn from 'classnames';
import Dropdown, { Option } from 'react-dropdown';
import styles from './DropDown.module.scss';

type Props = {
  options: string[];
  value: string;
  setValue: (newAge: string) => void;
  isBig?: boolean;
  placeholder: string;
};

export const DropDown: React.FC<Props> = ({
  options,
  value,
  setValue,
  placeholder,
  isBig = false,
}) => {
  return (
    <Dropdown
      className={styles.dropdown}
      controlClassName={cn(
        styles.dropdownControl,
        {
          [styles.dropdownControlBig]: isBig,
        },
      )}
      menuClassName={styles.dropdownMenu}
      arrowClassName={styles.dropDownArrow}
      options={options}
      onChange={(event: Option) => setValue(event.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};
