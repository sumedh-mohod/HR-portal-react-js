import * as Yup from "yup";

export const loginValidator = Yup.object().shape({
  username: Yup.string().required("Please enter a valid username"),
  password: Yup.string()
    .required("Please enter a valid password")
    .min(8, "Please enter a valid password"),
});

export const editCompanyValidator = Yup.object().shape({
  company: Yup.string().required("Please enter a valid company"),
  abbr: Yup.string().required("Please enter a valid abbr"),
  defaultCurrency: Yup.string().required(
    "Please enter a valid default currency"
  ),
  dateOfEstablishment: Yup.date().required(
    "Please Select a valid date of establishment"
  ),
  // selectDate:Yup.date().required("Please Select a valid date "),
});

// add company validator
export const addCompanyValidator = Yup.object().shape({
  company: Yup.string().required("Please enter a valid company"),
  abbr: Yup.string().required("Please enter a valid abbr"),
  defaultCurrency: Yup.string().required(
    "Please enter a valid default currency"
  ),
  domain: Yup.string().required("Please enter a valid domain"),
  country: Yup.string().required("Please Select a valid country"),
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

// add vendor employee
export const addEmployeeValidator = Yup.object().shape({
  DisplayName: Yup.string().required("Please enter a valid vendor name"),
});

// add holiday card validation

export const addHolidayValidator = Yup.object().shape({
  selectDate: Yup.date().required("Please Select a valid date "),
});

// assets master add category validation
export const addCategoryValidator = Yup.object().shape({
  categoryName: Yup.string().required("Please Select a valid Category Name"),
});

// assets master add sub category validation
export const addSubCategoryValidator = Yup.object().shape({
  subCategoryName: Yup.string().required("Please enter a valid Sub Category Name"),
  categoryName: Yup.string().required("Please Select a valid Category Name"),
});
