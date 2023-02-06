import React from 'react'
import { Typography, Box } from '@mui/material'
import { styles } from 'styles/components/assetsMaster'
import { globalStyles } from 'styles/global'
import Category from './Category'
import { SubCategory } from './SubCategory'

const AssetsMaster = () => {
    return (
        <Box>
            {/* Title */}
            <Box {...styles.parentBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Asset Masters
                </Typography>
            </Box>
            {/* category started */}
            <Category />
            {/* sub category started */}
            <SubCategory />
        </Box>
    )
}

export default AssetsMaster