import React, { useState } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
// import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import classNames from 'classnames';
import styles from './FormsChild.module.scss';
import plus from './images/plus.svg';
// import * as childAction from '../../redux/features/childSlice';
// import { ChildTypeWithoutPhoto } from '../../types/Сhild';
import { useAppSelector } from '../../redux/hooks';
import { sadiki } from './sadiki';
import { DropDown } from '../../components/DropDown';

function FormsChild() {
  const [file, setFile] = useState<File | null>();
  // const dispach = useAppDispatch();
  const { user } = useAppSelector(state => state.user);
  // const navigate = useNavigate();
  const [imageForInput, setImageForInput] = useState<string>('');

  const [age, setAge] = useState<string>('');
  const [isAgeErrorVisible, setIsAgeErrorVisible] = useState(false);

  const handleAgeChange = (newAge: string) => {
    setIsAgeErrorVisible(false);
    setAge(newAge);
  };

  const initial = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 5,
    sexId: 1,
    doshkillyaId: '',
    numberDoshkillya: '',
    photo: '',
    parentId: user.id,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Ім\'я не може бути порожнім')
      .min(2, 'Потрібно мінімум 2 символи'),
    lastName: Yup.string().required('Прізвище не може бути порожнім')
      .min(2, 'Потрібно мінімум 2 символи'),
    // sexId: Yup.number().required('Оберіть стать дитини'),
    age: Yup.number().required('Оберіть вік дитини'),
    doshkillyaId: Yup.string().required('Оберіть свою відповідь'),
    numberDoshkillya: Yup.string(),
  });

  // const handleSubmit = async (Data: ChildTypeWithoutPhoto) => {
  //   if (!age) {
  //     setIsAgeErrorVisible(true);

  //     return;
  //   }

  //   if (
  //     file
  //   ) {
  //     const formData = new FormData();

  //     formData.append('', file);
  //     // dispach(childAction.uploadPhoto(formData)).then((item) => {
  //     // dispach(childAction.createChild({ ...Data, age: Number(age), photo: `${import.meta.env.API_URL}/${item.payload.url}` })).then(item2 => {
  //     //   if (item2.meta.requestStatus === 'fulfilled') {
  //     //     navigate('/');
  //     //   }
  //     // });
  //     // });
  //   }
  //   // else {
  //   //   dispach(childAction.createChild(Data)).then(item2 => {
  //   //     if (item2.meta.requestStatus === 'fulfilled') {
  //   //       navigate('/');
  //   //     }
  //   //   });
  //   // }

  //   //   dispach(userActions.registerUser(formData))
  //   //     .then((item) => item.meta.requestStatus === 'fulfilled' && navigate('/'));
  // };

  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.files && e.target.files[0]
    ) {
      setFile(e.target.files[0]);
      setImageForInput(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={styles.full_height}>
      <div className={styles.center}>
        <span className={styles.tiile__form_child}>Дитина</span>
        <Formik
          initialValues={initial}
          validationSchema={validationSchema}
          onSubmit={(
            // values: ChildTypeWithoutPhoto,
          ) => {
            // handleSubmit(values);
          }}
        >
          {({ values }) => (
            <Form className={styles.forms_and_text}>
              <div className={styles.forms_and_text}>
                <div className={styles.form1}>
                  <span className={styles.textBig}>Ім&apos;я</span>
                  <Field
                    className={styles.form}
                    type="text"
                    name="firstName"
                    placeholder="Введіть імʼя"
                  />

                </div>
                <div className={styles.placeDiv}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="firstName"
                    component="div"
                  />
                </div>
                <div className={styles.form1}>
                  <span className={styles.textBig}>Прізвище </span>
                  <Field
                    className={styles.form}
                    type="text"
                    name="lastName"
                    placeholder="Введіть прізвище"
                  />

                </div>
                <div className={styles.placeDiv}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="lastName"
                    component="div"
                  />
                </div>
                {/* <div className={styles.gender_selector}>
                  <span className={styles.textBig}>Стать </span>
                  <div className={styles.radio_block}>
                    <p className={styles.radio_block__p}>
                      <Field
                        type="radio"
                        id="male"
                        name="sexId"
                        value="1"
                      />
                      <label
                        htmlFor="male"
                        className={styles.textBig__label}
                      >
                        Хлопчик
                      </label>
                    </p>
                    <p className={styles.radio_block__p}>
                      <Field
                        type="radio"
                        id="female"
                        name="sexId"
                        value="2"
                      />

                      <label
                        htmlFor="female"
                        className={styles.textBig__label}
                      >
                        Дівчинка
                      </label>
                    </p>

                  </div>
                </div>
                <div className={styles.placeDiv}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="sexId"
                    component="div"
                  />
                </div> */}
                <div className={styles.form1}>
                  <span className={styles.textBig}>Вік</span>
                  <DropDown
                    options={['5', '6', '7']}
                    value={age}
                    setValue={handleAgeChange}
                    placeholder="Оберіть вік дитини"
                  />
                </div>
                <div className={styles.placeDiv}>
                  {isAgeErrorVisible && (
                    <p className={styles.errorMessage}>
                      Оберіть вік дитини
                    </p>
                  )}
                </div>
                <div className={styles.gender_selector}>
                  <span className={styles.doshkillya}>
                    Чи відвідує дитина дошкільний заклад?
                  </span>
                  <div className={styles.radio_block}>
                    <p className={styles.radio_block__p_smaller}>
                      <Field
                        type="radio"
                        id="test1"
                        value="1"
                        name="doshkillyaId"
                      />
                      <label htmlFor="test1">Так</label>
                    </p>
                    <p className={styles.radio_block__p_smaller}>
                      <Field
                        value="0"
                        type="radio"
                        id="test2"
                        name="doshkillyaId"
                      />
                      <label htmlFor="test2">Ні</label>
                    </p>

                  </div>

                </div>
                <div className={styles.placeDiv}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="doshkillyaId"
                    component="div"
                  />
                </div>

                {values.doshkillyaId === '1' && (
                  <div className={styles.form1}>
                    <span className={styles.textBig}>Номер садочка</span>
                    <DropDown
                      options={sadiki}
                      value=""
                      setValue={() => { }}
                      placeholder="Оберіть номер садочка"
                      isBig
                    />
                  </div>
                )}
                <div className={styles.placeDiv}>
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="numberDoshkillya"
                    component="div"
                  />
                </div>
                <div className={styles.form1}>
                  <span className={styles.textBig}>
                    Фото (за бажанням)
                  </span>
                  <div className={styles.upload}>
                    <label
                      htmlFor="image"
                      className={styles.upload_image}
                      style={{ overflow: 'hidden' }}
                    >
                      <img
                        src={imageForInput || plus}
                        alt=""
                        className={
                          classNames({ [styles.iconForInput]: imageForInput })
                        }
                      />
                      <input
                        type="file"
                        accept="image/*"
                        name="photo"
                        id="image"
                        style={{ display: 'none' }}
                        onChange={handleChangeFiles}
                      />
                      <span
                        className={styles.truncateText}
                      >
                        {file ? file.name : 'Завантажити фото'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.button_container}>
                <button className={styles.button_registration} type="submit">
                  Додати дитину
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormsChild;
