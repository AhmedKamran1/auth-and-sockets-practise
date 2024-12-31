import { Divider, styled } from '@mui/material';

export const FormDivider = styled(Divider)(({ theme }) => ({
  width: '1px',
  height: '50%',
  backgroundColor: theme.palette.primary.main,
  margin: `0 ${theme.spacing(2)}`,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
