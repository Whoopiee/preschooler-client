import {
  Navigate, Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as userAction from '../../redux/features/user/userSlice';

type Props = {
  children?: React.ReactNode;
};

export const RequireAuth: React.FC<Props> = ({ children }) => {
  // const { user } = useContext(AuthContext);
  const location = useLocation();
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userAction.refresh()).then((res) => {
      if (res.meta.requestStatus === 'rejected') {
        navigate('/login');
      }
    });
  }, []);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</> || <Outlet />;
};
