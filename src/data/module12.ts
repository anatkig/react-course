import type { Module } from '../types';

export const module12: Module = {
  id: 'mod-12',
  title: 'Common Custom Hooks',
  description:
    'Build reusable custom hooks for everyday needs: useDebounce, useLocalStorage, useFetch, useMediaQuery, useOnClickOutside, and more.',
  topics: [
    {
      id: 'mod12-t1',
      title: 'useDebounce & useThrottle',
      explanation: `## useDebounce

Debouncing delays execution until a pause in events. Perfect for search inputs where you don't want to fire an API call on every keystroke.

\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
\`\`\`

### How It Works

1. Every time \`value\` changes, a timer is set for \`delay\` ms
2. If \`value\` changes again before the timer fires, the old timer is cleared
3. Only the last value (after a pause) triggers the update

## useDebouncedCallback

For debouncing a function itself:

\`\`\`jsx
function useDebouncedCallback(callback, delay) {
  const timerRef = useRef(null);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const debouncedFn = useCallback((...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  }, [delay]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return debouncedFn;
}
\`\`\`

## useThrottle

Throttling ensures a function runs at most once per interval:

\`\`\`jsx
function useThrottle(value, interval) {
  const [throttled, setThrottled] = useState(value);
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    if (now - lastRun.current >= interval) {
      lastRun.current = now;
      setThrottled(value);
    } else {
      const timer = setTimeout(() => {
        lastRun.current = Date.now();
        setThrottled(value);
      }, interval - (now - lastRun.current));
      return () => clearTimeout(timer);
    }
  }, [value, interval]);

  return throttled;
}
\`\`\``,
      task: {
        description:
          'Implement a `useDebounce` hook and use it in a `SearchBox` component. The component should show the current input value and the debounced value, demonstrating the delay. Also show a counter of how many API calls would be saved.',
        starterCode: `function useDebounce(value, delay) {
  // TODO: Return the debounced value
}

function SearchBox() {
  // TODO: Show input, current value, debounced value, and call count
  return null;
}`,
        solution: `function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function SearchBox() {
  const [query, setQuery] = useState('');
  const [typeCount, setTypeCount] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      setSearchCount(c => c + 1);
    }
  }, [debouncedQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setTypeCount(c => c + 1);
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      <p>Current: {query}</p>
      <p>Debounced: {debouncedQuery}</p>
      <p>Keystrokes: {typeCount}, API calls: {searchCount} (saved {typeCount - searchCount})</p>
    </div>
  );
}`,
        hints: [
          'Use setTimeout in a useEffect, returning clearTimeout as cleanup',
          'The debounced value updates only after the user stops typing for the delay period',
          'Track keystroke count vs API call count to demonstrate the savings',
        ],
      },
    },
    {
      id: 'mod12-t2',
      title: 'useLocalStorage',
      explanation: `## Persistent State with useLocalStorage

A drop-in replacement for \`useState\` that automatically syncs with localStorage.

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    try {
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

### Usage

\`\`\`jsx
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    <div>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <input type="range" value={fontSize}
        onChange={e => setFontSize(Number(e.target.value))} />
    </div>
  );
}
\`\`\`

### Advanced: Cross-Tab Sync

Listen for storage events to sync across browser tabs:

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
\`\`\``,
      task: {
        description:
          'Implement `useLocalStorage` with cross-tab sync support. Create a `Preferences` component that stores theme (light/dark) and language (en/es/fr) using the hook. Changes should persist across page refreshes and sync across tabs.',
        starterCode: `function useLocalStorage(key, initialValue) {
  // TODO: Initialize from localStorage
  // TODO: Sync to localStorage on change
  // TODO: Listen for cross-tab storage events
}

function Preferences() {
  // TODO: Use useLocalStorage for theme and language
  return null;
}`,
        solution: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key]);

  const setValue = (value) => {
    const val = value instanceof Function ? value(storedValue) : value;
    setStoredValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [storedValue, setValue];
}

function Preferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [lang, setLang] = useLocalStorage('language', 'en');

  return (
    <div className={theme}>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select value={lang} onChange={e => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}`,
        hints: [
          'Use lazy initialization: useState(() => localStorage.getItem(...))',
          'Listen for the "storage" event on window for cross-tab sync',
          'The storage event only fires in OTHER tabs, not the current one',
        ],
      },
    },
    {
      id: 'mod12-t3',
      title: 'useFetch',
      explanation: `## A Reusable Data Fetching Hook

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

### Usage

\`\`\`jsx
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\\\`/api/users/\\\${userId}\\\`);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return <h1>{user.name}</h1>;
}
\`\`\`

### Enhanced Version with Refetch

\`\`\`jsx
function useFetch(url, options = {}) {
  const [state, setState] = useState({
    data: null, loading: true, error: null,
  });

  const fetchData = useCallback(() => {
    const controller = new AbortController();
    setState(s => ({ ...s, loading: true, error: null }));

    fetch(url, { ...options, signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        return res.json();
      })
      .then(data => setState({ data, loading: false, error: null }))
      .catch(err => {
        if (err.name !== 'AbortError') {
          setState({ data: null, loading: false, error: err.message });
        }
      });

    return controller;
  }, [url]);

  useEffect(() => {
    const controller = fetchData();
    return () => controller.abort();
  }, [fetchData]);

  const refetch = () => fetchData();

  return { ...state, refetch };
}
\`\`\``,
      task: {
        description:
          'Implement a `useFetch` hook with loading, error, and refetch support. Use it in a `PostList` component that fetches and displays posts. Include a "Retry" button that appears on error and a "Refresh" button for manual refetch.',
        starterCode: `function useFetch(url) {
  // TODO: Implement with loading, error, data, and refetch
}

function PostList() {
  // TODO: Fetch posts and render them
  // TODO: Show loading spinner, error with retry, refresh button
  return null;
}`,
        solution: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const fetchData = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => controllerRef.current?.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

function PostList() {
  const { data: posts, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading posts...</p>;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={refetch}>Retry</button>
    </div>
  );

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {posts.slice(0, 10).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`,
        hints: [
          'Use AbortController for request cancellation',
          'Return a refetch function that re-runs the fetch',
          'Use useCallback for fetchData so it only changes when url changes',
        ],
      },
    },
    {
      id: 'mod12-t4',
      title: 'useMediaQuery & useOnClickOutside',
      explanation: `## useMediaQuery

Reactively respond to CSS media queries:

\`\`\`jsx
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Usage
function Nav() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <HamburgerMenu /> : <DesktopNav />;
}
\`\`\`

### Common Breakpoints

\`\`\`jsx
function useBreakpoints() {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return { isMobile, isTablet, isDesktop };
}
\`\`\`

## useOnClickOutside

Detect clicks outside a component (great for dropdowns, modals):

\`\`\`jsx
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// Usage
function Dropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      )}
    </div>
  );
}
\`\`\`

## useWindowSize

\`\`\`jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}
\`\`\``,
      task: {
        description:
          'Build a `ResponsiveDropdown` component that uses both `useMediaQuery` and `useOnClickOutside`. On mobile (< 768px), the dropdown should appear as a full-screen overlay. On desktop, it should appear as a positioned dropdown. Clicking outside closes it.',
        starterCode: `function useMediaQuery(query) {
  // TODO: Implement media query hook
}

function useOnClickOutside(ref, handler) {
  // TODO: Implement click outside detection
}

function ResponsiveDropdown({ items }) {
  // TODO: Use both hooks to create a responsive dropdown
  return null;
}`,
        solution: `function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function ResponsiveDropdown({ items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isMobile = useMediaQuery('(max-width: 767px)');

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <ul className={isMobile ? 'dropdown-fullscreen' : 'dropdown-positioned'}>
          {items.map((item, i) => (
            <li key={i} onClick={() => setOpen(false)}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
        hints: [
          'useMediaQuery uses window.matchMedia() and listens for change events',
          'useOnClickOutside listens for mousedown/touchstart on document',
          'Check ref.current.contains(event.target) to see if click was inside',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod12-q1',
      question: 'What is the purpose of debouncing in a search input?',
      options: [
        'To make the input field read-only until the user presses Enter',
        'To delay the API call until the user stops typing for a period',
        'To encrypt the search query before sending it to the server',
        'To limit the total number of searches to a fixed count',
      ],
      correctAnswer: 1,
      explanation:
        'Debouncing delays execution until a pause in events. For search inputs, this means the API call only fires after the user stops typing, reducing unnecessary network requests.',
    },
    {
      id: 'mod12-q2',
      question: 'Why does useLocalStorage use lazy initialization: useState(() => ...)?',
      options: [
        'localStorage can only be accessed inside a function',
        'It ensures localStorage.getItem runs only on mount, not every render',
        'React requires all initial values to be functions',
        'It prevents the localStorage value from being cached by the browser',
      ],
      correctAnswer: 1,
      explanation:
        'Lazy initialization with useState(() => ...) ensures the function runs only once on mount. Without it, localStorage.getItem would be called on every render even though the result is ignored after mount.',
    },
    {
      id: 'mod12-q3',
      question: 'Why should useFetch include an AbortController?',
      options: [
        'To improve network speed by compressing requests',
        'To cancel in-flight requests when the component unmounts or URL changes',
        'To retry failed requests automatically',
        'To cache responses in the browser for offline use',
      ],
      correctAnswer: 1,
      explanation:
        'AbortController prevents race conditions and memory leaks by cancelling pending requests when the component unmounts or the URL changes before the response arrives.',
    },
    {
      id: 'mod12-q4',
      question: 'How does useOnClickOutside determine if a click was outside the component?',
      options: [
        'It checks if the click event\'s coordinates are outside the component\'s bounding box',
        'It uses ref.current.contains(event.target) to see if the click target is inside',
        'It compares the clicked element\'s className with the component\'s className',
        'It listens only to events that bubble up to the window object',
      ],
      correctAnswer: 1,
      explanation:
        'ref.current.contains(event.target) checks whether the clicked DOM node is a descendant of (or equal to) the component\'s root node. If it is not, the click was outside.',
    },
    {
      id: 'mod12-q5',
      question: 'What is the difference between debouncing and throttling?',
      options: [
        'Debounce delays execution until a pause; throttle limits execution to once per interval',
        'Debounce cancels all events; throttle queues them for later',
        'Debounce works with keyboard events; throttle works with mouse events',
        'There is no difference — they are the same technique with different names',
      ],
      correctAnswer: 0,
      explanation:
        'Debounce waits for a pause (e.g., user stops typing), then executes once. Throttle ensures execution happens at most once per time interval, regardless of how many events occur.',
    },
  ],
};
