import {
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';

import {
  DASHBOARD_DRAWER_FULLWIDTH,
  DASHBOARD_DRAWER_RESPONSIVEWIDTH,
  NAV_HEIGHT,
} from '@/utils/constants';

export const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    color: 'black',
    width: `${DASHBOARD_DRAWER_FULLWIDTH}px`,
    zIndex: 500,
    position: 'fixed',
    marginTop: `${NAV_HEIGHT}px`,
    height: `calc(100% - ${NAV_HEIGHT}px)`,
    boxShadow: '2px 0px 10px lightgrey',
    overflowX: 'hidden',
  },

  [theme.breakpoints.down('md')]: {
    '& .MuiDrawer-paper': {
      width: open ? `60vw` : `${DASHBOARD_DRAWER_RESPONSIVEWIDTH}px`,
      transition: 'all 0.5s',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiDrawer-paper': {
      width: open ? `70vw` : `${DASHBOARD_DRAWER_RESPONSIVEWIDTH}px`,
    },
  },
}));

export const DrawerIcon = styled(IconButton)(({ theme, open }) => ({
  marginLeft: open && 'auto',
  marginRight: open && `${theme.spacing(2)}`,
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const DrawerListText = styled(ListItemText)(({ theme, open }) => ({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

export const DrawerListItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingBottom: 0,
    paddingTop: theme.spacing(0.25),
  },
}));

export const DrawerListButton = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: `${theme.spacing(5)}`,
  borderRadius: '15px',
  height: '45px',

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.static.primary,
    '& .MuiListItemIcon-root': {
      color: theme.palette.static.primary,
    },
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.static.primary,
    '& .MuiListItemIcon-root': {
      color: theme.palette.static.primary,
    },
  },

  '&.Mui-selected:hover': { backgroundColor: theme.palette.secondary.main },

  [theme.breakpoints.down('md')]: {
    paddingLeft: `${theme.spacing(1)}`,
  },
}));
