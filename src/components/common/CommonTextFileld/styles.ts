import {createStyles} from "@mui/styles";
import {TABLE_WIDTH} from "../../../utils/const";
import {ITheme} from "../../App/theme/theme";


export default (theme: ITheme) => createStyles({
    root: {
        position: "relative",
    },
    table: {
        width: `${TABLE_WIDTH}px !important`
    },
    validatorMessage: {
        position: "absolute",
        top: 0,
        right: '-124px',
        width: 120
    }
});