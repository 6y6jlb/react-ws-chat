import {Colors} from './consts';
import {createStyles} from "@mui/styles";

export default () => {
  const defaultStyles = {
    backgroundColor: '#EAEAEA',
    color: '#878B88',
  };
  const warningStyles = {
    backgroundColor: '#FCEFCD',
    color: '#B49034',
  };
  const successStyles = {
    backgroundColor: '#CBF5D7',
    color: '#408453',
  };
  const infoStyles = {
    backgroundColor: '#CED6FD',
    color: '#2B4DF7',
  };
  const failedStyles = {
    backgroundColor: '#FBE3E9',
    color: '#D56E87',
  };
  return createStyles({
    root: {
      ...defaultStyles,
      display: 'inline',
      whiteSpace: 'nowrap',
      fontSize: 10,
      textTransform: 'uppercase',
      padding: '4px 10px',
      fontWeight: 500,
      borderRadius: 2,
      lineHeight: 'normal', // не убирать, влияет на высоту бейджа в таблицах
    },
    [Colors.WARNING]: warningStyles,
    [Colors.SUCCESS]: successStyles,
    [Colors.SUCCEEDED]: successStyles,
    [Colors.INFO]: infoStyles,
    [Colors.FAILED]: failedStyles,
  });
};
