import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card/Card'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { styles } from '../../../styles/components/LeavePolicyCard'
import DeleteIcon from '../../Icons/DeleteIcon'
import PdfIcon from '../../Icons/PdfIcon'

const LeavePolicyCard = ({
    handleOpen
}: {
    handleOpen: any
}) => {
    return (
        <Grid container spacing={2}>
            <Grid item lg={12}>
                <Card variant="outlined"
                    onClick={handleOpen}
                    {...styles.leavePolicyCard}
                >
                    <Grid item lg={12}
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Box
                            {...styles.deleteIconBox}
                        >
                            <DeleteIcon />
                        </Box>
                    </Grid>
                    <Grid item lg={12}
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <PdfIcon
                            width={49}
                            height={48}
                        />
                    </Grid>
                    <Grid item lg={12}

                    >
                        <Box
                            sx={{
                                borderTop: "1px solid #C5C7CD",
                                mt: 5,
                                pt: 2,
                                display: "flex"
                            }}
                        >
                            <PdfIcon
                                width={24}
                                height={23}
                            />
                            <Typography variant="h6"
                                sx={{ fontSize: "14px", ml: 1 }}
                            >
                                Leave Policy.PDF
                            </Typography>
                        </Box>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LeavePolicyCard