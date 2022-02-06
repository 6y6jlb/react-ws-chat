import * as React from 'react';
import {Grid, Radio, RadioGroup} from "@mui/material";
import styles from './styles';
import {FormattedMessage, useIntl} from "react-intl";
import classNames from "classnames";
import {WithStyles, withStyles} from "@mui/styles";


interface IProps extends WithStyles<typeof styles>{
    title?:  React.ReactNode
    isTable?: boolean
}

const RadioButtons: React.FC<IProps> = (props) => {
    const {children,title,isTable,classes} = props;
    const [selectedValue, setSelectedValue] = React.useState('a');
    const intl = useIntl()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };


    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {title && title}
            <RadioGroup  name="use-radio-group"
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

export default withStyles(styles)(RadioButtons);