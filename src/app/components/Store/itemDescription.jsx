import { React } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function ItemDescription(props) {

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper'  }} mt={2}>
            <Box mb={2}>
                <Grid container direction="column" alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            {props.item.name}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography color="text.secondary" variant="body2">
                            {props.item.description}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography color="text.secondary" variant="body2">
                            <Rating name="read-only" value={props.item.rating} precision={0.5} readOnly />    (5 valoraciones)
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" />
            <Box my={2}>
                <Typography color="text.secondary" variant="h6">
                    Precio: {props.item.currency} {props.item.price}
                </Typography>
            </Box>
        </Box>
    );
}

export default ItemDescription;