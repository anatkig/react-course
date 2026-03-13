import type { Module } from '../types';

export const module3: Module = {
  id: 'mod-3',
  title: 'Side Effects & Lifecycle',
  description:
    'Understand component lifecycle, side effects with useEffect, data fetching, and cleanup patterns.',
  topics: [
    {
      id: 'mod3-t1',
      title: 'useEffect Basics',
      explanation: `## Side Effects with useEffect

**Side effects** are operations that reach outside the React rendering cycle: API calls, timers, subscriptions, DOM manipulation, etc.

\`\`\`jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function — runs on unmount
    return () => clearInterval(interval);
  }, []); // Empty deps = run once on mount

  return <p>Elapsed: {seconds}s</p>;
}
\`\`\`

### Dependency Array Patterns

| Pattern | When it runs |
|---------|-------------|
| \`useEffect(fn)\` | After **every** render |
| \`useEffect(fn, [])\` | Only after the **first** render (mount) |
| \`useEffect(fn, [a, b])\` | After mount AND when **a or b** change |

### Cleanup Function

The function returned from useEffect runs:
- **Before the effect re-runs** (when dependencies change)
- **When the component unmounts**

\`\`\`jsx
useEffect(() => {
  const handler = () => console.log('resize');
  window.addEventListener('resize', handler);

  return () => {
    window.removeEventListener('resize', handler);
  };
}, []);
\`\`\`

### Common Mistake: Missing Dependencies

\`\`\`jsx
// ⚠️ Bug: count is stale — never updates in the effect
useEffect(() => {
  console.log(count); // always logs initial value
}, []);

// ✅ Fixed: include count in dependencies
useEffect(() => {
  console.log(count);
}, [count]);
\`\`\``,
      task: {
        description:
          'Create a `WindowSize` component that displays the current window width and height. Use useEffect to listen for the resize event and clean up the listener on unmount.',
        starterCode: `import { useState, useEffect } from 'react';

function WindowSize() {
  // TODO: Track window width and height in state
  // TODO: Set up resize listener in useEffect
  // TODO: Clean up the listener
  return null;
}`,
        solution: `import { useState, useEffect } from 'react';

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <p>Window: {size.width} × {size.height}</p>
  );
}`,
        hints: [
          'Initialize state with current window dimensions',
          'Use window.addEventListener in useEffect',
          'Return a cleanup function that calls removeEventListener',
        ],
      },
    },
    {
      id: 'mod3-t2',
      title: 'Data Fetching',
      explanation: `## Fetching Data with useEffect

A common pattern is to fetch data when a component mounts:

\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(\`/api/users/\${userId}\`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (!cancelled) {
          setUser(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => { cancelled = true; };
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{user.name}</h1>;
}
\`\`\`

### Key Patterns

1. **Loading state** — show a spinner or skeleton while fetching.
2. **Error state** — handle and display errors gracefully.
3. **Cancellation** — use a boolean flag or AbortController to prevent state updates on unmounted components.
4. **Dependency array** — refetch when relevant props change (like \`userId\`).

### AbortController Pattern

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== 'AbortError') setError(err.message);
    });

  return () => controller.abort();
}, [url]);
\`\`\``,
      task: {
        description:
          'Create a `PostViewer` component that fetches a post from JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts/{id}). Accept `postId` as a prop. Show loading, error, and success states. Implement request cancellation using AbortController.',
        starterCode: `import { useState, useEffect } from 'react';

function PostViewer({ postId }) {
  // TODO: states for post, loading, error
  // TODO: fetch post using useEffect
  // TODO: cancel request on cleanup
  return null;
}`,
        solution: `import { useState, useEffect } from 'react';

function PostViewer({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}`,
        hints: [
          'Create an AbortController and pass its signal to fetch',
          'In the cleanup, call controller.abort()',
          'Check err.name !== "AbortError" before setting error state',
        ],
      },
    },
    {
      id: 'mod3-t3',
      title: 'useEffect Dependencies Deep Dive',
      explanation: `## Understanding Dependencies

The dependency array tells React **when** to re-run the effect. React compares each dependency with its previous value using \`Object.is()\`.

### Primitive vs. Reference Types

\`\`\`jsx
// ✅ Primitives — compared by value
useEffect(() => { /* ... */ }, [count, name]);

// ⚠️ Objects/arrays — compared by reference!
const options = { method: 'GET' }; // new object every render!
useEffect(() => {
  fetch(url, options);
}, [options]); // runs every render!
\`\`\`

### Solutions for Reference Dependencies

**1. Move object creation inside the effect:**
\`\`\`jsx
useEffect(() => {
  const options = { method: 'GET' };
  fetch(url, options);
}, [url]);
\`\`\`

**2. Depend on primitive values instead:**
\`\`\`jsx
useEffect(() => {
  fetch(url, { method, headers: { auth: token } });
}, [url, method, token]);
\`\`\`

**3. Use useMemo for computed objects:**
\`\`\`jsx
const options = useMemo(() => ({ method, token }), [method, token]);
useEffect(() => {
  fetch(url, options);
}, [url, options]);
\`\`\`

### Multiple Effects

Split unrelated logic into separate useEffect calls:

\`\`\`jsx
// ✅ Separated concerns
useEffect(() => {
  document.title = \`(\${count}) My App\`;
}, [count]);

useEffect(() => {
  const sub = subscribe(channel);
  return () => sub.unsubscribe();
}, [channel]);
\`\`\``,
      task: {
        description:
          'Create a `SearchResults` component that fetches search results when a `query` prop changes but only after a 500ms debounce. Use useEffect with proper cleanup to cancel the previous timeout when the query changes.',
        starterCode: `import { useState, useEffect } from 'react';

function SearchResults({ query }) {
  // TODO: debounce the search with a 500ms delay
  // TODO: fetch results only after debounce
  // TODO: cleanup previous timeouts
  return null;
}`,
        solution: `import { useState, useEffect } from 'react';

function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(() => {
      fetch(\`https://jsonplaceholder.typicode.com/posts?q=\${encodeURIComponent(query)}\`)
        .then(res => res.json())
        .then(data => {
          setResults(data.slice(0, 5));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  if (loading) return <p>Searching...</p>;

  return (
    <ul>
      {results.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}`,
        hints: [
          'Use setTimeout to delay the fetch by 500ms',
          'Return clearTimeout from useEffect to cancel on re-run',
          'Include query in the dependency array',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod3-q1',
      question: 'When does useEffect with an empty dependency array run?',
      options: ['On every single render cycle that the component goes through', 'Only after the first render (mount)', 'Never — an empty array disables the effect from running entirely', 'Before the first render during the initialization phase of the component'],
      correctAnswer: 1,
      explanation:
        'An empty dependency array [] means the effect has no dependencies to watch, so it only runs once after the initial mount.',
    },
    {
      id: 'mod3-q2',
      question: 'What is the purpose of the cleanup function returned from useEffect?',
      options: ['To re-run the effect immediately after the component re-renders again', 'To prevent the component from rendering until the async operation completes', 'To save the current component state to localStorage before unmounting', 'To unsubscribe, remove listeners, or cancel requests before re-running or unmounting'],
      correctAnswer: 3,
      explanation:
        'The cleanup function runs before the effect re-runs and when the component unmounts. It\'s used to clean up subscriptions, timers, and event listeners.',
    },
    {
      id: 'mod3-q3',
      question: 'Why should you use AbortController when fetching data in useEffect?',
      options: ['To improve network request performance by compressing the response payload', 'To prevent setting state on an unmounted component (race conditions)', 'It is required by the Fetch API specification for every network request', 'To automatically retry requests that fail due to temporary network errors'],
      correctAnswer: 1,
      explanation:
        'AbortController lets you cancel in-flight requests when the component unmounts or dependencies change, preventing state updates on unmounted components.',
    },
    {
      id: 'mod3-q4',
      question: 'Why can putting an object literal in the dependency array cause infinite loops?',
      options: ['Objects are not a valid type for the useEffect dependency array entries', 'The useEffect hook does not support objects — only primitive values are allowed', 'A new object reference is created each render, so React thinks the dependency changed', 'It always triggers a syntax error because objects cannot be serialized for comparison'],
      correctAnswer: 2,
      explanation:
        'React compares dependencies using Object.is(), which checks reference equality. A new object literal has a new reference each render, so the effect runs every time.',
    },
    {
      id: 'mod3-q5',
      question: 'How do you debounce a side effect in React?',
      options: ['Use useEffect with a setTimeout and clear it in cleanup', 'Call the function multiple times in quick succession and use the last result', 'Wrap the component in React.memo to prevent it from re-rendering on input changes', 'Enable StrictMode to automatically batch rapid state updates into one call'],
      correctAnswer: 0,
      explanation:
        'Debouncing in useEffect means setting a timeout and returning clearTimeout as the cleanup function. When the dependency changes again before the timeout fires, the old timeout is canceled.',
    },
  ],
};
