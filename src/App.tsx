import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { Sidebar } from './components/Sidebar';
import { RandomQuestion } from './components/RandomQuestion';
import { Dashboard } from './pages/Dashboard';
import { LevelTest } from './pages/LevelTest';
import { ModulePage } from './pages/ModulePage';
import { TopicPage } from './pages/TopicPage';
import { FinalTest } from './pages/FinalTest';
import './styles.css';

export default function App() {
  const [showRandom, setShowRandom] = useState(false);

  return (
    <HashRouter>
      <ProgressProvider>
        <div className="app-layout">
          <Sidebar onRandomQuestion={() => setShowRandom(true)} />
          {showRandom && <RandomQuestion onClose={() => setShowRandom(false)} />}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/level-test" element={<LevelTest />} />
              <Route path="/module/:moduleId" element={<ModulePage />} />
              <Route path="/module/:moduleId/topic/:topicId" element={<TopicPage />} />
              <Route path="/final-test" element={<FinalTest />} />
              <Route path="*" element={<div className="page"><h1>404 — Page Not Found</h1></div>} />
            </Routes>
          </main>
        </div>
      </ProgressProvider>
    </HashRouter>
  );
}
