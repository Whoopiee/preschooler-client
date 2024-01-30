import React from 'react';

// import { useNavigate, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/mainLogo.svg';
// import logout from '../../assets/icons/logout.svg';

import styles from './Header.module.scss';
import { Container } from '../Container';
// import { leaveUser } from '../../redux/features/user/userSlice';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const Header: React.FC = () => {
  // const navigate = useNavigate();
  // const dispach = useAppDispatch();
  // const { user } = useAppSelector(state => state.user);

  // const handleLogout = () => {
  //   dispach(leaveUser());
  //   navigate('/login');
  // };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          {/* <div className={styles.right}>
            <div className={styles.info}>
              <p className={styles.user}>{user.firstName}</p>
            </div>

            <button
              type="button"
              aria-label="Logout"
              onClick={handleLogout}
            >
              <img
                className={styles.logout}
                src={logout}
                alt="Logout"
              />
            </button>
          </div> */}
        </div>
      </Container>
    </header>
  );
};
