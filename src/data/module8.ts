import type { Module } from '../types';

export const module8: Module = {
  id: 'mod-8',
  title: 'Performance & Best Practices',
  description:
    'Optimize React applications with memoization, code splitting, error boundaries, and learn testing fundamentals.',
  topics: [
    {
      id: 'mod8-t1',
      title: 'React.memo & Performance',
      explanation: `## Preventing Unnecessary Re-renders

### When Components Re-render

A component re-renders when:
1. Its **state** changes.
2. Its **parent** re-renders (even if its own props didn't change).
3. A **context** it subscribes to changes.

### React.memo

Wrap a component in \`React.memo\` to skip re-rendering if props haven't changed:

\`\`\`jsx
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  console.log('Rendering ExpensiveList');
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
});
\`\`\`

### Custom Comparison

\`\`\`jsx
const MyComponent = React.memo(
  function MyComponent({ data }) { /* ... */ },
  (prevProps, nextProps) => {
    // Return true to skip re-render
    return prevProps.data.id === nextProps.data.id;
  }
);
\`\`\`

### Memoization Toolkit

| Tool | Purpose |
|------|---------|
| \`React.memo\` | Skip re-render if props unchanged |
| \`useMemo\` | Cache expensive computed values |
| \`useCallback\` | Cache function references |

### When to Optimize

**Don't optimize prematurely.** Only use memoization when:
- You've identified a **measurable performance problem**.
- The component is **expensive to render** (large lists, heavy computation).
- The component **re-renders frequently** with the same props.

### React DevTools Profiler

Use the React DevTools **Profiler** tab to:
1. Record a session of interactions.
2. See which components re-rendered and how long each took.
3. Identify unnecessary re-renders.`,
      task: {
        description:
          'Create a parent component with a counter button and a heavy `ExpensiveChart` child component. Without optimization, ExpensiveChart re-renders on every counter click. Fix this using React.memo and useCallback for any function props.',
        starterCode: `import { useState, memo, useCallback } from 'react';

function ExpensiveChart({ data, onPointClick }) {
  console.log('ExpensiveChart rendered');
  // Simulates expensive rendering
  return <div>Chart with {data.length} points</div>;
}

function Dashboard() {
  const [count, setCount] = useState(0);
  const data = [1, 2, 3, 4, 5];

  const handlePointClick = (point) => {
    console.log('Clicked:', point);
  };

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChart data={data} onPointClick={handlePointClick} />
    </div>
  );
}`,
        solution: `import { useState, memo, useCallback, useMemo } from 'react';

const ExpensiveChart = memo(function ExpensiveChart({ data, onPointClick }) {
  console.log('ExpensiveChart rendered');
  return <div>Chart with {data.length} points</div>;
});

function Dashboard() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => [1, 2, 3, 4, 5], []);

  const handlePointClick = useCallback((point) => {
    console.log('Clicked:', point);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChart data={data} onPointClick={handlePointClick} />
    </div>
  );
}`,
        hints: [
          'Wrap ExpensiveChart with memo()',
          'Memoize the data array with useMemo so the reference doesn\'t change',
          'Memoize handlePointClick with useCallback to stabilize the reference',
        ],
      },
    },
    {
      id: 'mod8-t2',
      title: 'Code Splitting & Lazy Loading',
      explanation: `## Code Splitting with React.lazy

By default, all your code is bundled into one file. **Code splitting** lets you load parts of your app on demand.

### React.lazy + Suspense

\`\`\`jsx
import { lazy, Suspense } from 'react';

const AdminPanel = lazy(() => import('./AdminPanel'));
const UserProfile = lazy(() => import('./UserProfile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

### How It Works

1. \`lazy()\` takes a function that calls \`import()\` — a dynamic import.
2. The component is loaded **only when first rendered**.
3. \`<Suspense>\` shows a \`fallback\` while the component loads.

### Route-Based Splitting

The most natural place to split is at route boundaries:

\`\`\`jsx
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
\`\`\`

### Error Boundaries for Loading Errors

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>
\`\`\`

### Named Exports

\`lazy\` only supports **default exports**. For named exports, create an intermediate module:

\`\`\`jsx
// MathUtils.js exports { add }
// MathUtilsLazy.js
export { add as default } from './MathUtils';

const Add = lazy(() => import('./MathUtilsLazy'));
\`\`\``,
      task: {
        description:
          'Refactor an app that imports three heavy page components to use React.lazy and Suspense. Add a loading spinner as the fallback. Create an ErrorBoundary class component that catches loading errors.',
        starterCode: `import { Suspense, lazy, Component } from 'react';

// TODO: Convert these to lazy imports
// import Home from './Home';
// import Dashboard from './Dashboard';
// import Settings from './Settings';

// TODO: Create ErrorBoundary class component
// TODO: Wrap routes in ErrorBoundary + Suspense`,
        solution: `import { Suspense, lazy, Component } from 'react';

const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}`,
        hints: [
          'Replace import statements with lazy(() => import(...))',
          'Wrap lazy components in <Suspense> with a fallback',
          'ErrorBoundary must be a class with getDerivedStateFromError',
        ],
      },
    },
    {
      id: 'mod8-t3',
      title: 'React Best Practices',
      explanation: `## Key Best Practices

### 1. Component Organization

\`\`\`
src/
  components/       # Reusable UI components
    Button/
      Button.tsx
      Button.test.tsx
      Button.module.css
  pages/            # Route-level components
  hooks/            # Custom hooks
  context/          # Context providers
  utils/            # Helper functions
  types/            # TypeScript types
\`\`\`

### 2. Prop Naming Conventions

\`\`\`jsx
// ✅ Good — descriptive, consistent
<UserCard
  userName="Alice"
  isActive={true}
  onStatusChange={handleChange}
  renderAvatar={() => <Avatar />}
/>

// ❌ Bad — unclear, inconsistent
<UserCard n="Alice" a={true} cb={fn} avatar={fn} />
\`\`\`

### 3. Avoid Derived State

\`\`\`jsx
// ❌ Bad — duplicates state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
// You have to keep count in sync with items!

// ✅ Good — derive from existing state
const [items, setItems] = useState([]);
const count = items.length;
\`\`\`

### 4. Keep Components Small

Each component should do **one thing**. If it's doing too much, split it.

### 5. Prefer Composition Over Inheritance

\`\`\`jsx
// ✅ Composition
function Dialog({ title, children }) {
  return (
    <div className="dialog">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function ConfirmDialog({ onConfirm }) {
  return (
    <Dialog title="Are you sure?">
      <button onClick={onConfirm}>Yes</button>
    </Dialog>
  );
}
\`\`\`

### 6. Use Fragments to Avoid Extra DOM Nodes

\`\`\`jsx
// ✅ No extra wrapper
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
\`\`\`

### 7. Handle Loading and Error States

Always account for loading, error, and empty states in data-driven components.`,
      task: {
        description:
          'Refactor a poorly-structured component that has too many responsibilities: it fetches data, transforms it, manages a form, and renders everything. Split it into smaller components and a custom hook. Follow best practices.',
        starterCode: `// This component does too much — refactor it!
function UserManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(d => { setUsers(d); setLoading(false); });
  }, []);

  const activeUsers = users.filter(u => u.active);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { name, email, active: true }]);
    setName(''); setEmail('');
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>{activeUsers.map(u => <li>{u.name} ({u.email})</li>)}</ul>
    </div>
  );
}`,
        solution: `// Custom hook for user data
function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => { setUsers(data); setLoading(false); });
  }, []);

  const addUser = (user) => {
    setUsers(prev => [...prev, { ...user, active: true }]);
  };

  const activeUsers = users.filter(u => u.active);

  return { users: activeUsers, loading, addUser };
}

// Form component
function AddUserForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
  );
}

// List component
function UserList({ users }) {
  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>{u.name} ({u.email})</li>
      ))}
    </ul>
  );
}

// Main component — composes the pieces
function UserManager() {
  const { users, loading, addUser } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <AddUserForm onAdd={addUser} />
      <UserList users={users} />
    </div>
  );
}`,
        hints: [
          'Extract fetching logic into a custom hook (useUsers)',
          'Move the form into its own component (AddUserForm)',
          'Move the list into its own component (UserList)',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod8-q1',
      question: 'When should you use React.memo?',
      options: ['Only when you\'ve identified a measurable performance issue from unnecessary re-renders', 'On every component by default to ensure the best possible rendering performance', 'Only on class components because functional components cannot be memoized', 'Never — React.memo has been deprecated in favor of the React Compiler approach'],
      correctAnswer: 0,
      explanation:
        'React.memo should be used when profiling identifies that a component re-renders unnecessarily with unchanged props and it causes a noticeable performance impact.',
    },
    {
      id: 'mod8-q2',
      question: 'What does React.lazy require to display content while loading?',
      options: ['A loading state variable toggled by the parent component\'s useEffect hook', 'A Suspense component with a fallback prop', 'An ErrorBoundary component that catches and displays loading exceptions', 'A useEffect hook that monitors the lazy component\'s loading progress'],
      correctAnswer: 1,
      explanation:
        'React.lazy components must be wrapped in a <Suspense> component that provides a fallback UI to display while the lazy component is being loaded.',
    },
    {
      id: 'mod8-q3',
      question: 'Why is derived state (duplicating state that can be computed) an anti-pattern?',
      options: ['It uses too much memory because React creates duplicate copies of the data', 'It always causes infinite re-render loops that crash the application entirely', 'React does not support derived values — you must only use primitive state types', 'It can get out of sync with the source state, causing bugs'],
      correctAnswer: 3,
      explanation:
        'Derived state is redundant and can become inconsistent with the source data. Instead, compute values from existing state during rendering.',
    },
    {
      id: 'mod8-q4',
      question: 'What is the main benefit of code splitting at route boundaries?',
      options: ['Easier debugging because each page has its own isolated error boundary scope', 'Better SEO rankings because search engines prefer route-based component structures', 'Each page\'s code is loaded only when the user navigates to it, reducing initial bundle size', 'Faster state updates because each route maintains its own independent state tree'],
      correctAnswer: 2,
      explanation:
        'Route-based code splitting ensures that users only download the JavaScript needed for the page they\'re viewing, improving initial load time.',
    },
    {
      id: 'mod8-q5',
      question: 'What does "composition over inheritance" mean in React?',
      options: ['Always use class components because they provide better lifecycle control and access', 'Build complex UIs by combining smaller components via props and children, not by extending classes', 'Use TypeScript interfaces exclusively to define strict component contracts and prop types', 'Avoid using the children prop entirely and pass all content through explicit named props'],
      correctAnswer: 1,
      explanation:
        'React favors building UIs from small, reusable components composed together via props and children, rather than using class inheritance hierarchies.',
    },
  ],
};
