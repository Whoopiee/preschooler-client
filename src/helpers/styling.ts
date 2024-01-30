/* eslint-disable consistent-return */
/* eslint-disable default-case */
import educationActiveIcon from '@assets/icons/education-active.svg';
import developActiveIcon from '@assets/icons/develop-active.svg';
import readActiveIcon from '@assets/icons/read-active.svg';
import {
  Section,
  SectionWithStyle,
  Month,
  Filter,
} from '@customTypes/game';

export function getSectionWithStyle(section: Section): SectionWithStyle {
  switch (section) {
    case 'education':
      return {
        value: 'education',
        name: 'Освітні програми',
        image: educationActiveIcon,
        backgroundColor: '#FFCEBE',
        borderColor: '#FA855F',
        hoverColor: '#ffcebe',
      };
    case 'games':
      return {
        value: 'games',
        name: 'Розвиваючі ігри',
        image: developActiveIcon,
        backgroundColor: '#C2FEC4',
        borderColor: '#46E64B',
        hoverColor: '#bbffbd',
      };
    case 'reading':
      return {
        value: 'reading',
        name: 'Читання та аудіокниги',
        image: readActiveIcon,
        backgroundColor: '#A2DDFF',
        borderColor: '#25A7F0',
        hoverColor: '#74cdff',
      };
  }
}

export function getFilterText(filter: Filter): string {
  switch (filter) {
    case 'world':
      return 'Довкілля';
    case 'society':
      return 'Соціум';
    case 'art':
      return 'Мистецтво';
    case 'math':
      return 'Математика';
    case 'speaking':
      return 'Мовлення';
  }
}

export function getMonthText(
  month: Month,
  mode: 'nominative' | 'genetive' = 'nominative',
): string {
  switch (month) {
    case 'january':
      return mode === 'nominative' ? 'Січень' : 'Січня';
    case 'february':
      return mode === 'nominative' ? 'Лютий' : 'Лютого';
    case 'march':
      return mode === 'nominative' ? 'Березень' : 'Березня';
    case 'april':
      return mode === 'nominative' ? 'Квітень' : 'Квітня';
    case 'may':
      return mode === 'nominative' ? 'Травень' : 'Травня';
    case 'june':
      return mode === 'nominative' ? 'Червень' : 'Червня';
    case 'july':
      return mode === 'nominative' ? 'Липень' : 'Липня';
    case 'august':
      return mode === 'nominative' ? 'Серпень' : 'Серпня';
    case 'september':
      return mode === 'nominative' ? 'Вересень' : 'Вересня';
    case 'october':
      return mode === 'nominative' ? 'Жовтень' : 'Жовтня';
    case 'november':
      return mode === 'nominative' ? 'Листопад' : 'Листопада';
    case 'december':
      return mode === 'nominative' ? 'Грудень' : 'Грудня';
    default:
      return 'Вересня';
  }
}
