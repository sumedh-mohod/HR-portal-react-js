import React from "react";
import { Box, Typography, Card, Grid, Divider } from "@mui/material";
import DeleteIcon from "../../Icons/DeleteIcon";
import { styles } from "../../../styles/components/documentsEmployeeCard";
import PdfIcon from "../../Icons/PdfIcon";

interface DocumentsCardInterface {
    pdfTitle: any
}

const DocumentsCard = (
    props: DocumentsCardInterface
) => {
    const handleDelete = () => {
        console.log("delete");
    };
    return (
        <Grid container spacing={1}>
            <Grid item lg={12}>
                <Card variant="outlined" {...styles.documentCard}>
                    <Box
                        {...styles.boxContainer}
                    >
                        <PdfIcon width={49} height={48}
                            sx={{ mt: 5 }}
                        />
                        <Box
                            {...styles.bottomBox}
                        >
                            <Box {...styles.bottomTypographyBox}>
                                <PdfIcon width={24} height={23} />
                                <Typography
                                    {...styles.bottomTypography}
                                    variant="h6"
                                >
                                    {props.pdfTitle}
                                </Typography>
                            </Box>
                            <Box sx={{ cursor: "pointer" }}>
                                <DeleteIcon fill={"#D82A2A"} />
                            </Box>
                        </Box>

                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default DocumentsCard;
