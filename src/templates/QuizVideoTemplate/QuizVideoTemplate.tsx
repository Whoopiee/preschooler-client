import ReactPlayer from 'react-player';

import { Template } from '@customTypes/Template';
import { LevelTask } from '@core/components/LevelTask';
import { QuizTemplate } from '../QuizTemplate';
import { IQuizVideoTemplate } from './QuizVideoTemplate.interface';

import styles from './QuizVideoTemplate.module.scss';

export const QuizVideoTemplate: Template<IQuizVideoTemplate> = ({ level }) => {
  return (
    <QuizTemplate level={level}>
      <div className={styles.videoContainer}>
        <div className={styles.wrapper}>
          <ReactPlayer
            url={level.url}
            className={styles.video}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>

      {level.descriptionSecond && (
        <LevelTask
          description={level.descriptionSecond}
          audio={level.audioSecond}
          hasTopMargin
        />
      )}
    </QuizTemplate>
  );
};
