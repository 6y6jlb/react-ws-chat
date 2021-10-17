// @flow
import * as React from 'react';
import {CircularProgress, Container, Grid} from "@material-ui/core";

type Props = {

};
export const Loader = (props: Props) => {
    return (
        <Container>
            <Grid container alignItems={"center"} justify={"center"} style={{height: window.innerHeight-30}}>

                    <CircularProgress color="secondary" />

            </Grid>
        </Container>
    );
};