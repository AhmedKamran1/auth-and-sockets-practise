import React from 'react';
import Image from 'next/image';

import { resendConfirmation } from '@/services';

// Styles
import { Modal } from '@mui/material';
import { ModalCancelIcon, PrimaryButton, Text } from '@/components/UI';
import * as Styles from './resend-modal.styles';

// Snackbar
import { enqueueSnackbar } from 'notistack';
import { getError } from '@/helpers/snackbarHelpers';

// Icons
import CloseIcon from '@mui/icons-material/Close';

const ResendModal = ({ showModal, handleShowModal, email }) => {
  const resendVerificationHandler = async () => {
    try {
      const res = await resendConfirmation(email);
      enqueueSnackbar({ variant: 'success', message: res.data });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    } finally {
      handleShowModal();
    }
  };

  return (
    <Modal open={showModal} onClose={handleShowModal}>
      <Styles.ModalContainer>
        <ModalCancelIcon onClick={handleShowModal}>
          <CloseIcon color="secondary" fontSize="medium" />
        </ModalCancelIcon>
        <Image
          src={'/assets/images/food.svg'}
          height={220}
          width={500}
          alt="login-image"
        />
        <Text variant="main" textAlign="center">
          Oopsie! Your Account is unverified please click the button below to resend
          verification at&nbsp;
          <Text variant="main" fontWeight={800}>
            {email}
          </Text>
        </Text>
        <PrimaryButton sx={{ mt: 4 }} onClick={resendVerificationHandler}>
          <Text variant="body">Resend Link</Text>
        </PrimaryButton>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default ResendModal;
