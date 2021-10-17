import * as React from 'react';
import {useReducer} from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {Loader} from "../Loader/Loader";
import {IMessage, initialState, reducer, setMessageValue} from "../App/reducer";


type Props = {};
export const Chat: React.FC<Props> = () => {
    const [state, dispatch] = useReducer ( reducer, initialState );
    const sendMessage = () => {
        const message = {
            event: 'message',
            id: Date.now().toString(),
            name: state.me.name,
            body:state.messageValue,
        };

        state.socket?.send ( JSON.stringify(message));
        dispatch(setMessageValue(''))
    };

    if (state.isLoading) return <Loader/>;
    return (
        <Container>
            <Grid container alignItems={ "center" }  style={ {height: window.innerHeight - 30} }>
                <div style={ {width: '80%', height: '70vh', backgroundColor:'#243146', overflowY: 'auto'} }>
                    { state.messages && state.messages.map ((mes:IMessage) => {
                        return <div style={ {
                            margin: 10,
                            //backgroundColor: user?.uid === mes.uid ? '#a8023d' : '#fd2a75',
                            color: '#ffffff',
                            borderRadius: '2%',
                            // marginLeft: user?.uid === mes.uid ? 'auto' : '10px',
                            maxWidth: '40%',
                            width: 'fit-content',
                            padding: 15,
                        } }>*
                            <Grid direction={ "column" } style={ {rowGap: 5} } container>
                              {/*  <Avatar src={ mes.photoUrl }/>*/}
                                <h3>{ mes.name }</h3>
                                <span>{ mes.body }</span>
                            </Grid>
                        </div>
                    })}

                </div>
                <Grid container direction={ 'column' } alignItems={ 'flex-end' }
                      style={ {width: '80%', rowGap: 20, color: '#ffffff'} }>
                    <TextField variant="filled" onChange={ e => dispatch(setMessageValue(e.currentTarget.value))  } value={ state.messageValue } fullWidth
                    />
                    <Button style={ {backgroundColor: '#243146', color: '#ffffff'} } onClick={ sendMessage }
                            variant={ 'outlined' }>send</Button>

                </Grid>
            </Grid>
        </Container>
    );
};