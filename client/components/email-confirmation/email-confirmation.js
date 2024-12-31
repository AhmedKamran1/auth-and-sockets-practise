import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Styles
import { Grid } from '@mui/material';
import { SecondaryContainer, Text } from '../UI';

const EmailConfirmation = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <SecondaryContainer container sx={{ height: 'auto' }}>
      <Grid item xs={12} sx={{ position: 'relative', height: '350px' }}>
        <Image
          src={'/assets/images/food.svg'}
          fill={true}
          sizes="100vw"
          alt="login-image"
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mb: 2 }}>
        <Text variant="header">Email Verification Sent</Text>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'center', wordSpacing: 3 }}>
        <Text variant="subHeader">
          Welcome to DineEase. We have sent email to
          <Text variant="subHeader" fontWeight={800}>
            &nbsp;{email}&nbsp;
          </Text>
          , to complete the registration process, please verify your email address.
        </Text>
      </Grid>
    </SecondaryContainer>
  );
};

export default EmailConfirmation;
