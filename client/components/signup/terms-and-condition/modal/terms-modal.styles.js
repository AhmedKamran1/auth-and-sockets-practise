import { PrimaryButton } from '@/components/UI';
import { IconButton, styled } from '@mui/material';

export const AcceptButton = styled(PrimaryButton)(({ theme }) => ({
  margin: `${theme.spacing(1)} auto`,
  width: '200px',
  padding: theme.spacing(1),
}));

export const CancelIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
}));
