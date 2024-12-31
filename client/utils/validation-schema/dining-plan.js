import * as yup from 'yup';

export const diningPlanSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .min(3, 'Must be at least 3 characters.')
    .max(30, 'Must be at most 30 characters.')
    .required('Plan Title is required.'),
  invitees: yup
    .string()
    .test('multiple-emails', 'Please enter valid email addresses.', (value) => {
      if (!value) return true;
      const emails = value.split(' ').map((email) => email.trim());
      const isValid = emails.every((email) => yup.string().email().isValidSync(email));
      return isValid;
    }),
  description: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(300, 'Must be at most 300 characters.')
    .required('Description is required.'),
  date: yup.string().required("Plan Date is required."),
  restaurant: yup.string().required('Restaurant Name is required.'),
});
