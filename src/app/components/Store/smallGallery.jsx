import { React, useRef, useState, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    slider: {
        overflow: "hidden",
        height: "500px",
        textAlign: "center"
    },
    slides: {
        display: "flex",
        overflowX: "auto",
        backgroundColor: "gray",
        touchAction: "none"
    },
    slide: {
        scrollSnapAlign: "start",
        backgroundColor: "transparent",
        flexShrink: 0,
        height: "500px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    imageSlide: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "95%",
        transition: "all  0.5s ease-out"
    }
}));

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

function SmallGallery(props) {

    const [item, setItem] = useState(null);


    const slider = useRef(null);

    const classes = useStyles();

    const windowDimensions = getWindowDimensions();

    useEffect(() => {
        let current = slider.current;
        let temp = (current.scrollWidth / current.childElementCount) - windowDimensions.width;
        setOffset(temp);
        current.scrollLeft = temp / 2;
    }, [])

    const [offset, setOffset] = useState(0);
    const [touchStart, setTouchStart] = useState(-1);
    const [touchEnd, setTouchEnd] = useState(-1);
    const [initialScroll, setInitialScroll] = useState(0);

    const handleTouchStart = (e) => {
        let current = slider.current;
        setInitialScroll(current.scrollLeft);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        let current = slider.current;
        let diff = e.targetTouches[0].clientX - touchStart;
        setTouchEnd(e.targetTouches[0].clientX);
        current.scrollLeft = initialScroll - diff;
    }

    const handleTouchEnd = () => {
        let current = slider.current;
        const diff = touchEnd - touchStart;
        const percentage = diff / windowDimensions.width;
        const movement = touchStart != -1 && touchEnd != -1;
        const sign = Math.sign(diff);
        if (sign > 0) {
            if (movement && percentage > 0.4 && initialScroll > offset) {
                let previous = parseInt(initialScroll / (windowDimensions.width + offset)) - 1;
                let end = previous * (windowDimensions.width + offset) + offset / 2;
                moveIt(current, end, -25);
            } else {
                moveIt(current, initialScroll, 25);
            }
        } else if (sign < 0) {
            if (movement && percentage < -0.4 && current.scrollWidth - current.scrollLeft - windowDimensions.width > offset) {
                let next = parseInt(initialScroll / (windowDimensions.width + offset)) + 1;
                let end = next * (windowDimensions.width + offset) + offset / 2;
                moveIt(current, end, 25);
            } else {
                moveIt(current, initialScroll, -25);
            }
        }
    }

    const moveIt = (current, end, speed) => {
        var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
        let sign = Math.sign(speed);
        current.scrollLeft = current.scrollLeft + speed;
        if (sign > 0 && current.scrollLeft < end) {
            requestAnimationFrame(function (timestamp) {
                moveIt(current, end, speed);
            })
        } else if (sign < 0 && current.scrollLeft > end) {
            requestAnimationFrame(function (timestamp) {
                moveIt(current, end, speed);
            })
        } else {
            current.scrollLeft = end;
        }

    }

    const openItem = (item) => {
        setItem(item);
    }

    const closeItem = () => {
        setItem(null);
    }

    return (
        <div className={classes.slider}>
            <div
                className={classes.slides}
                ref={slider}
            >
                {props.item.imgs.map((item) => (
                    <figure
                        className={classes.slide}
                        key={item.title}
                        style={{ width: windowDimensions.width + "px" }}
                        id={item.title}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <ImageGallery
                            item={item}
                            openItem={openItem}
                        />
                    </figure>
                ))}
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={item != null}
            >
                <IconButton
                    aria-label="close"
                    size="large"
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "white"
                    }}
                    onClick={closeItem}
                >
                    <CloseIcon />
                </IconButton>
                {item &&
                    <img
                        src={item.img}
                    />
                }
            </Backdrop>
        </div>
    );

}


function ImageGallery(props) {

    const classes = useStyles();

    function openItem() {
        props.openItem(props.item);
    }

    return (
        <img
            className={classes.imageSlide}
            src={props.item.img}
            onClick={openItem}
        />
    )
}

export default SmallGallery;