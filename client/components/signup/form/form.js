import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import TermsModal from "../terms-and-condition/modal/terms-modal";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Services
import { signup } from "@/services";

// Utils
import { UserRoles } from "@/utils/roles";
import { signupSchema } from "@/utils/validation-schema/auth";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UserIcon from "@mui/icons-material/Person";
import ManagerIcon from "@mui/icons-material/Restaurant";

// Styles
import * as Styles from "./form.styles";
import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Text,
  InputField,
  CustomCheckbox,
  FlexContainer,
  FormButton,
  FormContainer,
} from "@/components/UI";

const SignupForm = () => {
  const router = useRouter();

  const [role, setRole] = useState("User");
  const [showTerms, setShowTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      const { confirmPassword, ...data } = values;
      const res = await signup({ ...data });
      enqueueSnackbar({
        variant: "success",
        message: res.data,
        onExited: () =>
          router.push(`/email-confirmation?email=${data.email}`, null, {
            shallow: true,
          }),
      });
    } catch (e) {
      enqueueSnackbar({ variant: "error", message: getError(e) });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    validationSchema: signupSchema,
    onSubmit: submitHandler,
  });

  const handleTermsClick = () => {
    console.log(formik.values.agree);
    if (formik.values.agree) {
      formik.setFieldValue("agree", false);
      return;
    }
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  const handleAcceptTerms = () => {
    formik.setFieldValue("agree", true);
    handleCloseTerms();
  };

  return (
    <React.Fragment>
      {showTerms && (
        <TermsModal
          open={showTerms}
          handleClose={handleCloseTerms}
          onAccept={handleAcceptTerms}
        />
      )}
      <FormContainer component="form" onSubmit={formik.handleSubmit}>
        <Text variant="header" textAlign={"center"} fontWeight={800}>
          Welcome to&nbsp;
          <Text variant="header" color="primary">
            ChatEase
          </Text>
        </Text>
        <Text variant="main" textAlign={"center"} fontWeight={500} mb={3}>
          Create your account
        </Text>

        <FlexContainer gap={2}>
          <InputField
            name="firstName"
            label="First Name"
            variant="outlined"
            placeholder="Enter First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.firstName && Boolean(formik.touched.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />

          <InputField
            name="lastName"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.lastName && Boolean(formik.touched.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </FlexContainer>

        <InputField
          name="email"
          label="Email"
          variant="outlined"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email && Boolean(formik.touched.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

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

        {/* <FlexContainer gap={2}>
          {Object.values(UserRoles).map((r) => (
            <Styles.RoleItem
              key={r}
              selected={+role.includes(r)}
              onClick={() => setRole(r)}
            >
              {r === UserRoles.USER && <UserIcon />}
              {r === UserRoles.MANAGER && <ManagerIcon />}
              <Text variant="sub">{r}</Text>
            </Styles.RoleItem>
          ))}
        </FlexContainer> */}

        <FormGroup>
          <FormControlLabel
            sx={{ justifyContent: "center" }}
            control={
              <CustomCheckbox
                name="agree"
                checked={formik.values.agree}
                value={formik.values.agree}
                onClick={handleTermsClick}
              />
            }
            label={
              <Text variant="body">
                I agree to ChatEase&apos;s&nbsp;
                <Styles.TermsText
                  variant="body"
                  color="primary"
                  onClick={() => setShowTerms(true)}
                >
                  Terms & Conditions
                </Styles.TermsText>
              </Text>
            }
          />
        </FormGroup>
        <FormButton
          type="submit"
          disabled={formik.isSubmitting || !formik.values.agree}
        >
          <Text variant="sub">Sign up</Text>
        </FormButton>

        <Link href="/login">
          <Box sx={{ textAlign: "center" }}>
            <Text variant="body">Already have an account? </Text>
            <Text variant="body" color="primary">
              Login now.
            </Text>
          </Box>
        </Link>
      </FormContainer>
    </React.Fragment>
  );
};

export default SignupForm;
