import * as React from 'react';
import {useStyles} from './styles';
import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import {IUser} from "../../service/AuthService";
import Badge, {Colors} from "../common/Badge";
import {IOptions} from '../../state/settingsStore';

interface IProfileData extends IUser,IOptions{
}

interface IProps {
    data: IProfileData;
}


export const ProfileDataTable: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children, data} = props;
    debugger
    const {id, name, language, email, location, isActivated, onlineCounterWidget,weatherWidget,theme} = data;
    return (
        <Table className={styles.tableRoot} aria-label="custom pagination table">
            <TableBody>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align={'right'}>{name}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>language</TableCell>
                    <TableCell align={'right'}>{language}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>email</TableCell>
                    <TableCell align={'right'}>{email}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>country</TableCell>
                    <TableCell align={'right'}>{location.country}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>online counter</TableCell>
                    <TableCell align={'right'}><Badge color={Colors.SUCCESS} >{onlineCounterWidget}</Badge></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>weather widget</TableCell>
                    <TableCell align={'right'}><Badge color={Colors.SUCCESS} >{weatherWidget}</Badge></TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>theme</TableCell>
                     <TableCell align={'right'}><Badge color={Colors.INFO} >{theme}</Badge></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};