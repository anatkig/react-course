import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { course } from '../data';
import { useProgress } from '../context/ProgressContext';
import type { QuizQuestion } from '../types';

interface QuestionEntry {
  question: QuizQuestion;
  moduleId: string;
  moduleTitle: string;
}

function getAllQuestions(): QuestionEntry[] {
  const questions: QuestionEntry[] = [];
  for (const mod of course.modules) {
    for (const q of mod.test) {
      questions.push({ question: q, moduleId: mod.id, moduleTitle: mod.title });
    }
  }
  for (const q of course.finalTest) {
    questions.push({ question: q, moduleId: '', moduleTitle: '' });
  }
  return questions;
}

const allQuestions = getAllQuestions();

function pickRandom(): QuestionEntry {
  return allQuestions[Math.floor(Math.random() * allQuestions.length)];
}

interface Props {
  onClose: () => void;
}

export function RandomQuestion({ onClose }: Props) {
  const { dispatch } = useProgress();
  const navigate = useNavigate();
  const [entry, setEntry] = useState<QuestionEntry>(pickRandom);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [endedStreak, setEndedStreak] = useState(0);
  const isCorrect = revealed && selected === entry.question.correctAnswer;
  const isIncorrect = revealed && selected !== null && selected !== entry.question.correctAnswer;

  const next = useCallback(() => {
    setEntry(pickRandom());
    setSelected(null);
    setRevealed(false);
  }, []);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === entry.question.correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      dispatch({ type: 'RECORD_RANDOM_QUESTION', payload: { correct: true, streak: newStreak } });
    } else {
      setEndedStreak(streak);
      setStreak(0);
      dispatch({ type: 'RECORD_RANDOM_QUESTION', payload: { correct: false, streak: 0 } });
    }
  };

  const goToModule = () => {
    onClose();
    navigate(`/module/${entry.moduleId}`);
  };

  const question = entry.question;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3 className="rq-question">{question.question}</h3>
        <div className="rq-options">
          {question.options.map((opt, i) => {
            let cls = 'option';
            if (selected === i) cls += ' selected';
            if (revealed) {
              if (i === question.correctAnswer) cls += ' correct';
              else if (selected === i) cls += ' incorrect';
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)}>
                {opt}
              </button>
            );
          })}
        </div>
        {revealed && (
          <p className="rq-explanation">{question.explanation}</p>
        )}
        {isCorrect && (
          <div className="rq-actions">
            <span className="rq-streak">🔥 Streak: {streak}</span>
            <button className="btn btn-primary" onClick={next}>
              Next Random Question →
            </button>
          </div>
        )}
        {isIncorrect && (
          <div className="rq-streak-end">
            <p>That was <strong>{endedStreak}</strong> correct answer{endedStreak !== 1 ? 's' : ''} in a row. Keep going!</p>
            {entry.moduleId && (
              <button className="btn btn-secondary rq-module-link" onClick={goToModule}>
                📖 Review: {entry.moduleTitle}
              </button>
            )}
            <button className="btn btn-primary" onClick={next}>
              Continue →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
