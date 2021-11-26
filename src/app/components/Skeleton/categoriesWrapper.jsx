import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    imageList:{
        overflowY: "unset"
    },
    cardContainer: {
        height: "100%",
        padding: "5px"
    },
    card: {
        width: "100%"
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
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                },
                {
                    title: "dos",
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                },
                {
                    title: "tres",
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                }
            ],
        },
        {
            name: "Deportes",
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
                },
                {
                    title: "tres",
                    img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                    url: ""
                },
                {
                    title: "cuatro",
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

function Categories(props) {

    const classes = useStyles();

    let imgs = props.imgs;
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
        default:

    }

    return (
        <Card variant="outlined">
            <ImageList className={classes.imageList} rowHeight={100}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{props.title}</ListSubheader>
                </ImageListItem>
                {imgs.map((item, index) => (
                    <ImageListItem key={item.title} cols={cols[index] | 1} rows={rows[index] | 1}>
                        <img src={item.img} alt={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Card>
    );
}

export default CategoriesWrapper;
