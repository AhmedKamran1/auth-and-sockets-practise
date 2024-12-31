import { ModalContent } from '@/components/UI';
import { styled } from '@mui/material';

export const ModalContainer = styled(ModalContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '450px',
  width: '35vw',
  minWidth: '300px',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.text.primary,
}));
