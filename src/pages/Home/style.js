import { makeStyles, TextField } from '@material-ui/core';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};


export default makeStyles({
        container: {
            flexDirection: 'column',
            height: '100vh',
            ...centeredStyleObj
        },

        cardContainer: {
            flexDirection: 'column',
            width: 400,
            height: 200,
            padding: '2rem',
            ...centeredStyleObj
        },

        title: {
            fontSize: '4rem'
        },

        titleGridContainer: {
            ...centeredStyleObj
        },

        textFieldSearch: {
            width: '90%'
        },

        searchButton: {
            marginLeft: '.5rem'
        },

        buttonContainer: {
            marginTop: '.5rem'
        }
    });