/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import {
  Formik, Field, Form,
} from 'formik';
import { refresh } from '@redux/features/user/userSlice';
import stylesFromAnother from '../../pages/FormsChild/FormsChild.module.scss';
import styles from './ChildPanel.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import editIcon from '../../assets/icons/editIcon.svg';
import childBlank from '../../assets/icons/blank-photo.svg';
import { childService } from '../../services/childService';
import { ChildEdit } from '../../types/Сhild';
import * as childAction from '../../redux/features/childSlice';

export const ChildPanel: React.FC = () => {
  const { child, loading: loadInfo } = useAppSelector(state => state.child);
  const { user } = useAppSelector(state => state.user);
  const [updating, setUpdating] = useState(false);
  const dispach = useAppDispatch();

  const handleUpdating = () => {
    setUpdating(true);
  };

  // REWRITE below handlers

  const handleSubmit = async (childUpdated: ChildEdit) => {
    if (updating === true) {
      dispach(childAction.updateChild({ ...childUpdated, photo: child.photo }));
      dispach(refresh());

      setUpdating(false);
    } else {
      setUpdating(!updating);
    }
  };

  const handleChangePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.files && e.target.files[0]
    ) {
      const formData = new FormData();

      formData.append('', e.target.files[0]);
      dispach(childAction.uploadPhoto(formData)).then(async (item) => {
        if (item.meta.requestStatus === 'fulfilled') {
          await childService.updatePhoto(`${import.meta.env.VITE_API_URL}/${item.payload.url}`, child.id);
          if (!updating) {
            dispach(refresh());
          }
        }
      });
    }
  };

  const initialValues = child;

  const handleHover = () => {
    imgRef.current?.classList.toggle(styles.hoverPhoto);
  };

  const imgRef = useRef<HTMLLabelElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  return user.Children?.length === 0 || !child.firstName
    ? (<div className={styles.child}>Оберіть або додайте дитину</div>) : (
      <div className={styles.child}>
        <div className={styles.childInfo}>
          <input
            type="file"
            id="photo"
            onChange={handleChangePhoto}
            style={{ display: 'none' }}
            accept="image/*"
          />
          <label
            htmlFor="photo"
            ref={imgRef}
            onMouseLeave={handleHover}
            onMouseEnter={handleHover}
            className={styles.cursorpointer}
          >
            <img
              className={styles.photo}
              src={child.photo || childBlank}
              ref={photoRef}
              alt="Baby"
            />
          </label>

          {updating ? (
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={(
                values: ChildEdit,
              ) => {
                handleSubmit(values);
              }}
            >
              <Form className={styles.isEdit}>
                <div className={stylesFromAnother.form1}>
                  <span className={stylesFromAnother.textBig}>Ім&apos;я</span>
                  <Field
                    className={stylesFromAnother.form}
                    type="text"
                    name="firstName"
                    placeholder="Введіть імʼя"
                  />

                </div>
                <div className={stylesFromAnother.form1}>
                  <span className={stylesFromAnother.textBig}>Прізвище </span>
                  <Field
                    className={stylesFromAnother.form}
                    type="text"
                    name="lastName"
                    placeholder="Введіть прізвище"
                  />

                </div>
                {/* <div className={stylesFromAnother.form1}>
                  <span className={stylesFromAnother.textBig}>Стать </span>
                  <div className={styles.radio_block_center}>
                    <p className={stylesFromAnother.radio_block__p}>
                      <Field
                        type="radio"
                        id="male"
                        name="sexId"
                        value="1"
                      />
                      <label
                        htmlFor="male"
                        className={stylesFromAnother.textBig__label}
                      >
                        Хлопчик
                      </label>
                    </p>
                    <p className={stylesFromAnother.radio_block__p}>
                      <Field
                        type="radio"
                        id="female"
                        name="sexId"
                        value="2"
                      />

                      <label
                        htmlFor="female"
                        className={stylesFromAnother.textBig__label}
                      >
                        Дівчинка
                      </label>
                    </p>

                  </div>
                </div> */}

                <div className={stylesFromAnother.form1}>
                  <span className={stylesFromAnother.textBig}>Вік</span>
                  <Field
                    className={stylesFromAnother.form}
                    name="age"
                    as="select"
                    id="selectOption"
                    defaultValue="0"
                  >
                    <option disabled value="0">
                      Оберіть вік дитини
                    </option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Field>

                </div>
                <div className={styles.center}>
                  <button
                    type="submit"
                    className={stylesFromAnother.button_registration}
                  >
                    Підтвердити зміни
                  </button>
                </div>
              </Form>
            </Formik>
          ) : !loadInfo ? (
            <>
              <div className={styles.text}>
                <p>{`${child.firstName} ${child.lastName}`}</p>
                {/* <p className={styles.sex}>
                  {+child.sexId === 1 ? 'Хлопчик' : 'Дівчинка'}
                </p> */}
                <p>{`${child.age} ${child.age < 5 ? 'роки' : 'років'}`}</p>
              </div>
              {!updating
                && (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                  <img
                    className={styles.pen}
                    src={editIcon}
                    alt=""
                    onClick={handleUpdating}
                  />
                )}
            </>
          ) : (<p>Приміняємо зміни...</p>)}
        </div>
        {/* <p className={styles.send}>Принести аплікацію ліса</p> */}
      </div>
    );
};
