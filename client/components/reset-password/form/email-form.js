import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Services
import { forgotPassword } from "@/services";

// Utils
import { emailSchema } from "@/utils/validation-schema/auth";

// Styles
import { Text, InputField, FormContainer, FormButton } from "@/components/UI";

const EmailForm = () => {
  const router = useRouter();

  const submitHandler = async (value) => {
    try {
      formik.setSubmitting(true);
      const res = await forgotPassword(value.email);
      console.log(res.data);
    } catch (e) {
      console.log(getError(e));
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: submitHandler,
  });

  return (
    <FormContainer component="form" onSubmit={formik.handleSubmit}>
      <Text variant="header" textAlign={"center"} fontWeight={800} mb={3}>
        Find your&nbsp;
        <Text variant="header" color="primary">
          Account
        </Text>
      </Text>

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

      <FormButton type="submit" disabled={formik.isSubmitting}>
        <Text variant="sub">Request Link</Text>
      </FormButton>
    </FormContainer>
  );
};

export default EmailForm;
