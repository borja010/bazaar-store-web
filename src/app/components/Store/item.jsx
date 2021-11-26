import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    selectedImage: {
        width: "100%"
    },
    imageListItem: {
        cursor: "pointer"
    }
}));

function Item() {
    let { id } = useParams();

    const classes = useStyles();

    let item = {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        height: "400",
        url: "",
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
        ]
    };

    let selectedImage = item.imgs[0];

    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} md={3}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} md={12}>
                            <Box>
                                <img className={classes.selectedImage} src={selectedImage.img} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ImageList className={classes.imageList} cols={2.5}>
                                {item.imgs.map((item) => (
                                    <ImageListItem key={item.title} className={classes.imageListItem}>
                                        <img src={item.img} alt={item.title} />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                              
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Item;