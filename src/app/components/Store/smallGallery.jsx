import { React, useRef, useState, useEffect } from "react";


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
        //  scrollSnapType: "x mandatory",
        // scrollBehavior: "smooth",
        backgroundColor: "transparent",
        touchAction: "pinch-zoom"
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
        //objectFit: "contain",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "95%"
    }
}));

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

function SmallGallery(props) {

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
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [initialScroll, setInitialScroll] = useState(0);

    function handleTouchStart(e) {
        let current = slider.current;
        setInitialScroll(current.scrollLeft);
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        let current = slider.current;
        let diff = e.targetTouches[0].clientX - touchStart;
        setTouchEnd(e.targetTouches[0].clientX);
        current.scrollLeft = initialScroll - diff;
    }

    function handleTouchEnd() {
        let current = slider.current;
        const diff = touchEnd - touchStart;
        const percentage = diff / windowDimensions.width;
        if (percentage > 0.6 && initialScroll > offset) {
            let previous = parseInt(initialScroll / (windowDimensions.width + offset)) - 1;
            current.scrollLeft = previous * (windowDimensions.width + offset) + offset / 2;
        } else if (percentage < -0.6 && current.scrollWidth - current.scrollLeft - windowDimensions.width > offset) {
            let next = parseInt(initialScroll / (windowDimensions.width + offset)) + 1;
            current.scrollLeft = next * (windowDimensions.width + offset) + offset / 2;
        } else {
            current.scrollLeft = initialScroll;
        }

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
                        <img
                            className={classes.imageSlide}
                            src={item.img}
                        />
                    </figure>
                ))}
            </div>
        </div>
    );

}

export default SmallGallery;