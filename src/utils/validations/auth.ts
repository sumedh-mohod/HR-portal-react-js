import * as Yup from "yup";

export const loginValidator = Yup.object().shape({
  username: Yup.string().required("Please enter a valid username"),
  password: Yup.string()
    .required("Please enter a valid password")
    .min(8, "Please enter a valid password"),
});

export const editCompanyValidator = Yup.object().shape({
  company: Yup.string().required("Please enter a valid company"),
  defaultLetterHead: Yup.string().required(
    "Please enter a valid default letter head"
  ),
  abbr: Yup.string().required("Please enter a valid abbr"),
  defaultCurrency: Yup.string().required(
    "Please enter a valid default currency"
  ),
  country: Yup.string().required("Please Select a valid country"),
  dateOfEstablishment: Yup.date().required(
    "Please Select a valid date of establishment"
  ),
  // selectDate:Yup.date().required("Please Select a valid date "),
});

export const addCompanyValidator = Yup.object().shape({
  company: Yup.string().required("Please enter a valid company"),
  abbr: Yup.string().required("Please enter a valid abbr"),
  defaultCurrency: Yup.string().required(
    "Please enter a valid default currency"
  ),
  domain: Yup.string().required("Please enter a valid domain"),
});

// add partner validation
export const addPartnerValidator = Yup.object().shape({
  logo: Yup.mixed().required("Please upload a valid logo"),
  partnerName: Yup.string().required("Please enter a valid partner name"),
  selectCity: Yup.string().required("Please Select a valid city"),
  selectState: Yup.string().required("Please Select a valid state"),
  country: Yup.string().required("Please Select a valid country"),
});

// add project validation
export const addProjectValidator = Yup.object().shape({
  logo: Yup.string().required("Please upload a valid logo"),
  name: Yup.string().required("Please enter a valid name"),
});

// add vendor validation
export const addVendorValidator = Yup.object().shape({
  logo: Yup.mixed().required("Please upload a valid logo"),
  vendorName: Yup.string().required("Please enter a valid vendor name"),
  selectCity: Yup.string().required("Please Select a valid city"),
  selectState: Yup.string().required("Please Select a valid state"),
  country: Yup.string().required("Please Select a valid country"),
});

// add holiday card validation

export const addHolidayValidator = Yup.object().shape({
  selectDate: Yup.date().required("Please Select a valid date "),
});
