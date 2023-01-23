import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import { editCompanyValidator } from "../../utils/validations/auth";
import CompanyEditCard from "./CompanyEditCard";
import { useAppDispatch } from "../../store/hooks";
import { updateCompany } from "../../store/reducers/companies/companies";
import { styles } from "../../styles/components/editCompany";
import { globalStyles } from "../../styles/global";

interface EditCompanyInterface {
  data: any;
}

const EditCompany = (props: EditCompanyInterface) => {
  const {
    data
  } = props;
  const dispatch = useAppDispatch();
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      company: "",
      abbr: "",
      defaultCurrency: "",
      domain: "",
      dateOfEstablishment: "",
      address: [
        {
          addressLine1: "",
          addressLine2: "",
          country: "",
          selectState: "",
          selectCity: "",
          postalCode: ""
        },
      ],
    },
    validationSchema: editCompanyValidator,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateCompany(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from edit Company file", response)
        })
        .catch((error: any) => { });
    },
  });

  const handleAddAddress = () => {
    const newAddresses = [
      ...values.address,
      {
        addressLine1: "",
        addressLine2: "",
        country: "",
        selectState: "",
        selectCity: "",
        postalCode: ""
      },
    ];
    setFieldValue("address", newAddresses);
  };

  const handleRemoveAddress = (index: number) => {
    const newAddresses = [...values.address];
    newAddresses.splice(index, 1);
    setFieldValue("address", newAddresses);
  };

  // address
  const handleChangeAddressLine1 = (event: any, index: number) => {
    setFieldValue(`address.${index}.addressLine1`, event.target.value);
    console.log("address line1", event.target.value)
  };

  const handleChangeAddressLine2 = (event: any, index: number) => {
    setFieldValue(`address.${index}.addressLine2`, event.target.value);
  };

  const handleChangeCountry = (event: any, index: number) => {
    setFieldValue(`address.${index}.country`, event.target.value);
  };

  const handleChangeSelectState = (event: any, index: number) => {
    setFieldValue(`address.${index}.selectState`, event.target.value);
  };

  const handleChangeSelectCity = (event: any, index: number) => {
    setFieldValue(`address.${index}.selectCity`, event.target.value);
  };

  const handleChangePostalCode = (event: any, index: number) => {
    setFieldValue(`address.${index}.postalCode`, event.target.value);
  };

  const handleSubmitTaxes = (index: number) => { };

  console.log("data in edit company.tsx", data)
  let { params } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editBtn, setEditBtn] = useState(true);
  const [isHollidayEditing, setIsHollidayEditing] = useState(false);
  const [editHollidayBtn, setEditHollidayBtn] = useState(true);

  const navigate = useNavigate();
  const EditHandle = () => {
    setIsEditing(true);
    setEditBtn(false);
  };
  const EditHollidayHandle = () => {
    setIsHollidayEditing(true);
    setEditHollidayBtn(false);
  };
  const handleCancleEdit = () => {
    navigate(-1);
  }

  return (
    <Container sx={{ width: 1 }} >
      {/* toggle card for details and edit form of company */}
      <form onSubmit={handleSubmit}>
        <Box {...styles.box}>
          <Typography variant="h5" {...globalStyles.moduleTitle}>Company 1</Typography>
          <Box>
            <Button
              {...styles.parentBoxCancelButton}
              variant="contained"
              onClick={handleCancleEdit}
            >
              Cancle
            </Button>
            <Button
              {...styles.parentBoxButtonEdit}
              variant="contained"
              type="submit"
            >
              Save
            </Button>

          </Box>
        </Box>
        <CompanyEditCard
          data={data}
          values={values}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          touched={touched}
          handleAddAddress={handleAddAddress}
          handleRemoveAddress={handleRemoveAddress}
          handleChangeAddressLine1={handleChangeAddressLine1}
          handleChangeAddressLine2={handleChangeAddressLine2}
          handleChangeCountry={handleChangeCountry}
          handleChangeSelectState={handleChangeSelectState}
          handleChangeSelectCity={handleChangeSelectCity}
          handleChangePostalCode={handleChangePostalCode}
          handleSubmitTaxes={handleSubmitTaxes}
        />
      </form>
    </Container>
  );
};

export default EditCompany;
