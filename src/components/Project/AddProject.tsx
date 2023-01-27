import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addProjectValidator } from "../../utils/validations/auth";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
  MenuItem,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../store/hooks";
import { addProject } from "../../store/reducers/projects/projects";
import { globalStyles } from "../../styles/global";
import { styles } from "../../styles/components/addProject";
const AddProject = () => {
  const navigate = useNavigate();
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
      logo: "",
      name: "",
      startDate: "",
      endDate: "",
      selectPartner: "",
      pointsofContactOrangebits: [
        {
          name: "",
          email_id: "",
          contact: "",
        },
      ],
      pointsofContactPartners: [
        {
          partners_name: "",
          partners_email_id: "",
          partners_contact: "",
        },
      ],
    },

    validationSchema: addProjectValidator,
    onSubmit: (values) => {
      console.log("values of add project", values);
    },
  });

  const handleAddPointsofContactOrangebits = () => {
    const newpointsofContactOrangebits = [
      ...values.pointsofContactOrangebits,
      {
        name: "",
        email_id: "",
        contact: "",
      },
    ];
    setFieldValue("pointsofContactOrangebits", newpointsofContactOrangebits);
  };
  const handleAddPointsofContactPartners = () => {
    console.log("points of contact partners");
    const newPointsofContactPartners = [
      ...values.pointsofContactPartners,
      {
        partners_name: "",
        partners_email_id: "",
        partners_contact: "",
      },
    ];
    setFieldValue("pointsofContactPartners", newPointsofContactPartners);
  };

  const handleChangeOrangebitsName = (event: any, index: number) => {
    setFieldValue(
      `pointsofContactOrangebits.${index}.name`,
      event.target.value
    );
  };
  const handleChangeOrangebitsEmail = (event: any, index: number) => {
    setFieldValue(
      `pointsofContactOrangebits.${index}.email_id`,
      event.target.value
    );
  };
  const handleChangeOrangebitsContact = (event: any, index: number) => {
    setFieldValue(
      `pointsofContactOrangebits.${index}.contact`,
      event.target.value
    );
  };

  const handleChangePartnersName = (event: any, index: number) => {
    setFieldValue(
      `pointsofContactPartners.${index}.partners_name`,
      event.target.value
    );
    console.log("partners_name", event.target.value);
  };
  const handleChangePartnersEmail = (event: any, index: number) => {
    setFieldValue(
      `pointsofContactPartners.${index}.partners_email_id`,
      event.target.value
    );
  };
  const handleChangePartnersContact = (event: any, index: number) => {
    setFieldValue(
      `pointsofContactPartners.${index}.partners_contact`,
      event.target.value
    );
  };

  const inputRef: any = useRef(null);
  const handleClick = () => {
    // open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (fileObj) {
      setFieldValue("logo", fileObj.name);
    }
    //  reset file input
    event.target.value = null;

    //  can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  // cancle butn click
  const handleCancle = () => {
    navigate(-1);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography variant="h5">Add Project</Typography>
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
        <Card {...styles.card}>
          <Grid container columnSpacing={3} rowGap={3}>
            {/* uplaod Logo */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="logo">Upload Logo*</FormLabel>
                <input
                  name="logo"
                  style={{ display: "none" }}
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                />
                <TextField
                  variant="filled"
                  size="small"
                  value={values.logo}
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                  error={touched.logo && errors.logo ? true : false}
                  helperText={touched.logo && errors.logo}
                  {...styles.logoTextfield}
                  InputProps={{
                    sx: { color: "#515151" },
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                    endAdornment: (
                      <Button
                        onClick={handleClick}
                        size="small"
                        {...styles.selectFileButton}
                      >
                        Select File
                      </Button>
                    ),
                  }}
                ></TextField>
              </FormControl>
            </Grid>
            {/*  name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="name">Name*</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name ? true : false}
                  helperText={touched.name && errors.name}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* start date */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="startDate">Start Date</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="date"
                  name="startDate"
                  value={values.startDate}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* end date*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="endDate">End Date</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="date"
                  name="endDate"
                  value={values.endDate}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* select Partner*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectPartner">Select Partner</FormLabel>
                <TextField
                  select
                  variant="filled"
                  size="small"
                  type="date"
                  name="selectPartner"
                  value={values.selectPartner}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="India">HP</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
        {/*========== point of contact orangebits================*/}
        <Box {...styles.parentBox}>
          <Typography {...globalStyles.moduleTitle} variant="h5">
            Points of contact orangebits
          </Typography>
        </Box>
        <Card {...styles.card}>
          {values.pointsofContactOrangebits.map(
            (pointsofContactOrangebits, index) => (
              <>
                <Grid container columnSpacing={3} rowGap={3}>
                  {/* name */}
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="name" {...globalStyles.textFieldLabel}>
                        Name
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type={"text"}
                        name="name"
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                        value={
                          (values.pointsofContactOrangebits &&
                            values.pointsofContactOrangebits[index].name) ||
                          ""
                        }
                        onChange={(event) => {
                          handleChangeOrangebitsName(event, index);
                        }}
                      />
                    </FormControl>
                  </Grid>

                  {/* email id */}
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="email_id" {...globalStyles.textFieldLabel}>
                        Email id
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type={"email"}
                        name="email_id"
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                        value={
                          (values.pointsofContactOrangebits &&
                            values.pointsofContactOrangebits[index].email_id) ||
                          ""
                        }
                        onChange={(event) => {
                          handleChangeOrangebitsEmail(event, index);
                        }}
                      />
                    </FormControl>
                  </Grid>
                  {/* contact no */}
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="contact" {...globalStyles.textFieldLabel}>
                        Contact
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type={"phone"}
                        name="contact"
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                        value={
                          (values.pointsofContactOrangebits &&
                            values.pointsofContactOrangebits[index].contact) ||
                          ""
                        }
                        onChange={(event) => {
                          handleChangeOrangebitsContact(event, index);
                        }}
                      />
                    </FormControl>
                  </Grid>
                  {/* buttons add or remove */}
                  <Grid item xs={12} md={6} lg={3}>
                    <Box sx={{ display: "flex", justifyContent: "baseline" }}>
                      <CheckIcon {...styles.checkIcon} />
                      <CloseIcon {...styles.closeIcon} />
                      {values.pointsofContactOrangebits.length - 1 === index ? (
                        <Button
                          {...styles.addButton}
                          onClick={handleAddPointsofContactOrangebits}
                        >
                          <AddIcon fontSize="small" {...styles.addIcon} />
                          <Typography sx={{ fontSize: "small" }}>
                            Add
                          </Typography>
                        </Button>
                      ) : null}
                    </Box>
                  </Grid>
                </Grid>
                <Grid />
              </>
            )
          )}
        </Card>

        {/* ==============point of contact partner=============== */}
        <Box {...styles.parentBox}>
          <Typography {...globalStyles.moduleTitle} variant="h5">
            Points of contact partner{" "}
          </Typography>
        </Box>
        <Card {...styles.card}>
          {values.pointsofContactPartners.map(
            (pointsofContactPartners, index) => (
              <>
                <Grid container columnSpacing={3} rowGap={3}>
                  {/* name */}
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="name" {...globalStyles.textFieldLabel}>
                        Name
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type={"text"}
                        name="partners_name"
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                        value={
                          (values.pointsofContactPartners &&
                            values.pointsofContactPartners[index]
                              .partners_name) ||
                          ""
                        }
                        onChange={(event) => {
                          handleChangePartnersName(event, index);
                        }}
                      />
                    </FormControl>
                  </Grid>

                  {/* email id */}
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="email_id" {...globalStyles.textFieldLabel}>
                        Email id
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        name="partners_email_id"
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                        value={
                          (values.pointsofContactPartners &&
                            values.pointsofContactPartners[index]
                              .partners_email_id) ||
                          ""
                        }
                        onChange={(event) => {
                          handleChangePartnersEmail(event, index);
                        }}
                      />
                    </FormControl>
                  </Grid>
                  {/* contact no */}
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="contact" {...globalStyles.textFieldLabel}>
                        Contact
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        name="partners_contact"
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                        value={
                          (values.pointsofContactPartners &&
                            values.pointsofContactPartners[index]
                              .partners_contact) ||
                          ""
                        }
                        onChange={(event) => {
                          handleChangePartnersContact(event, index);
                        }}
                      />
                    </FormControl>
                  </Grid>
                  {/* buttons add or remove */}
                  <Grid item xs={12} md={6} lg={3}>
                    <Box sx={{ display: "flex", justifyContent: "baseline" }}>
                      <CheckIcon {...styles.checkIcon} />
                      <CloseIcon {...styles.closeIcon} />
                      {values.pointsofContactPartners.length - 1 === index ? (
                        <Button
                          {...styles.addButton}
                          onClick={handleAddPointsofContactPartners}
                        >
                          <AddIcon fontSize="small" {...styles.addIcon} />
                          <Typography sx={{ fontSize: "small" }}>
                            Add
                          </Typography>
                        </Button>
                      ) : null}
                    </Box>
                  </Grid>
                </Grid>
              </>
            )
          )}
        </Card>
      </form>
    </Box>
  );
};

export default AddProject;
