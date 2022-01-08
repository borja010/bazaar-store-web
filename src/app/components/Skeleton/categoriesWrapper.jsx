import React from "react";

import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    cardContainer: {
        height: "100%",
        padding: "5px"
    },
    card: {
        width: "100%"
    },
    imageList: {
        overflowY: "unset",
        height: "300px",
        width: "300px"
    },
    image: {
        width: "100% !important",
        height: "100% !important",
        objectFit: "contain !important"
    }
}));


function CategoriesWrapper() {

    const classes = useStyles();

    let categories = [
        {
            name: "Electronicos",
            description: "",
            imgs: [
                {
                    title: "uno",
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                }
            ],
        },
        {
            name: "Computadoras",
            description: "",
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
                }
            ],
        },
        {
            name: "Deportes",
            description: "",
            imgs: [
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
                }
            ],
        }, {
            name: "Comida",
            description: "",
            imgs: [
                {
                    title: "uno",
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                },
                {
                    title: "dos",
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                }
            ],
        },
    ];

    return (
        <Grid container direction="row" justifyContent="center">
            {
                categories.map((item) =>
                    <Grid item xs={12} md={3} key={item.name}>
                        <Grid container justifyContent="center" className={classes.cardContainer}>
                            <Categories {...item} title={item.name} />
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    );

}

function Categories({ imgs, title }) {

    const classes = useStyles();
    let length = imgs.length;

    let rows = [];
    let cols = [];

    switch (length) {
        case 1:
            rows = [2]; cols = [2];
            break;
        case 2:
            rows = [1, 1];
            cols = [2, 2];
            break;
        case 3:
            rows = [1, 1, 1];
            cols = [1, 1, 2];
            break;
        case 4:
            rows = [1, 1, 1, 1];
            cols = [1, 1, 1, 1];
            break;
        default:

    }

    return (
        <Card variant="outlined">
            <CardHeader
                subheader={title}
            />
            <ImageList className={classes.imageList} rowHeight={150}>
                {imgs.map((item, index) => (
                    <ImageListItem className={classes.imageListItem} key={item.title} cols={cols[index]} rows={rows[index]}>
                        <img
                            className={classes.image}
                            src={item.img}
                            alt={item.title}
                            loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Card>
    );
}

export default CategoriesWrapper;
