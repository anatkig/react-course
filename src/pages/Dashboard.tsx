import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { course } from '../data';

export function Dashboard() {
  const { progress, dispatch } = useProgress();

  const totalTopics = course.modules.reduce((sum, m) => sum + m.topics.length, 0);
  const completedTopics = Object.values(progress.topicProgress).filter(t => t.completed).length;
  const overallPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  const completedModuleTests = Object.values(progress.moduleTestResults).filter(r => r.passed).length;

  return (
    <div className="page dashboard">
      <h1>{course.title}</h1>
      <p className="subtitle">{course.description}</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{overallPercent}%</div>
          <div className="stat-label">Overall Progress</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${overallPercent}%` }} />
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completedTopics}/{totalTopics}</div>
          <div className="stat-label">Topics Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completedModuleTests}/{course.modules.length}</div>
          <div className="stat-label">Module Tests Passed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{progress.finalTestResult ? `${progress.finalTestResult.score}/${progress.finalTestResult.total}` : '—'}</div>
          <div className="stat-label">Final Test</div>
        </div>
      </div>

      {!progress.levelTestResult && (
        <div className="cta-card">
          <h2>Start Here</h2>
          <p>Take the level evaluation test to assess your current React knowledge.</p>
          <Link to="/level-test" className="btn btn-primary">Take Level Test →</Link>
        </div>
      )}

      <h2>Course Modules</h2>
      <div className="modules-grid">
        {course.modules.map((mod, i) => {
          const modTopics = mod.topics.length;
          const modCompleted = mod.topics.filter(t => progress.topicProgress[t.id]?.completed).length;
          const modPercent = Math.round((modCompleted / modTopics) * 100);
          const testResult = progress.moduleTestResults[mod.id];

          return (
            <Link to={`/module/${mod.id}`} key={mod.id} className="module-card">
              <div className="module-number">{i + 1}</div>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <div className="module-meta">
                <span>{modTopics} topics</span>
                <span>{modPercent}% done</span>
                {testResult && (
                  <span className={testResult.passed ? 'pass' : 'fail'}>
                    Test: {testResult.score}/{testResult.total}
                  </span>
                )}
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${modPercent}%` }} />
              </div>
            </Link>
          );
        })}
      </div>

      {completedTopics > 0 && (
        <div className="reset-section">
          <button className="btn btn-danger" onClick={() => {
            if (window.confirm('Reset all progress? This cannot be undone.')) {
              dispatch({ type: 'RESET' });
            }
          }}>
            Reset All Progress
          </button>
        </div>
      )}
    </div>
  );
}
