import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Components
import EmailForm from './form/email-form';
import PasswordForm from './form/password-form';

// Styles
import { Grid } from '@mui/material';
import { FormDivider } from '../UI';
import { SecondaryContainer } from '../UI';

const ResetPassword = () => {
  const router = useRouter();

  return (
    <SecondaryContainer container>
      <Grid item xs={12} md={5}>
        {router.query.token ? (
          <PasswordForm token={router.query.token}  />
        ) : (
          <EmailForm />
        )}
      </Grid>

      <FormDivider />

      <Grid item xs={0} md={6} sx={{ position: 'relative', height: '100%' }}>
        <Image
          src={'/assets/images/food.svg'}
          fill={true}
          sizes="100vw"
          alt="login-image"
        />
      </Grid>
    </SecondaryContainer>
  );
};

export default ResetPassword;
