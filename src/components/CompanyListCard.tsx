import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Paper, Box } from "@mui/material";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { styles } from "../styles/screens/CompanyList";

const CompanyListCard = ({ company, index }: { company: any, index: any }) => {

    const navigate = useNavigate();
    const handleCompanyEditClick = (company: any) => {
        navigate("/companies/edit", {
            state: { company },
        });
    };

    return (
        <Grid item xs={12} md={3} lg={3}>
            <Paper
                elevation={3}
                onClick={() => handleCompanyEditClick(company)}
                {...styles.companyCard}
                key={index}
            >
                <OrangeBitsIcon width={40} />
                <Typography variant="h5" gutterBottom {...styles.companyName}>
                    {company.name}
                </Typography>
                <Box {...styles.companyDescriptionBox}>
                    {company?.description?.map((des: any) => (
                        <>
                            <Typography {...styles.companyDescription}>
                                {des.PAN}{" "}
                            </Typography>
                            <Typography {...styles.companyDescription}>
                                {des.TAN}{" "}
                            </Typography>
                            <Typography {...styles.companyDescription}>
                                {des.GST}{" "}
                            </Typography>
                        </>
                    ))}
                </Box>
            </Paper>
        </Grid>
    )
}

export default CompanyListCard