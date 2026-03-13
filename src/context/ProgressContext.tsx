import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { UserProgress, TestResult } from '../types';

const STORAGE_KEY = 'react-course-progress';

const initialProgress: UserProgress = {
  levelTestResult: null,
  topicProgress: {},
  moduleTestResults: {},
  finalTestResult: null,
};

type Action =
  | { type: 'SET_LEVEL_TEST'; payload: TestResult }
  | { type: 'RESET_LEVEL_TEST' }
  | { type: 'COMPLETE_TOPIC'; payload: { topicId: string } }
  | { type: 'SET_MODULE_TEST'; payload: { moduleId: string; result: TestResult } }
  | { type: 'SET_FINAL_TEST'; payload: TestResult }
  | { type: 'RESET' };

function progressReducer(state: UserProgress, action: Action): UserProgress {
  switch (action.type) {
    case 'SET_LEVEL_TEST':
      return { ...state, levelTestResult: action.payload };
    case 'RESET_LEVEL_TEST':
      return { ...state, levelTestResult: null };
    case 'COMPLETE_TOPIC': {
      return {
        ...state,
        topicProgress: {
          ...state.topicProgress,
          [action.payload.topicId]: {
            completed: true,
            taskCompleted: true,
          },
        },
      };
    }
    case 'SET_MODULE_TEST':
      return {
        ...state,
        moduleTestResults: {
          ...state.moduleTestResults,
          [action.payload.moduleId]: action.payload.result,
        },
      };
    case 'SET_FINAL_TEST':
      return { ...state, finalTestResult: action.payload };
    case 'RESET':
      return initialProgress;
    default:
      return state;
  }
}

function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as UserProgress;
  } catch {
    // ignore
  }
  return initialProgress;
}

interface ProgressContextValue {
  progress: UserProgress;
  dispatch: React.Dispatch<Action>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, dispatch] = useReducer(progressReducer, undefined, loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  return (
    <ProgressContext.Provider value={{ progress, dispatch }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
