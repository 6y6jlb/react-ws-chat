import {Alert, AlertTitle, Grow, Typography} from '@mui/material';
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";
import {useStyles} from './styles';
import {observer} from "mobx-react-lite";


const ErrorsLayout: React.FC<IProps> = observer((props) => {
    const styles = useStyles();
    const {children} = props;
    const [showError, setShowError] = useState(false)
    const {errorStore} = useContext(StoreContext);
    const lastError = errorStore.errors[errorStore.errors.length - 1];
    useEffect(() => {
        if (errorStore.errors.length) {
            setShowError(true);
            setTimeout(() => {
                setShowError(false)
            }, 4000)
        }
    }, [errorStore.errors.length])

    return (
        <>
            <div className={styles.root}>
                <Grow
                    in={showError}
                    style={{transformOrigin: '0 0 0'}}
                    {...(showError ? {timeout: 700} : {})}
                >
                    {<Alert severity="error">
                        <AlertTitle>Error {lastError?.code}</AlertTitle>
                        <Typography variant={'h6'}>{lastError?.message}</Typography>
                    </Alert>
                    }
                </Grow>
            </div>
            {children}
        </>
    );
});


export default ErrorsLayout;

interface IProps {
}