import { getUserAuthData, getUserRoles, UserRole } from "entities/User";
import { FC, ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getRouteForbidden, getRouteMain } from "shared/const/router";

interface Props {
  children?: ReactNode;
  roles?: UserRole[];
}

export const RequireAuth: FC<Props> = (props) => {
  const { children, roles } = props;
  const location = useLocation();
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  return children;
};
