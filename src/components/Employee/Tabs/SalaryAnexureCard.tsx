import React from 'react'
import { Card, Box } from '@mui/material'
import SalaryAnexureIcon from '../../Icons/SalaryAnexureIcon';
import { styles } from '../../../styles/components/document(company)';

const SalaryAnexureCard = () => {
    return (
        <Card variant="outlined" {...styles.salaryAnexCard}>
            <Box {...styles.salaryAnexIcon}>
                <SalaryAnexureIcon />
            </Box>
        </Card>
    )
}

export default SalaryAnexureCard