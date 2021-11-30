import { React, useState } from "react";

import ItemThumbnails from "./itemThumbnails";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import IconButton from '@mui/material/IconButton';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useParams } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import ItemDescription from "app/components/Store/itemDescription";
import ItemOrder from "app/components/Store/itemOrder";

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%"
    }
}));

function Item() {

    let item = {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        price: "200",
        currency: "Q",
        url: "",
        stock: 20,
        rating: 4.5,
        imgs: [
            {
                title: "uno",
                img: "https://drive.google.com/uc?export=view&id=1QhU0hmS5p-u2FmtmOr1fLC2lDrlPfzjZ",
                url: ""
            },
            {
                title: "dos",
                img: "https://drive.google.com/uc?export=view&id=1MSHi-tIgLAa9fNzoXZq3kVD_jC_gGwfy",
                url: ""
            },
            {
                title: "tres",
                img: "https://drive.google.com/uc?export=view&id=1L5IVQOLW4IkVMLOrytd1RVFjIAWKNytO",
                url: ""
            },
            {
                title: "cuatro",
                img: "https://drive.google.com/uc?export=view&id=1jjMC5ChrKNzq5kpZie7v95Xeo6qN0zTr",
                url: ""
            },
            {
                title: "cinco",
                img: "https://drive.google.com/uc?export=view&id=1ApScDvxLdr4fmDdk3aEKcIeQePnDnc3M",
                url: ""
            },
            {
                title: "seis",
                img: "https://drive.google.com/uc?export=view&id=1MIHcMERyE5AlhiI0IFsOnj0Sl8-4gN4Q",
                url: ""
            },
            {
                title: "siete",
                img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                url: ""
            },

        ]
    };

    let { id } = useParams();

    const classes = useStyles();

    const [cursor, setCursor] = useState(0);

    const [image, setImage] = useState(item.imgs[0]);

    function moveRight() {
        let temp = cursor + 1;
        setCursor(temp);
        setImage(item.imgs[temp]);
    }

    function moveLeft() {
        let temp = cursor - 1;
        setCursor(temp);
        setImage(item.imgs[temp]);
    }

    function setNewImage(newImage) {
        setImage(newImage);
    }

    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12}>
                            <Box>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={1}>
                                        <IconButton
                                            color="primary"
                                            aria-label="Left selection"
                                            component="span"
                                            disabled={cursor === 0}
                                            size="large"
                                            onClick={moveLeft}
                                        >
                                            <ArrowBackIosIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Box className={classes.imageWrapper}>
                                            <img className={classes.image} src={image.img} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton
                                            color="primary"
                                            aria-label="Right selection"
                                            component="span"
                                            disabled={cursor === item.imgs.length - 1}
                                            size="large"
                                            onClick={moveRight}
                                        >
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <ItemThumbnails item={item} selectImage={setNewImage} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ItemDescription item={item} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ItemOrder item={item} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Item;