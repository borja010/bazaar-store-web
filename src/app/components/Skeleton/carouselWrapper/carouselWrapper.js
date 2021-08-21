import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";

const CarouselWrapper = (props) => {
    return (
        <Carousel navButtonsAlwaysVisible={true} interval={props.interval || 3000}>
            { props.items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
};

function Item(props) {
    return (
        <Paper variant="outlined">
            <img src={props.item.img} alt="Logo" />
        </Paper>
    )
}

export default CarouselWrapper;