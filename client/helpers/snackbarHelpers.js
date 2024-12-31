export const getError = (e) => {
  return e.response?.data?.message || e?.message || 'Server Error, try again later ';
};
