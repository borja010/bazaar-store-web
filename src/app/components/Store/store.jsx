import React from "react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    image: {
        objectFit: "contain !important",
    }
}));

function Store() {

    let items = [
        {
            id: 1,
            name: "Item 1",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS"
        }, {
            id: 2,
            name: "Item 2",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1QhU0hmS5p-u2FmtmOr1fLC2lDrlPfzjZ"
        },
        {
            id: 3,
            name: "Item 3",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1MSHi-tIgLAa9fNzoXZq3kVD_jC_gGwfy"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1L5IVQOLW4IkVMLOrytd1RVFjIAWKNytO"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1jjMC5ChrKNzq5kpZie7v95Xeo6qN0zTr"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1ApScDvxLdr4fmDdk3aEKcIeQePnDnc3M"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1MIHcMERyE5AlhiI0IFsOnj0Sl8-4gN4Q"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Descripcion del item 1",
            price: "250",
            currency: "Q",
            rating: 3.5,
            img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS"
        }
    ];

    const classes = useStyles();

    return (
        <Grid container>
            <Grid container direction="row" alignItems="center">
                {items.map((item) => (
                    <Grid item xs={12} md={3} p={2} key={item.id}>
                        <Box sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper", margin: "auto" }}>
                            <Box sx={{ my: 3, mx: 2 }}>
                                <Paper variant="outlined" sx={{ backgroundColor: "rgb(234, 238, 243)" }}>
                                    <img
                                        className={classes.image}
                                        height="170"
                                        width="100%"
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy" />
                                </Paper>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography color="text.secondary" variant="body2">
                                    <Rating name="read-only" value={item.rating} precision={0.5} readOnly />    (5)
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.currency} {item.price}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default Store;