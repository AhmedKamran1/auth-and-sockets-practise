const theme = (mode) => {
  const primaryPalette = {
    main: '#e3ab57',
  };

  const secondaryPalette = {
    main: '#f0932b',
  };

  const errorPalette = {
    main: '#ff7675',
  };

  const progressPalette = {
    main: '#2E6BF6',
  };

  const staticColorPalette = {
    primary: '#fafafa',
    secondary: '#333333',
    ternary: 'rgba(180, 180, 180)',
  };

  return {
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 960, // Medium devices (tablets)
        lg: 1280, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },

    typography: {
      fontFamily: 'inherit',
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: primaryPalette,
            secondary: secondaryPalette,
            text: {
              primary: staticColorPalette.primary,
              secondary: staticColorPalette.secondary,
              ternary: staticColorPalette.ternary,
            },
            static: staticColorPalette,
            error: errorPalette,
            progressbar: progressPalette,
          }
        : {
            primary: primaryPalette,
            secondary: secondaryPalette,
            text: {
              primary: staticColorPalette.primary,
              secondary: staticColorPalette.secondary,
            },
            static: staticColorPalette,
            error: errorPalette,
            progressbar: progressPalette,
          }),
    },
  };
};

export default theme;
