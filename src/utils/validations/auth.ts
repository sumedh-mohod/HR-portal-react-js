import * as Yup from "yup";

export const loginValidator = Yup.object().shape({
  username: Yup.string().required("Please enter a valid username"),
  password: Yup.string()
    .required("Please enter a valid password")
    .min(8, "Please enter a valid password"),
});
