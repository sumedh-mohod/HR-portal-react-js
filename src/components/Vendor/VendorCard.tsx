import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/CompanyList";
import { globalStyles } from "../../styles/global";
import AddIcon from "@mui/icons-material/Add";

const VendorCard = ({
    vendors,
    handleVendorEditClick,
}: {
    vendors: any;
    handleVendorEditClick: any;
    handleVendorAddClick: any;
}) => {
    return (
        <Box>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                {vendors?.map((vendor: any, index: number) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Card
                            elevation={3}
                            onClick={() => handleVendorEditClick(vendor)}
                            {...styles.companyCard}
                            key={index}
                        >
                            <OrangeBitsIcon width={40} />
                            <Typography variant="h5" gutterBottom {...styles.companyName}>
                                {vendor.name}
                            </Typography>
                            <Box {...styles.companyDescriptionBox}>
                                <>
                                    <Typography {...styles.companyDescription}>
                                        PAN - {vendor.PAN}{" "}
                                    </Typography>
                                    <Typography {...styles.companyDescription}>
                                        TAN - {vendor.TAN}{" "}
                                    </Typography>
                                    <Typography {...styles.companyDescription}>
                                        GST - {vendor.GST}{" "}
                                    </Typography>
                                </>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default VendorCard;
