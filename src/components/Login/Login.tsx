import {Box, Button, Container, Grid } from '@mui/material';
import * as React from 'react';



export const Login: React.FC<Props> = () => {

    const login = async () => {
        
    }

    return (
        <Container>
            <Grid container alignItems={"center"}  style={{height: window.innerHeight - 30}}>
                <Grid container alignItems={"center"} style={{width: 400, backgroundColor: 'lightpink'}}>
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Войти с богом</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
type Props = {};
