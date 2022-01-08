import React, { Children, cloneElement } from "react";

import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    ul: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
    }
}));

function FooterWrapper({items, children}) {
    const classes = useStyles();

    let auxItems = items.sort((a, b) => { return a.order - b.order });

    return (
        <Box py={1}>
            <ul className={classes.ul}>
                {auxItems.map((item) =>
                    <li key={item.order}>
                        {Children.map(children,
                            child => {
                                return cloneElement(child, {...item});
                            })}
                    </li>
                )}
            </ul>
        </Box>
    );
}

export default FooterWrapper;