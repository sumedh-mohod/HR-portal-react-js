import React from "react";
import { useFormik } from "formik";
import { addAssetsValidator } from "utils/validations/auth";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { styles } from "styles/components/addPartner";
import { globalStyles } from "styles/global";
import { useNavigate } from "react-router-dom";
const AddAssets = () => {
  const navigate = useNavigate();
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
      name: "",
      id: "",
      categoryName: "",
      subCategoryName: "",
      description: "",
    },
    validationSchema: addAssetsValidator,
    onSubmit: (values) => {
      console.log("values of add assets", values);
    },
  });

  const handleCancle = () =>{
    navigate(-1);
  }
  return (
    <form onSubmit={handleSubmit}>
    {/* header Box */}
    <Box {...styles.parentBox}>
      <Typography {...globalStyles.moduleTitle} variant="h5">
        Add Product
      </Typography>
      <Box>
        <Button
          {...styles.parentBoxCancleButton}
          variant="contained"
          onClick={handleCancle}
        >
          Cancle
        </Button>
        <Button
          {...styles.parentBoxSaveButton}
          variant="contained"
          type="submit"
        >
          Save
        </Button>
      </Box>
    </Box>
    {/* form fields started */}
    <Card sx={{ mt: 3, mb: 3, p: 5 }}>
      <Grid container columnSpacing={3} rowGap={3}>
        {/* name */}
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="name" {...globalStyles.textFieldLabel}>
               Name*
            </FormLabel>
            <TextField
              variant="filled"
              size="small"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.name && errors.name ? true : false
              }
              helperText={touched.name && errors.name}
              InputProps={{
                disableUnderline: true,
                style: { ...globalStyles.textField },
              }}
            >
            </TextField>
          </FormControl>
        </Grid>
        {/* id */}
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="id" {...globalStyles.textFieldLabel}>
              Id
            </FormLabel>
            <TextField
              variant="filled"
              size="small"
              type={"text"}
              name="id"
              value={values.id}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                style: { ...globalStyles.textField },
              }}
            />
          </FormControl>
        </Grid>
        {/* category name */}
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="categoryName" {...globalStyles.textFieldLabel}>
            Category Name*
            </FormLabel>
            <TextField
              variant="filled"
              size="small"
              type={"text"}
              name="categoryName"
              value={values.categoryName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.categoryName && errors.categoryName ? true : false
              }
              helperText={touched.categoryName && errors.categoryName}
              InputProps={{
                disableUnderline: true,
                style: { ...globalStyles.textField },
              }}
            />
          </FormControl>
        </Grid>
        {/*  Sub Category Name */}
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="subCategoryName" {...globalStyles.textFieldLabel}>
            Sub-Category Name*
            </FormLabel>
            <TextField
              name="subCategoryName"
              variant="filled"
              size="small"
              id="subCategoryName"
              value={values.subCategoryName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subCategoryName && errors.subCategoryName ? true : false}
              helperText={touched.subCategoryName && errors.subCategoryName}
              InputProps={{
                disableUnderline: true,
                style: { ...globalStyles.textField },
              }}
            >
            </TextField>
          </FormControl>
        </Grid>
        {/* description */}
        <Grid item xs={12} md={12} lg={12}>
          <FormControl fullWidth>
            <FormLabel id="description" {...globalStyles.textFieldLabel}>
            Description
            </FormLabel>
            <TextField
              variant="filled"
              size="small"
              type={"text"}
              name="description"
              value={values.description}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                style: { ...globalStyles.textField },
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  </form>
  )
}

export default AddAssets
