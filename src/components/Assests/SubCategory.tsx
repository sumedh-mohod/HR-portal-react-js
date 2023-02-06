import React from 'react'
import { useFormik } from "formik";
import { Button, Card, FormControl, FormLabel, Grid, TextField, Typography, Box } from '@mui/material'
import { styles } from 'styles/components/assetsMaster'
import { globalStyles } from 'styles/global'
import { addSubCategoryValidator } from 'utils/validations/auth';

export const SubCategory = () => {
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
            subCategoryName: "",
            categoryName: "",
            description: "",

        },
        validationSchema: addSubCategoryValidator,
        onSubmit: (values) => {
            console.log("sub category values", values);
        },
    });
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Card {...styles.assetsCard}>
                    <Typography variant="h5" {...styles.assetsTitle}>
                        Sub-Category
                    </Typography>
                    <Grid container columnSpacing={3} rowGap={3}>
                        {/* Category Name */}
                        <Grid item xs={12} md={3} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel
                                    id="subCategoryName"
                                    {...globalStyles.textFieldLabel}
                                >
                                    Sub-Category Name*
                                </FormLabel>
                                <TextField
                                    name="subCategoryName"
                                    variant="filled"
                                    size="small"
                                    value={values.subCategoryName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        touched.subCategoryName && errors.subCategoryName ? true : false
                                    }
                                    helperText={touched.subCategoryName && errors.subCategoryName}
                                    InputProps={{
                                        disableUnderline: true,
                                        style: { ...globalStyles.textField },
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel
                                    id="categoryName"
                                    {...globalStyles.textFieldLabel}
                                >
                                    Category Name*
                                </FormLabel>
                                <TextField
                                    name="categoryName"
                                    variant="filled"
                                    size="small"
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
                        {/* description */}
                        <Grid item xs={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <FormLabel
                                    id="description"
                                    {...globalStyles.textFieldLabel}
                                >
                                    Description
                                </FormLabel>
                                <TextField
                                    name="description"
                                    variant="filled"
                                    size="small"
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
                <Box {...styles.btnBox}>
                    <Box>
                        <Button
                            {...styles.parentBoxCancelButton}
                            variant="contained"
                        // onClick={handleCancle}
                        >
                            Cancel
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
            </form>
        </Box>
    )
}
