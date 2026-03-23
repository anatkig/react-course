import type { Module } from '../types';

export const module10: Module = {
  id: 'mod-10',
  title: 'React Tricks',
  description:
    'Discover powerful React patterns and tricks: portals, key-based remounting, ref forwarding, compound components, and clever state patterns.',
  topics: [
    {
      id: 'mod10-t1',
      title: 'Portals — Rendering Outside the DOM Hierarchy',
      explanation: `## React Portals

Portals let you render a child into a DOM node that exists **outside the parent component's DOM hierarchy**, while keeping it inside React's component tree.

\`\`\`jsx
import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}
\`\`\`

### Why Portals?

1. **Escape CSS overflow/z-index issues** — Modals, tooltips, and dropdowns often get clipped by \`overflow: hidden\` on ancestors. Portals move them to document body.
2. **Event bubbling still works** — Even though the DOM node is outside the parent, React events still bubble up through the React tree.
3. **Preserve context** — Portals still have access to React context from their parent.

### Portal Use Cases

- **Modals & dialogs**
- **Tooltips & popovers**
- **Toast notifications**
- **Dropdown menus** that need to overflow containers

### Creating a Reusable Portal Component

\`\`\`jsx
function Portal({ children, containerId = 'portal-root' }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let el = document.getElementById(containerId);
    if (!el) {
      el = document.createElement('div');
      el.id = containerId;
      document.body.appendChild(el);
    }
    setContainer(el);
  }, [containerId]);

  if (!container) return null;
  return createPortal(children, container);
}
\`\`\``,
      tasks: [{
        description:
          'Create a `Tooltip` component using a portal. It should render the tooltip content at document.body level. The tooltip should appear when the user hovers over the trigger element and disappear when they leave.',
        starterCode: `function Tooltip({ children, text }) {
  // TODO: Track hover state
  // TODO: Use createPortal to render tooltip at document.body
  // TODO: Position tooltip near the trigger element
  return null;
}`,
        solution: `function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  const show = () => {
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ top: rect.top - 30 + window.scrollY, left: rect.left + rect.width / 2 });
    setVisible(true);
  };

  const hide = () => setVisible(false);

  return (
    <>
      <span ref={triggerRef} onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </span>
      {visible && createPortal(
        <div className="tooltip" style={{ position: 'absolute', top: pos.top, left: pos.left, transform: 'translateX(-50%)' }}>
          {text}
        </div>,
        document.body
      )}
    </>
  );
}`,
        hints: [
          'Import createPortal from "react-dom"',
          'Use getBoundingClientRect() to get the position of the trigger element',
          'Remember to add window.scrollY for absolute positioning',
        ],
      }],
    },
    {
      id: 'mod10-t2',
      title: 'Key-Based Component Remounting',
      explanation: `## The Key Trick: Resetting Components

When you change a component's \`key\` prop, React **unmounts the old instance and mounts a fresh one**, completely resetting all state.

\`\`\`jsx
function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <button onClick={() => setUserId(id => id + 1)}>Next User</button>
      {/* When userId changes, EditProfile is completely remounted */}
      <EditProfile key={userId} userId={userId} />
    </>
  );
}

function EditProfile({ userId }) {
  // This state resets when key changes — no stale data!
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  // ...
}
\`\`\`

### When to Use Key Remounting

1. **Resetting form state** when switching between entities (users, products, etc.)
2. **Restarting animations** by forcing remount
3. **Clearing component state** without manual reset logic
4. **Forcing useEffect re-runs** by causing full remount

### Key Swap Trick for Transitions

\`\`\`jsx
function AnimatedList({ items, activeId }) {
  return (
    <div>
      {/* Force animation restart when activeId changes */}
      <DetailPanel key={activeId} item={items.find(i => i.id === activeId)} />
    </div>
  );
}
\`\`\`

### Alternative: Using a Reset Callback

If remounting is too expensive, pass a reset version counter:

\`\`\`jsx
function ResettableForm({ resetKey, onSubmit }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');  // Reset when resetKey changes
  }, [resetKey]);

  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
\`\`\``,
      tasks: [{
        description:
          'Create a `TabEditor` component with multiple tabs (e.g., "Bio", "Settings", "Notes"). Each tab shows a text area. Use the key trick to reset the text area content when switching tabs, without manual state clearing.',
        starterCode: `const TABS = ['Bio', 'Settings', 'Notes'];

function TabEditor() {
  // TODO: Track active tab
  // TODO: Use key to reset editor when tab changes
  return null;
}

function Editor({ tabName }) {
  // TODO: Text area with local state
  return null;
}`,
        solution: `const TABS = ['Bio', 'Settings', 'Notes'];

function TabEditor() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div>
      <div className="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <Editor key={activeTab} tabName={activeTab} />
    </div>
  );
}

function Editor({ tabName }) {
  const [text, setText] = useState('');

  return (
    <div>
      <h3>{tabName}</h3>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder={\`Write your \${tabName.toLowerCase()}...\`} />
    </div>
  );
}`,
        hints: [
          'Pass activeTab as the key prop to the Editor component',
          'When the key changes, React unmounts and remounts the component',
          'The Editor component just needs a simple useState for its text',
        ],
      }],
    },
    {
      id: 'mod10-t3',
      title: 'Ref Forwarding & useImperativeHandle',
      explanation: `## Forwarding Refs

By default, you can't pass a \`ref\` to a function component. \`forwardRef\` solves this:

\`\`\`jsx
import { forwardRef } from 'react';

const FancyInput = forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} className="fancy" {...props} />;
});

// Parent can now access the input's DOM node
function Form() {
  const inputRef = useRef(null);
  return (
    <>
      <FancyInput ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
\`\`\`

### useImperativeHandle: Custom Ref API

Instead of exposing the full DOM node, you can expose a **custom API**:

\`\`\`jsx
const VideoPlayer = forwardRef(function VideoPlayer({ src }, ref) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    restart: () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    },
  }));

  return <video ref={videoRef} src={src} />;
});

// Parent gets a clean API
function App() {
  const playerRef = useRef(null);
  return (
    <>
      <VideoPlayer ref={playerRef} src="movie.mp4" />
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
      <button onClick={() => playerRef.current.restart()}>Restart</button>
    </>
  );
}
\`\`\`

### When to Use

- **Component libraries** — expose focus/scroll methods on custom inputs
- **Complex components** — expose a simplified imperative API
- **Integration with third-party libraries** — wrap imperative APIs in React components`,
      tasks: [{
        description:
          'Create a `CountdownTimer` component that uses `forwardRef` and `useImperativeHandle` to expose `start()`, `stop()`, and `reset()` methods to the parent. The timer should count down from a given number of seconds.',
        starterCode: `// TODO: Use forwardRef and useImperativeHandle
function CountdownTimer({ seconds }, ref) {
  // TODO: Track remaining time
  // TODO: Expose start, stop, reset via ref
  return null;
}`,
        solution: `const CountdownTimer = forwardRef(function CountdownTimer({ seconds }, ref) {
  const [remaining, setRemaining] = useState(seconds);
  const intervalRef = useRef(null);

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  };

  const reset = () => {
    stop();
    setRemaining(seconds);
  };

  useImperativeHandle(ref, () => ({ start, stop, reset }));

  useEffect(() => stop, []);

  return <div className="countdown">{remaining}s</div>;
});`,
        hints: [
          'Wrap the component with forwardRef to receive the ref parameter',
          'Use setInterval and store its id in a ref for cleanup',
          'useImperativeHandle takes (ref, createHandle) as arguments',
        ],
      }],
    },
    {
      id: 'mod10-t4',
      title: 'Clever State Patterns',
      explanation: `## State Reducer Pattern

Let consumers customize state transitions by passing a custom reducer:

\`\`\`jsx
function useToggle({ reducer = (state, action) => action.changes } = {}) {
  const [on, setOn] = useState(false);

  function toggle() {
    const changes = !on;
    const result = reducer({ on }, { type: 'toggle', changes });
    setOn(result);
  }

  return { on, toggle };
}

// Usage — limit toggles
function App() {
  const [count, setCount] = useState(0);

  const { on, toggle } = useToggle({
    reducer: (state, action) => {
      if (count >= 4) return state.on; // Max 4 toggles
      setCount(c => c + 1);
      return action.changes;
    },
  });
}
\`\`\`

## Derived State: Compute, Don't Store

\`\`\`jsx
// ❌ Bad — storing derived state
const [items, setItems] = useState(allItems);
const [filteredItems, setFilteredItems] = useState(allItems);
const [filter, setFilter] = useState('');

useEffect(() => {
  setFilteredItems(items.filter(i => i.name.includes(filter)));
}, [filter, items]);

// ✅ Good — derive during render
const [items, setItems] = useState(allItems);
const [filter, setFilter] = useState('');
const filteredItems = items.filter(i => i.name.includes(filter));
\`\`\`

## Lazy Initialization

Pass a function to \`useState\` for expensive initial values:

\`\`\`jsx
// ❌ Bad — runs every render (the getExpensiveValue call)
const [data, setData] = useState(getExpensiveValue());

// ✅ Good — runs only on mount
const [data, setData] = useState(() => getExpensiveValue());
\`\`\`

## Functional Updates

Use functional form when the new state depends on the old:

\`\`\`jsx
// ❌ Stale closure risk
setCount(count + 1);

// ✅ Always uses latest state
setCount(prev => prev + 1);
\`\`\``,
      tasks: [{
        description:
          'Create an `useUndoableState` hook that wraps useState and adds undo/redo functionality. It should maintain a history stack and provide `undo()`, `redo()`, `set()`, and `canUndo`/`canRedo` flags.',
        starterCode: `function useUndoableState(initialValue) {
  // TODO: Track history (past, present, future)
  // TODO: Implement set, undo, redo
  // TODO: Return { value, set, undo, redo, canUndo, canRedo }
}`,
        solution: `function useUndoableState(initialValue) {
  const [state, setState] = useState({
    past: [],
    present: initialValue,
    future: [],
  });

  const set = (newValue) => {
    setState(s => ({
      past: [...s.past, s.present],
      present: typeof newValue === 'function' ? newValue(s.present) : newValue,
      future: [],
    }));
  };

  const undo = () => {
    setState(s => {
      if (s.past.length === 0) return s;
      const previous = s.past[s.past.length - 1];
      return {
        past: s.past.slice(0, -1),
        present: previous,
        future: [s.present, ...s.future],
      };
    });
  };

  const redo = () => {
    setState(s => {
      if (s.future.length === 0) return s;
      const next = s.future[0];
      return {
        past: [...s.past, s.present],
        present: next,
        future: s.future.slice(1),
      };
    });
  };

  return {
    value: state.present,
    set,
    undo,
    redo,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0,
  };
}`,
        hints: [
          'Use a single state object with past (array), present, and future (array)',
          'On set: push present to past, clear future',
          'On undo: pop from past, push present to future',
        ],
      }],
    },
  ],
  test: [
    {
      id: 'mod10-q1',
      question: 'What happens when you change a component\'s key prop?',
      options: [
        'React updates the component\'s props without re-rendering',
        'React unmounts the old instance and mounts a completely new one',
        'React triggers the componentDidUpdate lifecycle method only',
        'React throws an error because key is a reserved internal prop',
      ],
      correctAnswer: 1,
      explanation:
        'Changing a component\'s key causes React to treat it as a completely different element. The old component is unmounted and a new one is mounted, resetting all internal state.',
    },
    {
      id: 'mod10-q2',
      question: 'What problem do React portals solve?',
      options: [
        'They improve rendering performance by batching DOM updates',
        'They allow rendering children into a DOM node outside the parent hierarchy',
        'They create isolated JavaScript contexts for security',
        'They enable server-side rendering of client-only components',
      ],
      correctAnswer: 1,
      explanation:
        'Portals render children into a different DOM node while keeping them in the same React tree. This solves CSS overflow/z-index issues for modals, tooltips, and dropdowns.',
    },
    {
      id: 'mod10-q3',
      question: 'What does useImperativeHandle do?',
      options: [
        'It forces a component to use imperative (class-based) lifecycle methods',
        'It lets you customize the value exposed to parent components via ref',
        'It prevents child components from having any state',
        'It converts a controlled component into an uncontrolled one',
      ],
      correctAnswer: 1,
      explanation:
        'useImperativeHandle is used with forwardRef to expose a custom API through the ref, instead of exposing the entire DOM node. This gives parents a clean imperative interface.',
    },
    {
      id: 'mod10-q4',
      question: 'Why should you pass a function to useState for expensive initial values?',
      options: [
        'Functions are faster to store in memory than primitive values',
        'It makes the component a pure function by avoiding side effects',
        'The function runs only on mount, avoiding expensive computation every render',
        'React requires all initial state values to be wrapped in functions',
      ],
      correctAnswer: 2,
      explanation:
        'useState(() => expensiveValue()) is lazy initialization. The function runs only once on mount. Without it, useState(expensiveValue()) calls the expensive function on every render even though the result is ignored after mount.',
    },
    {
      id: 'mod10-q5',
      question: 'What is wrong with storing derived state separately with useState?',
      options: [
        'It requires TypeScript generics which are not supported',
        'It creates duplicated data that can go out of sync and causes unnecessary re-renders',
        'React does not allow more than three useState calls per component',
        'Derived state requires useReducer and cannot use useState',
      ],
      correctAnswer: 1,
      explanation:
        'Storing derived state creates a second source of truth that must be kept in sync (usually via useEffect). Instead, compute it during render: const filtered = items.filter(...). This is simpler and always consistent.',
    },
  ],
};
