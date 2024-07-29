import { FC } from 'react';
import { classNames } from "shared/lib/classNames";
import cl from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, 
    children, 
    className, 
    theme = AppLinkTheme.PRIMARY, 
    ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(cl.AppLink, {}, [cl[theme], className])} {...otherProps}>
      {children}
    </Link>
  )
}

export default AppLink;