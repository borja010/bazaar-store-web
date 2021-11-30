import { React, useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function ItemOrder(props) {

    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} mt={2}>
            <Grid container direction="column" alignItems="center">
                <Grid item xs>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Nuevo" />
                        <Chip label="Disponible" />
                    </Stack>
                </Grid>
                <Grid item xs my={2}>
                    <FormControl sx={{ width: 200 }} size="medium">
                        <InputLabel>Cantidad</InputLabel>
                        <Select
                            labelId="Cantidad para ordenar"
                            value={quantity}
                            label="Cantidad"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Divider variant="middle"/>
            <Grid item xs my={2}>
                <Grid container direction="column" spacing={2} alignItems="center">
                    <Grid item xs>
                        <Button sx={{ width: 200 }} variant="contained" size="large">
                            Agregar al carrito
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button sx={{ width: 200 }} variant="contained" size="large" color="secondary">
                            Comprar ahora
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </Box >
    );
}

export default ItemOrder;