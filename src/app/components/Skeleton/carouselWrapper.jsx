import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";

const CarouselWrapper = ({ items, interval }) => {

    let height = Math.max.apply(Math, items.map(x => x.height));

    return (
        <Carousel navButtonsAlwaysVisible={true} interval={interval || 3000}>
            {items.map((item, i) => <Item key={i} item={item} height={height} />)}
        </Carousel>
    );
};

function Item({ item, height }) {
    return (
        <Paper variant="outlined">
            <img style={{ maxHeight: height, minHeight: height }} src={item.img} alt="Logo" />
        </Paper>
    )
}

export default CarouselWrapper;