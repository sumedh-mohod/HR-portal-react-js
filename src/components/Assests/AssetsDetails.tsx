import React from "react";
import { Box, Button, Grid, Typography, Card } from "@mui/material";
import EditIcon from "components/Icons/EditIcon";
import { styles } from "styles/components/assetsDetails";
import { globalStyles } from "styles/global";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const AssetsDetails = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    const handleReset = () => { setActiveStep(0); };
    const steps = [
        {
            label: "Assigned to Nikhil -  2 October, 2023",
        },
        {
            label: "Assigned to Sarang -  2 October, 2022",
        },
        {
            label: "Assigned to Chetan -  2 October, 2021",

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
            <Card {...styles.stepperCard}>
                {/* steper code start+++++++++++++++++++  */}
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label} {...styles.stepper} >
                            <StepLabel sx={{ color: "black" }} onClick={handleNext}>
                                {step.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {/* steper code end+++++++++++++++++++  */}
            </Card>
        </Box >
    );
};

export default AssetsDetails;
