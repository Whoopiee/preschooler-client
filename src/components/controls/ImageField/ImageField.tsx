import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from 'formik';

import { INewChildForm } from '@components/NewChildForm';

import styles from './ImageField.module.scss';
import { FieldError } from '../FieldError';
import { withField } from '../withField';

type Props = {
  name: string;
  label?: string;
  wrapperClassname?: string;
  errorClassname?: string;
};

export const ImageField: React.FC<Props> = withField(({
  name,
  label,
  errorClassname,
}) => {
  const [, meta, helpers] = useField<INewChildForm['photo']>(name);
  const image = meta.value;
  const { setValue: setImage } = helpers;
  const [imageView, setViewImage] = useState<string>('');

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    onDrop: (acceptedFiles: File[]) => {
      setImage(acceptedFiles[0]);
      setViewImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const clearFiles = () => {
    setImage(null);
  };

  useEffect(() => {
    if (image) {
      URL.revokeObjectURL(imageView);
    }
  }, []);

  return (
    <>
      <p>{label}</p>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div {...getRootProps({ className: styles.dropzone })}>
            <input {...getInputProps()} />
            {!image
              ? <p className={styles.faded}>Оберіть картинку</p>
              : (
                <>
                  <img
                    src={imageView}
                    alt=""
                    className={styles.image__uploader}
                    onLoad={() => {
                      URL.revokeObjectURL(imageView);
                    }}
                  />
                </>
              )}
          </div>
          {image && (
            <button
              type="button"
              className={styles.close}
              onClick={clearFiles}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M19 6.41L17.59
                5 12 10.59 6.41
                5 5 6.41 10.59
                12 5 17.59 6.41
                19 12 13.41 17.59
                19 19 17.59 13.41
                12 19 6.41z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <FieldError name={name} className={errorClassname} />
    </>
  );
});
