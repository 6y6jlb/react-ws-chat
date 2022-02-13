import * as React from 'react';
import {useStyles} from './styles';
import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import {IUser} from "../../service/AuthService";
import Badge, {Colors} from "../common/Badge";
import {IOptions} from '../../state/settingsStore';
import {FormattedMessage} from "react-intl";
import {SWITCHER} from "../../utils/const";

interface IProfileData extends IUser, IOptions {
}

interface IProps {
    data: IProfileData;
}


export const ProfileDataTable: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children, data} = props;
    const {id, name, language, email, location, isActivated, counterWidget, weatherWidget, theme} = data;
    return (
        <Table className={styles.tableRoot} aria-label="custom pagination table">
            <TableBody>
                <TableRow>
                    <TableCell> <FormattedMessage id={'name'}/></TableCell>
                    <TableCell align={'right'}>{name}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell> <FormattedMessage id={'language'}/></TableCell>
                    <TableCell align={'right'}>{language}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell> <FormattedMessage id={'email'}/></TableCell>
                    <TableCell align={'right'}>{email}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell> <FormattedMessage id={'country'}/></TableCell>
                    <TableCell align={'right'}>{location.country}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell> <FormattedMessage id={'widget.online_counter'}/></TableCell>
                    <TableCell align={'right'}><Badge
                        color={Colors.SUCCESS}>{counterWidget ? SWITCHER.ON : SWITCHER.OFF}</Badge></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> <FormattedMessage id={'widget.weather'}/></TableCell>
                    <TableCell align={'right'}><Badge
                        color={Colors.SUCCESS}>{weatherWidget ? SWITCHER.ON : SWITCHER.OFF}</Badge></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> <FormattedMessage id={'color_scheme'}/></TableCell>
                    <TableCell align={'right'}><Badge color={Colors.INFO}>{theme}</Badge></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};