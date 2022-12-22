import React from "react";
import IconOrangebits from "../assets/images/IconOrangebits.svg";
import { Button, Grid, Typography, Paper, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CompanyList = () => {
    return (
        <Box sx={{ marginTop: "0px" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    justifyItems: "center",
                    alignContent: "flex-start",
                    mt: 2,
                }}
            >
                <Typography variant="h5">Company 1</Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#F58634",
                        borderRadius: "5px",
                        textTransform: "inherit",
                    }}
                >
                    <AddIcon /> Add Company
                </Button>
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            fontSize: "16px",
                            minHeight: "206px",
                            maxHeight: "206px",
                        }}
                    >
                        <img src={IconOrangebits} alt="logo" />
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "Montserrat",
                                mt: 2,
                            }}
                        >
                            Company 1
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: "normal",
                                fontFamily: "Montserrat",
                                color: "#9FA2B4",
                            }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                            dolore expedita exercitationem, excepturi, eligendi ullam mollitia
                            maiores deleniti nisi itaque dignissimos alias dicta id autem
                            necessitatibus distinctio. Voluptatibus, inventore sed!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            fontSize: "16px",
                            minHeight: "206px",
                            maxHeight: "206px",
                        }}
                    >
                        <img src={IconOrangebits} alt="logo" />
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "Montserrat",
                                mt: 2,
                            }}
                        >
                            Company 2
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: "normal",
                                fontFamily: "Montserrat",
                                color: "#9FA2B4",
                            }}
                        >
                            Lorem ipsum, dolor sitf amet consectetur adipisicing elit. Animi,
                            dolore expedita exercitationem, excepturi, eligendi ullam mollitia
                            maiores deleniti nisi itaque dignissimos alias dicta id autem
                            necessitatibus distinctio. Voluptatibus, inventore sed!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            fontSize: "16px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "206px",
                            maxHeight: "206px",
                            outline: "2px dashed #9FA2B4",
                        }}
                    >
                        <AddIcon sx={{ pr: 2 }} />
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "Montserrat",
                            }}
                        >
                            Add Company
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CompanyList;
