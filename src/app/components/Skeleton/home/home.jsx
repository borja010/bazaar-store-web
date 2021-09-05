import React, { useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CarouselWrapper from "app/components/Skeleton/carouselWrapper/carouselWrapper";
import CategoriesWrapper from "app/components/Skeleton/categoriesWrapper/categoriesWrapper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        height: "100%",
        padding: "5px"
    },
    card: {
        width: "100%"
    }
}));


function Home() {

    const classes = useStyles();

    let images = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            height: "400",
            img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
            url: ""
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            height: "500",
            img: "https://drive.google.com/uc?export=view&id=1HQvBfYY10lpm9z897Oi3qnh2MtevnMY6",
            url: ""
        }
    ];

    let information = [
        {
            title: "What is Lorem Ipsum?",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Where does it come from?",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
            title: "Why do we use it?",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
            title: "Where can I get some?",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
    ];

    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs>
                    <CarouselWrapper items={images} />
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
                {information.map((item) =>
                    <Grid item xs={12} md={4} key={item.title}>
                        <Grid container justifyContent="center" className={classes.cardContainer}>
                            <Card className={classes.card} variant="outlined">
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                )}
            </Grid>
            <Grid container direction="row" justifyContent="center">
                <CategoriesWrapper />
            </Grid>
        </Grid>
    );
}

export default Home;