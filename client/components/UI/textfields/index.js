import { TextField, styled } from "@mui/material";
import { baseFontSizes } from "../typography/font-sizes";

export const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    color: theme.palette.static.secondary,
  },

  "& .MuiFormHelperText-root": {
    fontSize: baseFontSizes.sub.default,
    margin: 0,
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
}));
