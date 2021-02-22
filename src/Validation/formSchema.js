import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup
    .string()
    .required("Name is required.")
    .min(2, "Name must be at least 2 characters.")
});

export default Schema;