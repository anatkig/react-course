import type { Course } from '../types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';
import { module4 } from './module4';
import { module5 } from './module5';
import { module6 } from './module6';
import { module7 } from './module7';
import { module8 } from './module8';
import { finalTest } from './finalTest';
export { getRandomLevelTest } from './levelTest';

export const course: Course = {
  title: 'React Mastery',
  description:
    'A comprehensive course covering everything from React fundamentals to advanced patterns, performance optimization, and best practices.',
  modules: [module1, module2, module3, module4, module5, module6, module7, module8],
  finalTest,
};
