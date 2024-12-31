import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

// Services
import { updatePassword } from "@/services";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Utils
import { passwordResetSchema } from "@/utils/validation-schema/auth";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Styles
import { IconButton, InputAdornment } from "@mui/material";
import { Text, InputField, FormContainer, FormButton } from "@/components/UI";

const PasswordForm = ({ token }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      const { confirmPassword, ...data } = values;
      const res = await updatePassword(token, data);
      console.log(res.data)
    } catch (e) {
      console.log(getError(e));
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordResetSchema,
    onSubmit: submitHandler,
  });

  return (
    <FormContainer component="form" onSubmit={formik.handleSubmit}>
      <Text variant="header" textAlign={"center"} fontWeight={800} mb={3}>
        Update your&nbsp;
        <Text variant="header" color="primary">
          Password
        </Text>
      </Text>

      <InputField
        name="password"
        label="Password"
        variant="outlined"
        placeholder="Enter Password"
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password && Boolean(formik.touched.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <InputField
        name="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        placeholder="Confirm Password"
        type={showPassword ? "text" : "password"}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors.confirmPassword &&
          Boolean(formik.touched.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FormButton type="submit" disabled={formik.isSubmitting}>
        <Text variant="sub">Update</Text>
      </FormButton>
    </FormContainer>
  );
};

export default PasswordForm;
