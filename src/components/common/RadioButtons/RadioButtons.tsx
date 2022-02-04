import * as React from 'react';
import {Grid, Radio, RadioGroup} from "@mui/material";
import {useStyles} from './styles';
import {FormattedMessage, useIntl} from "react-intl";


interface IProps {
    title?:  React.ReactNode
}

export const RadioButtons: React.FC<IProps> = (props) => {
    const {children,title} = props;
    const [selectedValue, setSelectedValue] = React.useState('a');
    const styles = useStyles();
    const intl = useIntl()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };


    return (
        <Grid container justifyContent={"center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {title && title}
            <RadioGroup title={intl.formatMessage({id: 'theme'})} classes={{root: styles.root}} name="use-radio-group"
                        defaultValue="first" row>

                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{'aria-label': 'A'}}
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{'aria-label': 'B'}}
                />
            </RadioGroup>
        </Grid>
    );
};