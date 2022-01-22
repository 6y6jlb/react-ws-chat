import * as React from 'react';
import {useStyles} from './styles';
import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import {IUser} from "../../service/AuthService";

interface IProps {
    data: IUser;
}


export const ProfileDataTable: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children, data} = props;
    const {id, name, language, email, location, isActivated} = data as IUser
    return (
        <Table style={{maxWidth: 600}} aria-label="custom pagination table">
            <TableBody>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>{name}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>language</TableCell>
                    <TableCell>{language}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>email</TableCell>
                    <TableCell>{email}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>country</TableCell>
                    <TableCell>{location.country}</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>city</TableCell>
                    <TableCell>{location.city}</TableCell>

                </TableRow>
            </TableBody>
        </Table>
    );
};