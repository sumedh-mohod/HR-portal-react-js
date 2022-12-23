import * as Yup from "yup";

export const loginValidator = Yup.object().shape({
  username: Yup.string().required("Please enter a valid username"),
  password: Yup.string()
    .required("Please enter a valid password")
    .min(8, "Please enter a valid password"),
});

export const editCompanyValidator = Yup.object().shape({
  company: Yup.string().required("Please enter a valid company"),
  defaultLetterHead: Yup.string().required("Please enter a valid default letter head"),
  abbr:Yup.string().required("Please enter a valid abbr"),
  defaultCurrency:Yup.string().required("Please enter a valid default currency"),
  country:Yup.string().required("Please Select a valid country"),
  dateOfEstablishment:Yup.date().required("Please Select a valid date of establishment"),
  // selectDate:Yup.date().required("Please Select a valid date "),
});