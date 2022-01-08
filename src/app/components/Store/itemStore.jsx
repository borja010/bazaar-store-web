import { React, useState } from "react";

import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { makeStyles } from "@mui/styles";

import ItemDescription from "app/components/Store/itemDescription";
import ItemOrder from "app/components/Store/itemOrder";
import ItemThumbnails from "app/components/Store/itemThumbnails";
import SmallGallery from "app/components/Store/smallGallery";

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        backgroundColor: "transparent",
        height: "500px",
        width: "100%"
    },
    image: {
        height: "100%",
        width: "95%",
        cursor: "crosshair"
    },
    selectedImage: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    wrapper: {
        display: "none"
    }
}));

function ItemStore() {

    let item = {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        price: "200",
        currency: "Q",
        url: "",
        stock: 20,
        rating: 4.5,
        imgs: [
            {
                title: "1",
                img: "https://drive.google.com/uc?export=view&id=1QhU0hmS5p-u2FmtmOr1fLC2lDrlPfzjZ",
                url: ""
            },
            {
                title: "2",
                img: "https://drive.google.com/uc?export=view&id=1MSHi-tIgLAa9fNzoXZq3kVD_jC_gGwfy",
                url: ""
            },
            {
                title: "3",
                img: "https://drive.google.com/uc?export=view&id=1L5IVQOLW4IkVMLOrytd1RVFjIAWKNytO",
                url: ""
            }, {
                title: "4",
                img: "https://drive.google.com/uc?export=view&id=1jjMC5ChrKNzq5kpZie7v95Xeo6qN0zTr",
                url: ""
            },
            {
                title: "5",
                img: "https://drive.google.com/uc?export=view&id=1ApScDvxLdr4fmDdk3aEKcIeQePnDnc3M",
                url: ""
            },
            {
                title: "6",
                img: "https://drive.google.com/uc?export=view&id=1MIHcMERyE5AlhiI0IFsOnj0Sl8-4gN4Q",
                url: ""
            },
            {
                title: "7",
                img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                url: ""
            },
            {
                title: "8",
                img: "https://drive.google.com/uc?export=view&id=1QhU0hmS5p-u2FmtmOr1fLC2lDrlPfzjZ",
                url: ""
            },
            {
                title: "9",
                img: "https://drive.google.com/uc?export=view&id=1MSHi-tIgLAa9fNzoXZq3kVD_jC_gGwfy",
                url: ""
            },
            {
                title: "10",
                img: "https://drive.google.com/uc?export=view&id=1L5IVQOLW4IkVMLOrytd1RVFjIAWKNytO",
                url: ""
            },
            {
                title: "11",
                img: "https://drive.google.com/uc?export=view&id=1jjMC5ChrKNzq5kpZie7v95Xeo6qN0zTr",
                url: ""
            },
            {
                title: "12",
                img: "https://drive.google.com/uc?export=view&id=1ApScDvxLdr4fmDdk3aEKcIeQePnDnc3M",
                url: ""
            },
            {
                title: "13",
                img: "https://drive.google.com/uc?export=view&id=1MIHcMERyE5AlhiI0IFsOnj0Sl8-4gN4Q",
                url: ""
            },
            {
                title: "14",
                img: "https://drive.google.com/uc?export=view&id=1uJkL3dYI4SZV6WOf3KP4BzxfMP8DkOiS",
                url: ""
            }
        ]
    };

    let { id } = useParams();

    const classes = useStyles();

    const HALF_AREA = 75;

    const [image, setImage] = useState(item.imgs[0]);
    const [[x, y], setPos] = useState([0, 0]);
    const [[zoomWidth, zoomHeight], setZoom] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false)
    const [[top, width, height], setArea] = useState([0, 0, 0]);

    function setNewImage(newImage) {
        setImage(newImage);
    }

    function handleMouseEnter(e) {
        setShowMagnifier(true);
        const elem = e.currentTarget;
        const { top, width, height } = elem.getBoundingClientRect();
        setArea([top + window.pageYOffset, width, height]);
    }

    function handleMouseLeave() {
        setShowMagnifier(false);
    }

    function handleMouseMove(e) {
        var posX = e.pageX;
        var posY = e.pageY;
        const elem = e.currentTarget;
        const { top, bottom, left, right } = elem.getBoundingClientRect();
        const offsetTop = window.pageYOffset + top;
        const offsetBottom = window.pageYOffset + bottom;
        setZoom([(width / (HALF_AREA * 2)).toFixed(2), (height / (HALF_AREA * 2)).toFixed(2)]);
        if (posX < left + HALF_AREA) {
            posX = left + HALF_AREA;
        }
        if (posX > right - HALF_AREA) {
            posX = right - HALF_AREA;
        }
        if (posY > offsetBottom - HALF_AREA) {
            posY = offsetBottom - HALF_AREA;
        }
        if (posY < offsetTop + HALF_AREA) {
            posY = offsetTop + HALF_AREA;
        }
        setPos([posX, posY]);
    }



    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                            <SmallGallery item={item} />
                        </Grid>
                        <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Stack direction="row" className={classes.imageWrapper}>
                                {item.imgs.map((item) => (
                                    <figure
                                        className={image.title === item.title ? classes.selectedImage : classes.wrapper}
                                        key={item.title}
                                    >
                                        <img
                                            src={item.img}
                                            className={classes.image}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            onMouseMove={handleMouseMove}
                                        />
                                        <div
                                            style={{
                                                display: showMagnifier ? "" : "none",
                                                position: "absolute",
                                                cursor: "crosshair",
                                                backgroundColor: "rgba(173,216,230,0.5)",
                                                pointerEvents: "none",
                                                height: `${HALF_AREA * 2}px`,
                                                width: `${HALF_AREA * 2}px`,
                                                top: `${y - HALF_AREA}px`,
                                                left: `${x - HALF_AREA}px`
                                            }}
                                        >
                                        </div>
                                    </figure>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <ItemThumbnails item={item} selectImage={setNewImage} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ItemDescription item={item} />
                    <div
                        style={{
                            display: showMagnifier ? "block" : "none",
                            position: "absolute",
                            overflow: "hidden",
                            zIndex: 199,
                            boxShadow: "rgb(0 0 0 / 25%) 0px x`6px 8px 2px",
                            width: `${width}px`,
                            height: `${height}px`,
                            backgroundColor: "white",
                            top: `${top}px`
                        }}
                    >
                        <img src={image.img}
                            style={{
                                height: `${height * zoomHeight}px`,
                                width: `${width * zoomWidth}px`,
                                position: "absolute",
                                overflow: "hidden",
                                top: `${-(y - 2 * HALF_AREA) * zoomHeight}px`,
                                left: `${-(x - HALF_AREA) * zoomWidth}px`,
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ItemOrder item={item} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ItemStore;