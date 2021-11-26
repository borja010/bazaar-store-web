import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";

const CarouselWrapper = (props) => {

    let height  = Math.max.apply(Math, props.items.map(x => x.height));

    return (
        <Carousel navButtonsAlwaysVisible={true} interval={props.interval || 3000}>
            { props.items.map((item, i) => <Item key={i} item={item} height={height} />)}
        </Carousel>
    );
};

function Item(props) {
    return (
        <Paper variant="outlined">
            <img style={{maxHeight: props.height, minHeight: props.height}}  src={props.item.img} alt="Logo" />
        </Paper>
    )
}

export default CarouselWrapper;