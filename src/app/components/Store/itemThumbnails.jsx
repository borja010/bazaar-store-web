import { React, useRef, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    horizontalContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 0,
        overflowX: "hidden",
        overflowY: "hidden",
        whiteSpace: "nowrap"
    },
    listItem: {
        paddingTop: "0",
        paddingBottom: "0",
        paddingLeft: "5px",
        paddingRight: "5px"
    },
    imageItem: {
        width: "64px",
        height: "64px",
        cursor: "pointer"
    }
}));

function ItemThumbnails(props) {

    const element = useRef(null);

    const [touchStart, setTouchStart] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [maxScroll, setMaxScroll] = useState(-1);

    let distance = 76;

    useEffect(() => {
        let current = element.current;
        setMaxScroll(current.scrollWidth - current.clientWidth);
    }, []);

    const classes = useStyles();

    function leftScroll() {
        let current = element.current;
        current.scrollLeft -= distance;
        setScroll(parseInt(current.scrollLeft));
    }

    function rightScroll() {
        let current = element.current;
        current.scrollLeft += distance;
        setScroll(parseInt(current.scrollLeft));
    }

    function selectImage(image) {
        props.selectImage(image);
    }

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        let diff = (touchStart - e.targetTouches[0].clientX) / 5;
        let current = element.current;
        current.scrollLeft += diff;
        setScroll(parseInt(current.scrollLeft));
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={1}>
                <IconButton
                    color="primary"
                    aria-label="Left scroll"
                    component="span"
                    size="large"
                    disabled={scroll === 0}
                    onClick={leftScroll}
                    sx={{ p: 0 }}
                >
                    <ArrowLeftRoundedIcon />
                </IconButton>
            </Grid>
            <Grid item xs={10}>
                <List className={classes.horizontalContainer}
                    ref={element}
                    onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                    onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
                >
                    {props.item.imgs.map((item) => (
                        <ListItem key={item.title} className={classes.listItem}>
                            <Card
                                variant="outlined"
                                component="a"
                                href={"#" + item.title}
                            >
                                <CardMedia
                                    className={classes.imageItem}
                                    component="img"
                                    src={item.img}
                                    alt={item.title}
                                    onMouseEnter={() => selectImage(item)}
                                />
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs={1}>
                <IconButton
                    color="primary"
                    aria-label="Right scroll"
                    component="span"
                    size="large"
                    disabled={scroll === maxScroll}
                    onClick={rightScroll}
                    sx={{ p: 0 }}
                >
                    <ArrowRightRoundedIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default ItemThumbnails;