import {createStyles} from "@mui/styles";
import {TABLE_WIDTH} from "../../../utils/const";
import {ITheme} from "../../App/theme/theme";


export default (theme:ITheme) => createStyles ( {
    root:{},
    table:{
        width: `${TABLE_WIDTH}px !important`
    },
} );