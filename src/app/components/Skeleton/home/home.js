import React, { useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { Context } from "app/context/store";

import CarouselWrapper from "app/components/Skeleton/carouselWrapper/carouselWrapper";
import "./home.scss";

function Home() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS"
        }
    ]

    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} md={4}>
                    <CarouselWrapper items={items} />
                </Grid>
            </Grid>
            
        </Grid>
    );
}

export default Home;