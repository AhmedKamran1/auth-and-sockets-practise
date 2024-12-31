import { Select, styled } from '@mui/material';

export const SelectField = styled(Select)(({ theme }) => ({
  color: theme.palette.static.secondary,
  '& .MuiSelect-icon': {
    color: theme.palette.primary.main,
  },

  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
}));
