import React, { useState, forwardRef } from "react";

import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from "@material-ui/core/styles";

import Slide from '@material-ui/core/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    ul: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
    },
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
    const classes = useStyles();

    let items = props.images.sort((a, b) => { return a.order - b.order });

    return (
        <Box py={1} alignContent="center">
            <ul className={classes.ul}>
                {items.map((item) =>
                    <li key={item.order}>
                        <Item img={item.img} backgroundColor={item.backgroundColor} url={item.url} />
                    </li>
                )}
            </ul>
        </Box>
    );
}

function Item(props) {

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