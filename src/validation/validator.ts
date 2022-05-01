import yup from 'yup';

const validator = async ({ schema, data }: { schema: yup.AnyObjectSchema, data: any }) => {
  const result = { isValid: true, error: [] };
  try {
    await schema.validate(data, { abortEarly: false });
  } catch (error: any) {
    result.isValid = false;
    result.error = error.errors?.join(', ');
  }
  return result;
};

export default validator;
