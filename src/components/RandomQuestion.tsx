import { useState, useCallback } from 'react';
import { course } from '../data';
import type { QuizQuestion } from '../types';

function getAllQuestions(): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  for (const mod of course.modules) {
    questions.push(...mod.test);
  }
  questions.push(...course.finalTest);
  return questions;
}

const allQuestions = getAllQuestions();

function pickRandom(): QuizQuestion {
  return allQuestions[Math.floor(Math.random() * allQuestions.length)];
}

interface Props {
  onClose: () => void;
}

export function RandomQuestion({ onClose }: Props) {
  const [question, setQuestion] = useState<QuizQuestion>(pickRandom);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const next = useCallback(() => {
    setQuestion(pickRandom());
    setSelected(null);
    setRevealed(false);
  }, []);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

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
        <div className="rq-actions">
          <button className="btn btn-primary" onClick={next}>
            Next Random Question →
          </button>
        </div>
      </div>
    </div>
  );
}
