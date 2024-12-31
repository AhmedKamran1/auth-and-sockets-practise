import { Checkbox, styled } from '@mui/material';

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
