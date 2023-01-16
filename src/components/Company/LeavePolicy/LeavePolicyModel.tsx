import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl/FormControl';
import { TextareaAutosize } from '@mui/base';
import { globalStyles } from "../../../styles/global";
import { styles } from '../../../styles/components/uploadLeavePolicy';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};
export default function LeavePolicyMode({
    handleOpen,
    handleClose,
    open
}: {
    handleOpen: any,
    handleClose: any,
    open: any
}) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>view mode</Typography>
                </Box>
            </Modal>
        </div >
    );
}