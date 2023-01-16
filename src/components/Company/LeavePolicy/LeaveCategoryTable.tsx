import React from 'react'
import { Button, Card, Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import AddIcon from "@mui/icons-material/Add";
import { styles } from '../../../styles/components/leaveCategoryTable';

const LeaveCategoryTable = ({
    rows,
    columns
}: {
    rows: any,
    columns: any
}) => {
    return (
        <Card sx={{ p: 3 }}>
            <Grid container spacing={2}>
                <Grid item lg={11}>
                    <DataGrid
                        {...styles.dataGrid}
                        getRowId={(row) => row.id}
                        autoHeight={true}
                        rows={rows}
                        columns={columns}
                        hideFooterPagination={true}
                        hideFooter={true}
                    />
                </Grid>
                <Grid item lg={1}>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        {...styles.addBtn}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>

        </Card>
    )
}

export default LeaveCategoryTable