import React from 'react'
import {Box, Card, Grid, Typography } from '@mui/material';
import { styles } from '../../styles/components/hollidayDetailsCard';

const HollidayCard = () => {
    return (
        <Box>
            <Card sx={{ mt: 3, mb: 3, p: 5, width: "80vw" }}>
                <Grid container spacing={3}>
                    <Box {...styles.detailsParentBox}>
                        <Grid item xs={12} md={2} lg={4}>
                            <Typography {...styles.detailsTypography1}>Gandi Jayanti -</Typography>
                            <Typography {...styles.detailsTypography1}>Diwali -</Typography>
                            <Typography {...styles.detailsTypography1}>Chritsmas -</Typography>
                        </Grid>
                        <Grid item xs={12} md={10} lg={8}>
                            <Typography {...styles.detailsTypography2}>2 Octomber 2023</Typography>
                            <Typography {...styles.detailsTypography2}>1 November 2023</Typography>
                            <Typography {...styles.detailsTypography2}>25 December 2023</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Card>
        </Box>
    )
}

export default HollidayCard