import React from 'react'
import { useFormik } from "formik";
import { Button, Card, FormControl, FormLabel, Grid, TextField, Typography, Box } from '@mui/material'
import { styles } from 'styles/components/assetsMaster'
import { globalStyles } from 'styles/global'
import { addCategoryValidator } from 'utils/validations/auth';

const Category = () => {
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
            categoryName: "",
            description: "",
        },
        validationSchema: addCategoryValidator,
        onSubmit: (values) => {
            console.log("category values", values);
        },
    });
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Card {...styles.assetsCard}>
                    <Typography variant="h5" {...styles.assetsTitle}>
                        Category
                    </Typography>
                    <Grid container columnSpacing={3} rowGap={3}>
                        {/* Category Name */}
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
                        <Grid item xs={12} md={9} lg={9}>
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

export default Category