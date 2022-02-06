import {ITheme} from "../../App/theme/theme";
import {TABLE_WIDTH} from "../../../utils/const";


export default (theme:ITheme) => ( {
    root:{},
    table:{
        width: `${TABLE_WIDTH}px !important`
    },
    selectWrapper:{
        maxWidth:200,
        alignContent:"center"
    },
} );