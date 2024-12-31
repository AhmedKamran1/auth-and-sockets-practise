import React, { forwardRef } from 'react';
import { StyledPhoneInput } from '@/components/UI';

export const PhoneInputCustom = forwardRef(function NumericFormatCustom(props, ref) {
  const { onChange, onBlur, ...other } = props;

  return (
    <StyledPhoneInput
      {...other}
      containerClass={`react-phone-number`}
      onChange={onChange}
      onBlur={() => onBlur({ target: { name: other.name } })}
      inputProps={{ ref: ref }}
    />
  );
});
