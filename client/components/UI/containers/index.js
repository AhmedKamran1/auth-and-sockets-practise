import { Grid, Box, styled } from '@mui/material';
import {
  DASHBOARD_DRAWER_FULLWIDTH,
  DASHBOARD_DRAWER_RESPONSIVEWIDTH,
  NAV_HEIGHT,
} from '@/utils/constants';

export const FlexContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const PageContainer = styled(Box)({
  marginTop: `${NAV_HEIGHT}px`,
  minHeight: `clamp(900px,100vh - ${NAV_HEIGHT}px,100vh - ${NAV_HEIGHT}px)`,
});

export const SecondaryContainer = styled(Grid)({
  height: `calc(100vh - ${NAV_HEIGHT}px)`,
  width: '90%',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SectionContainer = styled(SecondaryContainer)(({ theme }) => ({
  height: 'auto',
  marginTop: theme.spacing(16),
  marginBottom: theme.spacing(16),
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  maxWidth: '500px',
  margin: 'auto',
  gap: theme.spacing(2),
}));

export const DashboardContainer = styled(Grid)(({ theme }) => ({
  marginLeft: `calc(${DASHBOARD_DRAWER_FULLWIDTH}px)`,
  width: `calc(100% - ${DASHBOARD_DRAWER_FULLWIDTH}px)`,
  padding: `${theme.spacing(2)} ${theme.spacing(1)}`,

  [theme.breakpoints.down('md')]: {
    marginLeft: `calc(${DASHBOARD_DRAWER_RESPONSIVEWIDTH}px)`,
    width: `calc(100vw - ${DASHBOARD_DRAWER_RESPONSIVEWIDTH}px)`,
  },
}));

export const DashboardContent = styled(Box)(({ theme }) => ({
  borderRadius: '5px',
  boxShadow: '0px 0px 10px 1px lightgrey',
  padding: `${theme.spacing(2)} ${theme.spacing(3)} `,

  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(1)} `,
  },
}));

export const PageContent = styled(DashboardContent)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(4)} `,
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  // maxWidth: '400px',
  margin: 'auto',
  backgroundColor: theme.palette.text.primary,
  position: 'sticky',
  marginTop: -25,
  top: 250,
  borderRadius: '10px',
  padding: theme.spacing(2),
  boxShadow: '1px 1px 8px #888888',

  [theme.breakpoints.down('lg')]: {
    marginTop: 0,
    position: 'relative',
    top: -75,
  },
}));
