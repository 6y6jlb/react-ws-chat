// @flow
import * as React from 'react';
import {useContext, useState} from 'react';
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Loader} from "../Loader/Loader";
import firebase from "firebase";

type Props = {};
export const Chat: React.FC<Props> = () => {
    const [value, setValue] = useState ( '' )
    const {auth, firestore} = useContext ( Context )
    const [user] = useAuthState ( auth )
    const [messages, loading] = useCollectionData (
        firestore.collection ( 'messages' ).orderBy('createdAt', 'desc')
    )



    const sendMessage = async () => {
        firestore.collection ( 'messages' ).add ( {
            uid: user?.uid,
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp ()
        } )
        setValue ( '' )
    }

    if (loading) return <Loader/>

    return (
        <Container>
            <Grid container alignItems={ "center" } justify={ "center" } style={ {height: window.innerHeight - 30} }>
                <div style={ {width: '80%', height: '70vh', backgroundColor:'#f50057', overflowY: 'auto'} }>
                    { messages && messages.map ( mes => {
                        return <div style={ {
                            margin: 10,
                            backgroundColor: user?.uid === mes.uid ? '#a8023d' : '#fd2a75',
                            color: '#ffffff',
                            borderRadius:'2%',
                            marginLeft: user?.uid === mes.uid ? 'auto' : '10px',
                            maxWidth:'40%',
                            width: 'fit-content',
                            padding: 15
                        } }>
                            <Grid direction={"column"} style={{rowGap:5}}  container>
                                <Avatar src={ mes.photoUrl }/>
                                <h3>{ mes.displayName }</h3>
                                <span >{ mes.text }</span>
                            </Grid>
                        </div>
                    } ) }

                </div>
                <Grid  container direction={ 'column' } alignItems={ 'flex-end' } style={ {width: '80%',rowGap:20,color:'#ffffff'} }>
                    <TextField  variant="filled" color={'secondary'} style={{backgroundColor:'#f50057'}} onChange={ e => setValue ( e.currentTarget.value ) } value={ value } fullWidth
                               rowsMax={ 2 }
                               />
                    <Button  style={{backgroundColor:'#f50057',color:'#ffffff'}} onClick={ sendMessage } variant={ 'outlined' }>send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};