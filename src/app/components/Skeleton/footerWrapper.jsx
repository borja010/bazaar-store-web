import React, { Children, cloneElement } from "react";

import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

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

function FooterWrapper(props) {
    const classes = useStyles();

    let items = props.items.sort((a, b) => { return a.order - b.order });

    return (
        <Box py={1}>
            <ul className={classes.ul}>
                {items.map((item) =>
                    <li key={item.order}>
                        {Children.map(props.children,
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