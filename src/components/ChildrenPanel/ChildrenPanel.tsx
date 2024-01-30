import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './ChildrenPanel.module.scss';
import * as childActions from '../../redux/features/childSlice';
import { Child } from '../../types/Сhild';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import addIcon from '../../assets/icons/plus.svg';

const childrenData: Child[] = [];

export const ChildrenPanel: React.FC = () => {
  const [children, setChildren] = useState<Child[]>(childrenData);
  const { user } = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const { child: selected } = useAppSelector(state => state.child);
  const dispatch = useAppDispatch();
  const selectChild = (child: Child) => {
    dispatch(childActions.selectedChild(child));
  };

  useEffect(() => {
    if (user.Children) {
      setChildren(user.Children);
    } else {
      navigate('/new-child');
    }
  }, []);

  return (
    <div className={styles.panel}>
      {location.pathname === '/new-child' ? (
        <div
          className={cn(
            styles.child,
            {
              [styles.selected]: true,
            },
          )}

        >
          Створення дитини
        </div>
      ) : (
        <>
          {children.map(child => (
            <Link
              to="/"
              key={child.id}
              className={cn(
                styles.child,
                {
                  [styles.selected]: selected?.id === child.id,
                },
              )}
              onClick={() => selectChild(child)}
            >
              {child.firstName}
            </Link>
          ))}

          <Link
            to="/new-child"
            className={cn(
              styles.plusButton,
              {
                [styles.selected]: selected?.id === null,
                [styles.mb]: children.length === 0, // better set height of panel block and center elements
              },
            )}
          >
            <img
              className={styles.plusImage}
              src={addIcon}
              alt="Add child"
            />
          </Link>
        </>
      )}

    </div>
  );
};
