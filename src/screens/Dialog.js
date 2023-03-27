import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
// import { useState } from 'react';

const Dialogue = (props) => {

    const text = props.description;
    const paragraphs = text.split('\n\n');

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{fontSize: 30,}}>
                    {props.title}
                </DialogTitle>
                {paragraphs.map((para) => (
                    <DialogContentText id="alert-dialog-description" sx={{ mx: 3, my: 1 }}>
                        {para}
                    </DialogContentText>
                ))}
                <DialogActions>
                    <Button sx={{ color: 'black' }} onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Dialogue;