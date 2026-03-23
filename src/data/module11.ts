import type { Module } from '../types';

export const module11: Module = {
  id: 'mod-11',
  title: 'React Traps',
  description:
    'Avoid the most common React pitfalls: stale closures, infinite re-render loops, useEffect dependency mistakes, state batching surprises, and object/array mutation traps.',
  topics: [
    {
      id: 'mod11-t1',
      title: 'Stale Closures',
      explanation: `## The Stale Closure Problem

JavaScript closures capture variables **by reference**, but the reference points to the value at the time the closure was created. In React, this leads to reading **stale state** values.

### Classic Example: setInterval

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // ❌ Bug! count is always 0 here (captured at mount)
      console.log('count:', count);
      setCount(count + 1); // Always sets to 1
    }, 1000);
    return () => clearInterval(id);
  }, []); // Empty deps = closure captures initial count
}
\`\`\`

### Fix 1: Functional Updates

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    // ✅ Functional update always uses latest state
    setCount(prev => prev + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
\`\`\`

### Fix 2: useRef for Latest Value

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count; // Always sync

  useEffect(() => {
    const id = setInterval(() => {
      // ✅ Ref always has the latest value
      console.log('count:', countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);
}
\`\`\`

### Fix 3: Proper Dependencies

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('count:', count);
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(id);
}, [count]); // ✅ Re-creates interval when count changes
// (but this creates a new interval every second!)
\`\`\`

### Event Handler Stale Closures

\`\`\`jsx
function Chat({ messages }) {
  const [draft, setDraft] = useState('');

  // ❌ If this is memoized, it captures stale draft
  const handleSend = useCallback(() => {
    sendMessage(draft);
  }, []); // Missing draft dependency!

  // ✅ Fixed
  const handleSend = useCallback(() => {
    sendMessage(draft);
  }, [draft]);
}
\`\`\``,
      tasks: [{
        description:
          'Create a `StopWatch` component with start/stop/reset buttons. It should display elapsed time in seconds. Use setInterval correctly, avoiding the stale closure trap.',
        starterCode: `function StopWatch() {
  // TODO: Track elapsed time and running state
  // TODO: Use setInterval without stale closure bugs
  // TODO: Implement start, stop, reset
  return null;
}`,
        solution: `function StopWatch() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <div>
      <p>{elapsed}s</p>
      <button onClick={() => setRunning(true)} disabled={running}>Start</button>
      <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
        hints: [
          'Use functional update (prev => prev + 1) to avoid stale closure',
          'Store the interval ID in a ref so cleanup can clear it',
          'Let the running state control the useEffect that creates/clears the interval',
        ],
      }],
    },
    {
      id: 'mod11-t2',
      title: 'Infinite Re-render Loops',
      explanation: `## Common Causes of Infinite Loops

### 1. Setting State During Render

\`\`\`jsx
function Bad() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // ❌ Infinite loop! State update triggers re-render
  return <p>{count}</p>;
}
\`\`\`

### 2. Object/Array in useEffect Dependencies

\`\`\`jsx
function Bad({ userId }) {
  const [user, setUser] = useState(null);

  // ❌ New object reference every render → infinite loop
  const options = { method: 'GET', headers: { Accept: 'application/json' } };

  useEffect(() => {
    fetch(\\\`/api/users/\\\${userId}\\\`, options)
      .then(r => r.json())
      .then(setUser);
  }, [userId, options]); // options is new every render!
}

// ✅ Fix: move options inside useEffect or useMemo
function Good({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };
    fetch(\\\`/api/users/\\\${userId}\\\`, options)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
}
\`\`\`

### 3. Setting State Inside useEffect Without Guards

\`\`\`jsx
function Bad() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ❌ Infinite: setFiltered triggers re-render → useEffect runs again
  useEffect(() => {
    setFiltered(items.filter(i => i.active));
  }, [items]); // Looks fine, but if items is recreated each render...
}

// ✅ Fix: Derive state during render
function Good() {
  const [items, setItems] = useState([]);
  const filtered = items.filter(i => i.active); // No useEffect needed
}
\`\`\`

### 4. Function Dependencies

\`\`\`jsx
function Bad() {
  // ❌ New function every render → useEffect runs infinitely
  const fetchData = () => fetch('/api/data').then(r => r.json());

  useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]); // New reference every time

  // ✅ Fix: wrap in useCallback
  const fetchData = useCallback(
    () => fetch('/api/data').then(r => r.json()),
    []
  );
}
\`\`\`

### Debugging Infinite Loops

Add a render counter to detect them:
\`\`\`jsx
const renderCount = useRef(0);
renderCount.current++;
console.log('Render #', renderCount.current);
\`\`\``,
      tasks: [{
        description:
          'You are given a buggy component that has an infinite re-render loop. Fix it. The component should fetch a list of users and allow filtering by a search term.',
        starterCode: `function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchOptions = { method: 'GET' };

  useEffect(() => {
    fetch('/api/users', fetchOptions)
      .then(r => r.json())
      .then(data => setUsers(data));
  }, [fetchOptions]);

  useEffect(() => {
    setFilteredUsers(users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    ));
  }, [users, search]);

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {filteredUsers.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}`,
        solution: `function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/users', { method: 'GET' })
      .then(r => r.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {filteredUsers.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}`,
        hints: [
          'fetchOptions creates a new object every render — move it inside useEffect or remove from deps',
          'filteredUsers is derived state — compute it during render instead of storing it',
          'The fetch only needs to run once on mount — use an empty dependency array',
        ],
      }],
    },
    {
      id: 'mod11-t3',
      title: 'State Mutation Traps',
      explanation: `## Never Mutate State Directly

React uses **referential equality** (\`===\`) to detect changes. If you mutate an object or array in place, React doesn't see a change and **won't re-render**.

### Array Mutations

\`\`\`jsx
// ❌ Mutating the same array — React won't re-render
const handleAdd = (item) => {
  items.push(item);
  setItems(items); // Same reference! React ignores this
};

// ✅ Create a new array
const handleAdd = (item) => {
  setItems([...items, item]);
};

// ✅ Other immutable array operations
setItems(items.filter(i => i.id !== id));         // Remove
setItems(items.map(i => i.id === id ? {...i, done: true} : i)); // Update
\`\`\`

### Object Mutations

\`\`\`jsx
// ❌ Mutating the same object
const handleUpdate = () => {
  user.name = 'New Name';
  setUser(user); // Same reference!
};

// ✅ Create a new object
const handleUpdate = () => {
  setUser({ ...user, name: 'New Name' });
};
\`\`\`

### Nested Object Traps

\`\`\`jsx
// ❌ Shallow spread doesn't help with nested objects
const handleUpdate = () => {
  const newUser = { ...user };
  newUser.address.city = 'New City'; // Still mutates the nested object!
  setUser(newUser);
};

// ✅ Spread at every level
const handleUpdate = () => {
  setUser({
    ...user,
    address: { ...user.address, city: 'New City' },
  });
};
\`\`\`

### The Sort Trap

\`\`\`jsx
// ❌ .sort() mutates the array in place!
const sorted = items.sort((a, b) => a.name.localeCompare(b.name));
setItems(sorted); // Same reference as items!

// ✅ Copy first, then sort
const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
setItems(sorted);
\`\`\`

### Using Immer for Complex Updates

\`\`\`jsx
import { produce } from 'immer';

setUser(produce(draft => {
  draft.address.city = 'New City';
  draft.contacts[0].email = 'new@email.com';
}));
\`\`\``,
      tasks: [{
        description:
          'Fix a buggy `TodoApp` component that has several state mutation bugs. The app should let you add todos, toggle their completion, delete todos, and sort them by name.',
        starterCode: `function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build app', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    todos.push({ id: Date.now(), text: input, done: false });
    setTodos(todos);
    setInput('');
  };

  const toggleTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    todo.done = !todo.done;
    setTodos(todos);
  };

  const deleteTodo = (id) => {
    const idx = todos.findIndex(t => t.id === id);
    todos.splice(idx, 1);
    setTodos(todos);
  };

  const sortTodos = () => {
    todos.sort((a, b) => a.text.localeCompare(b.text));
    setTodos(todos);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={sortTodos}>Sort</button>
      {todos.map(t => (
        <div key={t.id}>
          <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(t.id)}>{t.text}</span>
          <button onClick={() => deleteTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}`,
        solution: `function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build app', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const sortTodos = () => {
    setTodos([...todos].sort((a, b) => a.text.localeCompare(b.text)));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={sortTodos}>Sort</button>
      {todos.map(t => (
        <div key={t.id}>
          <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(t.id)}>{t.text}</span>
          <button onClick={() => deleteTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}`,
        hints: [
          'Use spread [...todos, newItem] instead of push()',
          'Use .map() with spread for updates, .filter() for deletions',
          'Copy the array before sorting: [...todos].sort(...)',
        ],
      }],
    },
    {
      id: 'mod11-t4',
      title: 'useEffect Dependency Pitfalls',
      explanation: `## Common useEffect Mistakes

### 1. Missing Dependencies

\`\`\`jsx
// ❌ Missing 'userId' in deps — fetches wrong user
function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\\\`/api/users/\\\${userId}\\\`)
      .then(r => r.json())
      .then(setUser);
  }, []); // userId is missing!

  // ✅ Fixed
  useEffect(() => {
    fetch(\\\`/api/users/\\\${userId}\\\`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
}
\`\`\`

### 2. Over-Fetching with Too Many Deps

\`\`\`jsx
// ❌ Fetches again whenever ANY state changes
useEffect(() => {
  fetchDashboardData(userId, filters, sortOrder);
}, [userId, filters, sortOrder]); // Too reactive!

// ✅ Separate concerns
useEffect(() => {
  fetchUserData(userId);
}, [userId]);

// Derive filtered/sorted data during render
const displayed = useMemo(
  () => applyFilters(data, filters, sortOrder),
  [data, filters, sortOrder]
);
\`\`\`

### 3. Race Conditions

\`\`\`jsx
// ❌ If userId changes quickly, old response may arrive last
useEffect(() => {
  fetch(\\\`/api/users/\\\${userId}\\\`)
    .then(r => r.json())
    .then(setUser);
}, [userId]);

// ✅ Use cleanup to ignore stale responses
useEffect(() => {
  let cancelled = false;
  fetch(\\\`/api/users/\\\${userId}\\\`)
    .then(r => r.json())
    .then(data => {
      if (!cancelled) setUser(data);
    });
  return () => { cancelled = true; };
}, [userId]);

// ✅ Or use AbortController
useEffect(() => {
  const controller = new AbortController();
  fetch(\\\`/api/users/\\\${userId}\\\`, { signal: controller.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(e => {
      if (e.name !== 'AbortError') throw e;
    });
  return () => controller.abort();
}, [userId]);
\`\`\`

### 4. useEffect for Synchronous Logic

\`\`\`jsx
// ❌ Don't use useEffect for derived state
useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);

// ✅ Just compute it
const fullName = firstName + ' ' + lastName;
\`\`\`

### 5. Forgetting Cleanup

\`\`\`jsx
// ❌ Memory leak with subscriptions
useEffect(() => {
  const ws = new WebSocket('ws://api');
  ws.onmessage = (e) => setMessages(prev => [...prev, e.data]);
  // No cleanup!
}, []);

// ✅ Always clean up
useEffect(() => {
  const ws = new WebSocket('ws://api');
  ws.onmessage = (e) => setMessages(prev => [...prev, e.data]);
  return () => ws.close();
}, []);
\`\`\``,
      tasks: [{
        description:
          'Fix a component that fetches user profile data. It has three bugs: missing dependency, race condition, and missing cleanup. The component should correctly handle rapid userId changes.',
        starterCode: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return <h1>{user?.name}</h1>;
}`,
        solution: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(e => {
        if (e.name !== 'AbortError') {
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <h1>{user?.name}</h1>;
}`,
        hints: [
          'Add userId to the dependency array',
          'Use AbortController to cancel in-flight requests when userId changes',
          'Return a cleanup function that calls controller.abort()',
        ],
      }],
    },
  ],
  test: [
    {
      id: 'mod11-q1',
      question: 'What is a "stale closure" in React?',
      options: [
        'A component that has been unmounted but still exists in the virtual DOM',
        'A function that captures an old value of state or props from a previous render',
        'A CSS class that is no longer applied to any DOM elements',
        'A memory leak caused by not cleaning up event listeners properly',
      ],
      correctAnswer: 1,
      explanation:
        'A stale closure occurs when a function (created in a previous render) captures and uses an old value of state or props. Common with setInterval, setTimeout, and event handlers.',
    },
    {
      id: 'mod11-q2',
      question: 'Why does items.push(newItem); setItems(items) not trigger a re-render?',
      options: [
        'push() is not a valid JavaScript method for arrays',
        'React uses referential equality (===) and the reference hasn\'t changed',
        'setItems only accepts primitive values, not arrays',
        'React batches array updates and delays the re-render indefinitely',
      ],
      correctAnswer: 1,
      explanation:
        'push() mutates the array in place. Since items is the same reference before and after, React\'s === check sees no change and skips re-rendering. Always create a new array: setItems([...items, newItem]).',
    },
    {
      id: 'mod11-q3',
      question: 'How can you prevent race conditions in useEffect data fetching?',
      options: [
        'By using synchronous XMLHttpRequest instead of fetch',
        'By removing all dependencies from the useEffect array',
        'By using AbortController to cancel outdated requests in the cleanup function',
        'By wrapping the fetch call in a try-catch block',
      ],
      correctAnswer: 2,
      explanation:
        'AbortController lets you cancel an in-flight fetch request when the component unmounts or when the dependency changes. The cleanup function calls controller.abort() to prevent stale data from being set.',
    },
    {
      id: 'mod11-q4',
      question: 'What is wrong with: useEffect(() => { setFilteredItems(items.filter(fn)); }, [items])?',
      options: [
        'filter() is not allowed inside useEffect',
        'It\'s unnecessary — derived state should be computed during render, not in useEffect',
        'items cannot be used as a useEffect dependency',
        'useEffect cannot call setState — it causes an error',
      ],
      correctAnswer: 1,
      explanation:
        'filteredItems is derived state — it can always be computed from items and the filter function. Using useEffect to sync it is unnecessary and creates an extra render cycle. Just compute it: const filtered = items.filter(fn).',
    },
    {
      id: 'mod11-q5',
      question: 'Which operation mutates the array in place and can cause bugs in React?',
      options: [
        'items.filter(fn)',
        'items.map(fn)',
        'items.sort(fn)',
        '[...items, newItem]',
      ],
      correctAnswer: 2,
      explanation:
        'Array.sort() mutates the original array in place and returns the same reference. In React, use [...items].sort(fn) to create a copy first. filter() and map() already return new arrays.',
    },
  ],
};
