import React from 'react';
// import { useLocation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

// import { NewChildForm } from '@components/NewChildForm';
import styles from './HomePage.module.scss';

import { GameMenu } from '../../redux/features/gameMenu/components/GameMenu';
import { HomePageLayout } from '../../layouts/HomePageLayout';
// import { ChildrenPanel } from '../../components/ChildrenPanel';
// import { ChildPanel } from '../../components/ChildPanel';
// import FormsChild from '../FormsChild/FormsChild';
import { useAppSelector } from '../../redux/hooks';

export const HomePage: React.FC = () => {
  // const location = useLocation();
  // const rendreNewChildForm = location.pathname === '/new-child';
  const { loading } = useAppSelector(state => state.user);

  return loading ? (
    <div className={styles.loader}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
    </div>
  ) : (
    <HomePageLayout>
      <div className={styles.container}>
        {/* <ChildrenPanel />     //old version
        <div className={styles.main}>
          {rendreNewChildForm
            ? <NewChildForm />
            : (
              <>
                <ChildPanel />
                <GameMenu />
              </>
            )}
        </div> */}
        <div className={styles.main}>
          <GameMenu />
        </div>
      </div>
    </HomePageLayout>
  );
};
