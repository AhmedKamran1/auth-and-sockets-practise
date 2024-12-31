import { allowedImageTypes, fileSizeAllowed } from '@/utils/constants';

export const getFileUrl = (bucket, key) => {
  return `https://${bucket}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${key}`;
};

export const validateImage = (file) => {
  if (!allowedImageTypes.includes(file.type)) {
    throw new Error(`File type is not allowed`);
  }

  if (Math.round(file.size / 1024) > fileSizeAllowed) {
    throw new Error('File size must be 1 MB.');
  }
};
