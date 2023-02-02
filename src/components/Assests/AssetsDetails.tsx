import React from "react";
import { Box, Button, Grid, Typography, Card } from "@mui/material";
import EditIcon from "components/Icons/EditIcon";
import { styles } from "styles/components/assetsDetails";
import { globalStyles } from "styles/global";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const AssetsDetails = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    const handleReset = () => { setActiveStep(0); };
    const steps = [
        {
            label: "Assigned to Nikhil -",
        },
        {
            label: "Assigned to Sarang -",
        },
        {
            label: "Assigned to Chetan -",

        },
    ];
    return (
        <Box>
            {/* titel box++++++++++++++++++++++++++++++++++++++++++++++ */}
            <Box {...styles.assetsTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Assets
                </Typography>

                <Box sx={{ display: "flex" }}>
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        {...styles.editBtn}
                    >
                        Edit
                    </Button>
                </Box>
            </Box>
            {/* 1st card ++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <Card sx={{ mt: 3, mb: 3, p: 5 }}>
                <Grid container spacing={3}>
                    <Box {...styles.detailsParentBox}>
                        <Grid item xs={5} md={3} lg={3}>
                            <Typography {...styles.detailsTypography1}>
                                Asset Name -
                            </Typography>
                            <Typography {...styles.detailsTypography1}>Category -</Typography>
                            <Typography {...styles.detailsTypography1}>
                                Sub-Category -
                            </Typography>
                            <Typography {...styles.detailsTypography1}>
                                Description -
                            </Typography>
                        </Grid>

                        <Grid item xs={7} md={3} lg={9}>
                            <Typography {...styles.detailsTypography2}>
                                Office Chair
                            </Typography>
                            <Typography {...styles.detailsTypography2}>Furniture</Typography>
                            <Typography {...styles.detailsTypography2}>Chair</Typography>
                            <Typography {...styles.detailsTypography2}>
                                New chair with good quality
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Card>
            {/* 2nd title box+++++++++++++++++++++++ */}
            <Box {...styles.assetsTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    History/Activity
                </Typography>
            </Box>
            {/* steper carad++++++++++++++++++++++++++ */}
            <Card sx={{ mt: 3, mb: 3, p: 5 }}>
                {/* steper code start+++++++++++++++++++  */}

                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label} sx={{

                            '& .MuiStepLabel-root': {
                                color: '#515151',
                                fontFamily: 'Montserrat',
                                fontSize: "13px"
                                // circle color (ACTIVE)
                            },
                            '& .Mui-active': {
                                color: '#F58634',
                                fontSize: "13px",
                                fontFamily: 'Montserrat',// circle color (ACTIVE)
                            },

                            '& .MuiStepLabel-root  .MuiStepIcon-text': {
                                display: "none",// for hide 123 no in circle
                            },
                            '&  .Mui-completed  .MuiStepIcon-text': {
                                display: "none!important",// for hide 123 no in circle
                            },
                            '&	.MuiStepIcon-root': {
                                color: " #D9D9D9!important",
                                fontSize: "13px",
                                marginLeft: "5px"

                            },
                            '& .Mui-completed .MuiStepIcon-root  .MuiSvgIcon-root   ': {

                                background: "#F58634!important",
                                borderRadius: "50%"
                            },
                            '&  .Mui-completed': {
                                color: '#F58634 !important',
                                fontFamily: 'Montserrat !important',
                                fontSize: "13px !important",// circle color (COMPLETED)
                            },
                            '& .Mui-active.MuiStepLabel-alternativeLabel':
                            {
                                color: '#515151',
                                fontFamily: 'Montserrat',
                                fontSize: "13px",
                                marginLeft: "5px"// Just text label (ACTIVE)
                            },
                            '& .MuiStepLabel-label':
                            {
                                color: '#515151!important',
                                fontFamily: 'Montserrat',
                                fontSize: "13px",
                                marginLeft: "5px" // Just text label (ACTIVE)
                            },

                            '& 	.Mui-active.MuiStepLabel-label':
                            {
                                color: '#515151!important',
                                fontFamily: 'Montserrat',
                                fontSize: "13px", marginLeft: "5px"// Just text label (ACTIVE)
                            },

                        }}>
                            <StepLabel sx={{ color: "black" }} onClick={handleNext}>
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {/* {activeStep === steps.length && (
                    <Card square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Card>
                )} */}
                {/* steper code end+++++++++++++++++++  */}
            </Card>
        </Box >
    );
};

export default AssetsDetails;
