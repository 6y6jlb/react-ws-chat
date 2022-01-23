import classNames from 'classnames';
import React, {PropsWithChildren, RefAttributes} from 'react';
import {FormattedMessage} from 'react-intl';
import {Colors} from './consts';
import styles from './styles';
import {withStyles, WithStyles} from "@mui/styles";


export const Badge: React.FC<IProps> = React.forwardRef<HTMLSpanElement, IProps>(
  (props, ref) => {
    const {
      color,
      classes,
      className: classNameProp,
      onClick,
      children,
      status,
      ...rest
    } = props;
    let statusClass;
    if (status && classes[status as Colors]) {
      statusClass = classes[status as Colors];
    }
    let colorClass;
    if (color && classes) {
      colorClass = classes[color as Colors];
    }
    return (
      <span
        {...rest} // rest не убирать, тултип навешивает обработчики
        ref={ref}
        onClick={onClick}
        className={classNames(classes.root, colorClass, statusClass, classNameProp)}>
        {status ? <FormattedMessage id={`statuses.${status}`} /> : children}
      </span>
    );
  }
);

export type Status = string;

type Color = Colors | Status;

interface IProps extends PropsWithChildren<any>, WithStyles<typeof styles> {
  className?: string;
  color?: Color;
  onClick?: () => void;
  status?: Status;
}

export default withStyles(styles)(React.memo(Badge));
