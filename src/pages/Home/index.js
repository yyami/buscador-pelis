import React, {useState} from 'react';
import {Container, Typography,Card, Grid, TextField, Button} from '@material-ui/core';

import styles from './style';


export default () => {
    const [searhText, setSearchText] = useState('');
    const classes = styles();

    const handleSearchTextChange = event =>{
       setSearchText(event.target.value);
    };

    const handleCleanTextClick = event =>{
        console.log(10)
    };

    const handleSearchTextClick = event =>{
        console.log(10)
    };
 
   
    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>
                            BIENVENIDO!
                        </Typography>
                    </Grid>
                    <Grid>
                        <label>
                            icono
                        </label>
                    </Grid>
                </Grid >
                <TextField
                    value= {searhText}
                    placeholder="Buscar.."
                    className={classes.textFieldSearch}
                    onChange={ handleSearchTextChange }/> 
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>          
            </Card>
         
        </Container>
        )
    }