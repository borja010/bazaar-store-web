import React, { useState, forwardRef } from "react";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { makeStyles } from "@mui/styles";

import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        borderRadius: "34px",
        width: "34px",
        height: "34px",
        cursor: "pointer"
    },
    img: {
        height: "auto",
        width: "50%",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        border: "1px solid transparent"

    }
}));


function SocialNetworkLogo(props) {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const openUrl = () => {
        if (props.url) {
            window.open(props.url);
        } else {
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box px={1}>
                <div className={classes.imageWrapper} style={{ backgroundColor: props.backgroundColor }} onClick={openUrl}>
                    <img className={classes.img} src={props.img} alt={props.alt} />
                </div>
            </Box>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle >{"URL no configurada"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Aun no se ha configurado una ruta para este icono.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SocialNetworkLogo;