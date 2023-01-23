import React from 'react'
import { Card, Grid, Typography, Box } from '@mui/material'
import { styles } from "../../styles/components/editCompany";

interface CompanyAddressDetailsCardInterface {
    info: any,
}
const CompanyAddressDetailsCard = (props: CompanyAddressDetailsCardInterface) => {
    const { info } = props;
    // console.log("info", info);
    return (
        <Box>
            <Typography variant="h5">Address 1</Typography>
            <Card sx={{ mt: 3, mb: 3, p: 5 }}>
                <Grid container spacing={3}>
                    <Box {...styles.detailsParentBox} >
                        <Grid item xs={12} md={2} lg={4}>
                            <Typography {...styles.detailsTypography1}>Address Line 1 -</Typography>
                            <Typography {...styles.detailsTypography1}>Address Line 2 -</Typography>
                            <Typography {...styles.detailsTypography1}>Country -</Typography>
                            <Typography {...styles.detailsTypography1}>State -</Typography>
                            <Typography {...styles.detailsTypography1}>City -</Typography>
                            <Typography {...styles.detailsTypography1}>Postal Code -</Typography>
                        </Grid>
                        <Grid item xs={12} md={10} lg={8}>
                            <Typography {...styles.detailsTypography2}> {info.line1 === null ? "-":info?.line1}</Typography>
                            <Typography {...styles.detailsTypography2}> {info.line2  === null ? "-":info?.line2} </Typography>
                            <Typography {...styles.detailsTypography2}> {info.country  === null ? "-":info?.country} </Typography>
                            <Typography {...styles.detailsTypography2}> {info.state  === null ? "-":info?.state} </Typography>
                            <Typography {...styles.detailsTypography2}> {info.city  === null ? "-":info?.city} </Typography>
                            <Typography {...styles.detailsTypography2}> {info.postalCode  === null ? "-":info?.postalCode} </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Card>
        </Box>
    )
}

export default CompanyAddressDetailsCard