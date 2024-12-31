import * as yup from 'yup';

export const reviewSchema = yup.object().shape({
  content: yup
    .string()
    .min(10, 'Must be at least 10 characters.')
    .max(1000, 'Must be at most 1000 characters.')
    .required('Review content is required.'),
  rating: yup.number().integer().required('Rating is required.'),
});
