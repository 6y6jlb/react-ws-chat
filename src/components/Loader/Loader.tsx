// @flow
import {CircularProgress, Container, Grid} from '@mui/material';
import * as React from 'react';


type Props = {

};
export const Loader = (props: Props) => {
    return (
        <Container>
            <Grid container alignItems={"center"} justifyContent={"center"} style={{height: window.innerHeight-30}}>
                    <CircularProgress color="primary" />
            </Grid>
        </Container>
    );
};