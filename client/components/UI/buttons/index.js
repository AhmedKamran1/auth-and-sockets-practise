import { Button, styled } from '@mui/material';

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
}));

PrimaryButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export const FormButton = styled(PrimaryButton)(({ theme }) => ({
  width: '50%',
  margin: 'auto',
}));

export const PaddedButton = styled(PrimaryButton)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  borderRadius: '30px',
  textTransform: 'none',
}));
