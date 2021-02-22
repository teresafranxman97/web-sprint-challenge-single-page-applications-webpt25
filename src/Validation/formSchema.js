import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup
    .string()
    .required("Name is required.")
    .min(2, "Name must be at least 2 characters."),
  sauce: Yup
    .string()
    .oneOf(["OriginalRed", "GarlicRanch", "BBQ", "SpinachAlfredo"], "Sauce is required"),
  size: Yup
    .string()
    .oneOf(["small", "medium", "large"], "Size is required."),
  pepperoni: Yup.boolean(),
  bacon: Yup.boolean(),
  spicySausage: Yup.boolean(),
  bananaPeppers: Yup.boolean(),
  onions: Yup.boolean(),
  greenPeppers: Yup.boolean(),
  dicedTomatoes: Yup.boolean(),
  olives: Yup.boolean(),
  roastedChicken: Yup.boolean(),
  pineapple: Yup.boolean(),
  cheese: Yup.boolean(),     
})

export default Schema;