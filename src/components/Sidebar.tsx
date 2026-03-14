import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { course } from '../data';

function getLevel(percent: number): string {
  if (percent >= 90) return 'Highly Proficient';
  if (percent >= 75) return 'Proficient';
  if (percent >= 55) return 'Advanced';
  if (percent >= 35) return 'Intermediate';
  return 'Beginner';
}

interface SidebarProps {
  onRandomQuestion?: () => void;
  onQuickLine?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ onRandomQuestion, onQuickLine, isOpen, onClose }: SidebarProps) {
  const { progress } = useProgress();
  const location = useLocation();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isOpen && onClose) onClose();
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const getModuleProgress = (moduleId: string) => {
    const mod = course.modules.find(m => m.id === moduleId);
    if (!mod) return 0;
    const completed = mod.topics.filter(t => progress.topicProgress[t.id]?.completed).length;
    return Math.round((completed / mod.topics.length) * 100);
  };

  return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      <div className="sidebar-header">
        <h2>⚛️ {course.title}</h2>
        {onClose && (
          <button className="sidebar-close" onClick={onClose} aria-label="Close menu">✕</button>
        )}
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className="nav-item">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/level-test" className="nav-item">
          📋 Level Evaluation
          {progress.levelTestResult && (
            <span className="badge">{getLevel(Math.round((progress.levelTestResult.score / progress.levelTestResult.total) * 100))}</span>
          )}
        </NavLink>

        {onRandomQuestion && (
          <button className="nav-item random-q-btn" onClick={onRandomQuestion}>
            🎲 Random Question
          </button>
        )}

        {onQuickLine && (
          <button className="nav-item quick-line-btn" onClick={onQuickLine}>
            ⚡ Quick Line
          </button>
        )}

        <div className="nav-section">
          <span className="nav-section-title">Modules</span>
        </div>

        {course.modules.map((mod, i) => (
          <div key={mod.id} className="module-nav">
            <NavLink to={`/module/${mod.id}`} className="nav-item module-link">
              <span>{i + 1}. {mod.title}</span>
              <span className="progress-badge">{getModuleProgress(mod.id)}%</span>
            </NavLink>
          </div>
        ))}

        <div className="nav-section">
          <span className="nav-section-title">Assessment</span>
        </div>

        <NavLink to="/final-test" className="nav-item">
          🏆 Final Test
          {progress.finalTestResult && (
            <span className="badge">{progress.finalTestResult.score}/{progress.finalTestResult.total}</span>
          )}
        </NavLink>
      </nav>
    </aside>
  );
}
