import type { Module } from '../types';

export const module12: Module = {
  id: 'mod-12',
  title: 'Common Custom Hooks',
  description:
    'Build reusable custom hooks for everyday needs: useDebounce, useThrottle, useLocalStorage, useFetch, useMediaQuery, useOnClickOutside, usePrevious, useToggle, useInterval, useTimeout, useEventListener, useKeyPress, useIntersectionObserver, and useHover.',
  topics: [
    {
      id: 'mod12-t1',
      title: 'useDebounce & useThrottle',
      explanation: `## useDebounce

**What it does:** Delays updating a value until the user stops changing it for a specified time. This is essential for search inputs — without debouncing, an API call fires on every single keystroke. With it, you only fire one call after the user pauses.

**When to use:** Search-as-you-type, auto-save, form validation that hits an API, or any time rapid user input would cause excessive work.

\`\`\`jsx
function useDebounce(value, delay) {
  // Hold the "lagging" version of the value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start a timer — when it fires, we finally update debouncedValue
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    // If value changes again before the timer fires, cancel the old timer.
    // This is the key to debouncing: only the LAST change within the
    // delay window actually triggers an update.
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState('');
  // debouncedQuery trails behind query by 300ms of inactivity
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      // This only fires once the user stops typing for 300ms
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

**What it does:** Instead of debouncing a *value*, this debounces a *function call*. Useful when you want to debounce an event handler directly (e.g., an onChange that triggers expensive computation).

\`\`\`jsx
function useDebouncedCallback(callback, delay) {
  // Ref to hold the timer ID across renders
  const timerRef = useRef(null);
  // Ref to always point to the latest callback (avoids stale closures)
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  // The debounced wrapper — stable identity thanks to useCallback
  const debouncedFn = useCallback((...args) => {
    // Cancel any pending invocation
    clearTimeout(timerRef.current);
    // Schedule a new one
    timerRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  }, [delay]);

  // Cleanup on unmount — prevent calling setState on unmounted component
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return debouncedFn;
}
\`\`\`

## useThrottle

**What it does:** Limits how often a value can update — at most once per interval. Unlike debounce (which waits for a pause), throttle guarantees regular updates during continuous activity. Perfect for scroll/resize handlers.

\`\`\`jsx
function useThrottle(value, interval) {
  const [throttled, setThrottled] = useState(value);
  // Track when we last let a value through
  const lastRun = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastRun = now - lastRun.current;

    if (timeSinceLastRun >= interval) {
      // Enough time has passed — update immediately
      lastRun.current = now;
      setThrottled(value);
    } else {
      // Too soon — schedule an update for when the interval expires
      const timer = setTimeout(() => {
        lastRun.current = Date.now();
        setThrottled(value);
      }, interval - timeSinceLastRun);
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

**What it does:** A drop-in replacement for \`useState\` that automatically reads from and writes to \`localStorage\`. The state survives page refreshes and browser restarts. You use it exactly like \`useState\`, but the value persists.

**When to use:** User preferences (theme, language, font size), form drafts, dismissed banners, tutorial progress — anything you want to remember without a backend.

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  // Lazy initializer — runs only on mount, not on every render.
  // Reads the existing value from localStorage, falling back to initialValue.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      // Parse saved JSON, or use initialValue if nothing is stored
      return item ? JSON.parse(item) : initialValue;
    } catch {
      // If parsing fails (corrupted data), fall back safely
      return initialValue;
    }
  });

  const setValue = (value) => {
    // Support functional updates like useState: setValue(prev => prev + 1)
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    // Update React state
    setStoredValue(valueToStore);
    try {
      // Sync to localStorage so it survives refresh
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // localStorage can throw if storage is full or in private mode
      console.warn('Failed to save to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

### Usage

\`\`\`jsx
function Settings() {
  // Works just like useState, but values persist across page refreshes
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

**Why:** If the user has your app open in two tabs, changing a setting in one tab should update the other. The \`storage\` event fires in all *other* tabs when localStorage changes.

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
      // Only react to changes for OUR key
      if (e.key === key && e.newValue) {
        // Update local state to match the other tab's change
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    // "storage" event only fires in OTHER tabs, not the current one
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

**What it does:** Encapsulates the entire fetch lifecycle — loading, success, and error states — in a single hook. Instead of repeating the same \`useState\` + \`useEffect\` + \`fetch\` pattern in every component, you call \`useFetch(url)\` and get back \`{ data, loading, error }\`.

**When to use:** Any component that needs to load data from an API. This hook handles the boilerplate (loading/error states, request cancellation) so your components stay clean.

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController lets us cancel the request if the component
    // unmounts or the URL changes before the response arrives.
    // Without this, you get "setState on unmounted component" warnings.
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        // fetch doesn't reject on HTTP errors (404, 500) — only on
        // network failures. We must check res.ok ourselves.
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        // AbortError means WE cancelled the request — not a real error.
        // Don't show it to the user.
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    // Cleanup: cancel the in-flight request when url changes or unmount
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

**Why:** Sometimes you need to manually refetch — after a mutation, on a "Retry" button, or a "Refresh" button. This version exposes a \`refetch\` function.

\`\`\`jsx
function useFetch(url, options = {}) {
  const [state, setState] = useState({
    data: null, loading: true, error: null,
  });

  // Wrap fetchData in useCallback so it's stable unless url changes
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

    // Return the controller so the caller (useEffect) can cancel it
    return controller;
  }, [url]);

  useEffect(() => {
    const controller = fetchData();
    return () => controller.abort();
  }, [fetchData]);

  // Expose refetch so components can trigger a re-fetch on demand
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

**What it does:** Lets your component reactively respond to CSS media queries in JavaScript. Returns \`true\` or \`false\` depending on whether the query currently matches. The value updates automatically when the screen is resized or the device orientation changes.

**When to use:** Rendering completely different component trees for mobile vs desktop (not just styling differences — use CSS for that). Also useful for conditionally loading heavy components only on desktop.

\`\`\`jsx
function useMediaQuery(query) {
  // Initialize with the current match state (avoids a flash of wrong UI)
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    // Create a MediaQueryList object for the given query
    const mql = window.matchMedia(query);

    // Handler fires whenever the media query match state changes
    const handler = (e) => setMatches(e.matches);

    // Subscribe to changes (e.g., window resize crosses the breakpoint)
    mql.addEventListener('change', handler);

    // Sync in case the match changed between render and effect
    setMatches(mql.matches);

    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Usage
function Nav() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  // Render entirely different components based on screen size
  return isMobile ? <HamburgerMenu /> : <DesktopNav />;
}
\`\`\`

### Common Breakpoints

**A convenience hook** that wraps multiple \`useMediaQuery\` calls into a single return object:

\`\`\`jsx
function useBreakpoints() {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return { isMobile, isTablet, isDesktop };
}
\`\`\`

## useOnClickOutside

**What it does:** Detects when the user clicks (or taps) outside a given DOM element. You pass a ref to the element and a callback — the callback fires whenever a click lands outside that element.

**When to use:** Closing dropdowns, modals, popovers, tooltips, or any floating UI when the user clicks elsewhere.

\`\`\`jsx
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // If the ref isn't mounted yet, or the click was INSIDE, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Click was outside — invoke the handler
      handler(event);
    };

    // Listen on both mouse and touch for mobile support
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
  // Close the dropdown when clicking anywhere outside it
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

**What it does:** Tracks the browser window dimensions in real time. Useful for sizing canvas elements, charts, or any layout that depends on exact pixel dimensions rather than CSS breakpoints.

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
    // Update state on every window resize
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size; // { width, height }
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
    {
      id: 'mod12-t5',
      title: 'usePrevious & useToggle',
      explanation: `## usePrevious

**What it does:** Gives you the previous value of any variable (state, prop, or computed value). React doesn't track previous values for you, but a ref that updates *after* render can hold the "one render ago" value.

**When to use:** Comparing current vs previous props to decide whether to animate, log changes, or skip effects. Common in transitions, undo features, and analytics.

\`\`\`jsx
function usePrevious(value) {
  // Ref persists across renders without causing re-renders
  const ref = useRef();

  useEffect(() => {
    // After every render, store the current value.
    // On the NEXT render, ref.current will be the "previous" value
    // because this effect runs AFTER the render completes.
    ref.current = value;
  });

  // During render, ref.current still holds the OLD value
  // (the effect hasn't run yet for this render)
  return ref.current;
}

// Usage
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}
\`\`\`

### Why useRef instead of useState?

Using \`useState\` to store the previous value would trigger an extra re-render. A ref updates silently — it's the perfect tool for "remember this, but don't re-render."

## useToggle

**What it does:** A simpler alternative to \`useState(false)\` + a toggle function. Returns \`[value, toggle]\` where \`toggle()\` flips the boolean, or you can pass an explicit value.

**When to use:** Modals, accordions, show/hide panels, dark mode switches — any on/off state.

\`\`\`jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // toggle() with no args flips the value.
  // toggle(true) or toggle(false) sets it explicitly.
  const toggle = useCallback((nextValue) => {
    setValue(current =>
      typeof nextValue === 'boolean' ? nextValue : !current
    );
  }, []);

  return [value, toggle];
}

// Usage
function FAQ({ question, answer }) {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOpen}>
        {question} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}
\`\`\`

### useToggle vs plain useState

| Pattern | Code | Lines saved |
|---------|------|-------------|
| useState | \`const [open, setOpen] = useState(false);\` + \`setOpen(o => !o)\` everywhere | — |
| useToggle | \`const [open, toggle] = useToggle();\` + \`toggle()\` everywhere | Cleaner intent |

The main benefit is **readability**: \`toggle()\` communicates intent better than \`setOpen(o => !o)\`.`,
      task: {
        description:
          'Build a `ComparisonTracker` component that uses `usePrevious` and `useToggle`. It should track a numeric value and display whether it went up or down compared to the previous render. Include a toggleable "details" section using `useToggle`.',
        starterCode: `function usePrevious(value) {
  // TODO: Track the previous value using a ref
}

function useToggle(initialValue = false) {
  // TODO: Return [value, toggle] where toggle flips the boolean
}

function ComparisonTracker() {
  // TODO: Use usePrevious to compare current vs previous value
  // TODO: Use useToggle for a show/hide details panel
  return null;
}`,
        solution: `function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback((next) => {
    setValue(curr => typeof next === 'boolean' ? next : !curr);
  }, []);
  return [value, toggle];
}

function ComparisonTracker() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  const [showDetails, toggleDetails] = useToggle(false);

  const direction = prevCount === undefined ? '—'
    : count > prevCount ? '↑ Up'
    : count < prevCount ? '↓ Down'
    : '= Same';

  return (
    <div>
      <h3>Value: {count} ({direction})</h3>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={() => setCount(c => c - 1)}>-1</button>
      <button onClick={() => setCount(c => c + Math.floor(Math.random() * 5) - 2)}>Random</button>
      <button onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} Details</button>
      {showDetails && (
        <div>
          <p>Current: {count}</p>
          <p>Previous: {prevCount ?? 'N/A'}</p>
          <p>Change: {prevCount !== undefined ? count - prevCount : 'N/A'}</p>
        </div>
      )}
    </div>
  );
}`,
        hints: [
          'usePrevious uses useRef + useEffect (no dependency array) to store the value after each render',
          'useToggle should accept an optional explicit boolean in toggle()',
          'On first render, usePrevious returns undefined because the effect hasn\'t run yet',
        ],
      },
    },
    {
      id: 'mod12-t6',
      title: 'useInterval & useTimeout',
      explanation: `## useInterval

**What it does:** A declarative wrapper around \`setInterval\`. In plain JavaScript, managing intervals inside React is surprisingly tricky — you need to handle cleanup, avoid stale closures, and support dynamic delays. This hook handles all of that.

**When to use:** Polling an API, countdown timers, auto-advancing carousels, live clocks, or any recurring action.

\`\`\`jsx
function useInterval(callback, delay) {
  // Store the latest callback in a ref so the interval always calls
  // the freshest version (avoids stale closures)
  const savedCallback = useRef(callback);

  // Update the ref whenever the callback changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // If delay is null, pause the interval (useful for stop/start)
    if (delay === null) return;

    const id = setInterval(() => {
      // Always call the LATEST callback, not the one from when
      // the interval was first created
      savedCallback.current();
    }, delay);

    // Cleanup: clear interval on unmount or when delay changes
    return () => clearInterval(id);
  }, [delay]);
}

// Usage: a live clock
function Clock() {
  const [time, setTime] = useState(new Date());

  // Update every second
  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return <p>{time.toLocaleTimeString()}</p>;
}
\`\`\`

### Why not just use setInterval in useEffect?

The naive approach has a **stale closure** problem:

\`\`\`jsx
// ❌ BUG: callback is captured once and never updates
useEffect(() => {
  const id = setInterval(callback, delay);
  return () => clearInterval(id);
}, [delay]); // callback is stale!
\`\`\`

The \`useInterval\` hook solves this by storing the callback in a ref, so the interval always calls the latest version.

### Pausable Interval

Pass \`null\` as the delay to pause:

\`\`\`jsx
function Poller() {
  const [data, setData] = useState(null);
  const [paused, setPaused] = useState(false);

  useInterval(() => {
    fetch('/api/status').then(r => r.json()).then(setData);
  }, paused ? null : 5000); // null = paused, 5000 = poll every 5s

  return (
    <div>
      <button onClick={() => setPaused(p => !p)}>
        {paused ? 'Resume' : 'Pause'}
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
\`\`\`

## useTimeout

**What it does:** A declarative wrapper around \`setTimeout\`. Runs a callback once after a delay, with proper cleanup. Pass \`null\` as delay to cancel.

**When to use:** Auto-dismissing notifications, delayed transitions, "idle" detection, showing a tooltip after a hover delay.

\`\`\`jsx
function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  // Keep the callback ref fresh
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // null delay = don't schedule anything
    if (delay === null) return;

    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);

    // Cleanup: cancel if delay changes or component unmounts
    return () => clearTimeout(id);
  }, [delay]);
}

// Usage: auto-dismiss notification
function Notification({ message, onDismiss }) {
  // Auto-dismiss after 5 seconds
  useTimeout(onDismiss, 5000);

  return (
    <div className="notification">
      {message}
      <button onClick={onDismiss}>×</button>
    </div>
  );
}
\`\`\``,
      task: {
        description:
          'Build a `Countdown` component using `useInterval`. It should count down from a given number to 0, display the remaining time, and have Start/Pause/Reset buttons. The interval should pause when the countdown reaches 0 or when the user clicks Pause.',
        starterCode: `function useInterval(callback, delay) {
  // TODO: Implement declarative interval hook
}

function Countdown({ startFrom = 10 }) {
  // TODO: Countdown timer with Start, Pause, Reset
  return null;
}`,
        solution: `function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

function Countdown({ startFrom = 10 }) {
  const [count, setCount] = useState(startFrom);
  const [running, setRunning] = useState(false);

  useInterval(() => {
    setCount(c => {
      if (c <= 1) { setRunning(false); return 0; }
      return c - 1;
    });
  }, running ? 1000 : null);

  return (
    <div>
      <h2 style={{ fontSize: '3rem' }}>{count}</h2>
      <button onClick={() => setRunning(true)} disabled={running || count === 0}>Start</button>
      <button onClick={() => setRunning(false)} disabled={!running}>Pause</button>
      <button onClick={() => { setRunning(false); setCount(startFrom); }}>Reset</button>
    </div>
  );
}`,
        hints: [
          'Use a ref to store the latest callback and avoid stale closures',
          'Pass null as delay to pause the interval',
          'Stop the interval when count reaches 0 by setting running to false',
        ],
      },
    },
    {
      id: 'mod12-t7',
      title: 'useEventListener & useKeyPress',
      explanation: `## useEventListener

**What it does:** A generic hook for safely attaching DOM event listeners. Handles cleanup automatically, keeps the handler ref fresh (no stale closures), and works with any target element — \`window\`, \`document\`, or a ref.

**When to use:** Any time you'd write \`addEventListener\` in a \`useEffect\` — scroll handlers, resize listeners, keyboard shortcuts, visibility changes, online/offline detection.

\`\`\`jsx
function useEventListener(eventName, handler, element = window) {
  // Store the latest handler in a ref to avoid re-subscribing
  // every time the handler function changes
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Support both ref objects and direct elements
    const targetElement = element?.current ?? element;
    if (!targetElement?.addEventListener) return;

    // Wrapper calls the latest handler from the ref
    const eventListener = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

// Usage: track online/offline status
function OnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEventListener('online', () => setOnline(true));
  useEventListener('offline', () => setOnline(false));

  return <p>{online ? '🟢 Online' : '🔴 Offline'}</p>;
}
\`\`\`

### Why not just useEffect + addEventListener?

The \`useEventListener\` hook gives you:
- **No stale closures** — the ref always points to the latest handler
- **Automatic cleanup** — no forgetting to remove listeners
- **Flexible target** — works on window, document, or any ref element

## useKeyPress

**What it does:** Returns \`true\` while a specific keyboard key is held down. Listens for \`keydown\` and \`keyup\` events and tracks the pressed state.

**When to use:** Keyboard shortcuts, game controls, modifier key detection (Shift+click), accessibility enhancements.

\`\`\`jsx
function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    // Set pressed to true when the target key goes down
    const downHandler = (e) => {
      if (e.key === targetKey) setPressed(true);
    };

    // Set pressed to false when the target key comes up
    const upHandler = (e) => {
      if (e.key === targetKey) setPressed(false);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return pressed;
}

// Usage: keyboard-controlled character
function Game() {
  const up = useKeyPress('ArrowUp');
  const down = useKeyPress('ArrowDown');
  const left = useKeyPress('ArrowLeft');
  const right = useKeyPress('ArrowRight');

  return (
    <div>
      <p>Pressed: {[
        up && '↑', down && '↓', left && '←', right && '→'
      ].filter(Boolean).join(' ') || 'none'}</p>
    </div>
  );
}
\`\`\`

### useKeyCombo (bonus)

**What it does:** Detects multi-key combinations like Ctrl+S or Ctrl+Shift+P:

\`\`\`jsx
function useKeyCombo(keys, callback) {
  useEffect(() => {
    const handler = (e) => {
      // Check that ALL required keys/modifiers match
      const allPressed = keys.every(key => {
        if (key === 'Control') return e.ctrlKey;
        if (key === 'Shift') return e.shiftKey;
        if (key === 'Alt') return e.altKey;
        return e.key === key;
      });

      if (allPressed) {
        e.preventDefault(); // Prevent browser default (e.g., Ctrl+S = save)
        callback(e);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [keys, callback]);
}

// Usage: Ctrl+S save shortcut
function Editor() {
  useKeyCombo(['Control', 's'], () => {
    console.log('Saving...');
  });

  return <textarea placeholder="Type here, press Ctrl+S to save" />;
}
\`\`\``,
      task: {
        description:
          'Build a `KeyboardNavigator` component using `useKeyPress` and `useEventListener`. Display a list of items that the user can navigate with arrow keys (up/down to move, Enter to select). Also use `useEventListener` to detect when the user scrolls and show a "scroll to top" indicator.',
        starterCode: `function useEventListener(eventName, handler, element = window) {
  // TODO: Implement generic event listener hook
}

function useKeyPress(targetKey) {
  // TODO: Return true while the target key is held down
}

function KeyboardNavigator({ items }) {
  // TODO: Navigate items with arrow keys, select with Enter
  // TODO: Show scroll indicator using useEventListener
  return null;
}`,
        solution: `function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef(handler);
  useEffect(() => { savedHandler.current = handler; }, [handler]);
  useEffect(() => {
    const target = element?.current ?? element;
    if (!target?.addEventListener) return;
    const listener = (e) => savedHandler.current(e);
    target.addEventListener(eventName, listener);
    return () => target.removeEventListener(eventName, listener);
  }, [eventName, element]);
}

function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    const down = (e) => { if (e.key === targetKey) setPressed(true); };
    const up = (e) => { if (e.key === targetKey) setPressed(false); };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, [targetKey]);
  return pressed;
}

function KeyboardNavigator({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEventListener('scroll', () => setScrolled(window.scrollY > 100));

  useEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') setActiveIndex(i => Math.min(i + 1, items.length - 1));
    if (e.key === 'ArrowUp') setActiveIndex(i => Math.max(i - 1, 0));
    if (e.key === 'Enter') setSelected(items[activeIndex]);
  });

  return (
    <div>
      {scrolled && <button onClick={() => window.scrollTo(0, 0)}>↑ Top</button>}
      <ul>
        {items.map((item, i) => (
          <li key={i} style={{
            background: i === activeIndex ? '#e0e0ff' : 'transparent',
            fontWeight: selected === item ? 'bold' : 'normal',
          }}>{item}</li>
        ))}
      </ul>
      {selected && <p>Selected: {selected}</p>}
    </div>
  );
}`,
        hints: [
          'useEventListener should store the handler in a ref to avoid stale closures',
          'Support both window and ref elements by checking element?.current',
          'For keyboard navigation, clamp the index between 0 and items.length - 1',
        ],
      },
    },
    {
      id: 'mod12-t8',
      title: 'useIntersectionObserver & useHover',
      explanation: `## useIntersectionObserver

**What it does:** Tells you whether an element is currently visible in the viewport (or a scrollable container). Uses the browser's built-in \`IntersectionObserver\` API, which is highly performant — no scroll event listeners needed.

**When to use:** Lazy loading images, infinite scroll ("load more when bottom is visible"), animating elements on scroll (fade-in), tracking ad impressions, or pausing videos when off-screen.

\`\`\`jsx
function useIntersectionObserver(ref, options = {}) {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    // Don't observe if the ref isn't mounted yet
    if (!ref.current) return;

    // Create an observer that fires our callback when visibility changes
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only observe one element, so we take the first entry
        setEntry(entry);
      },
      {
        threshold: 0,   // Fire as soon as even 1px is visible
        ...options,      // Allow caller to override root, rootMargin, threshold
      }
    );

    // Start observing the target element
    observer.observe(ref.current);

    // Cleanup: stop observing on unmount
    return () => observer.disconnect();
  }, [ref, options.threshold, options.root, options.rootMargin]);

  // entry.isIntersecting is the boolean you usually want
  return entry;
}

// Usage: fade in when visible
function FadeInSection({ children }) {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1 });
  const isVisible = entry?.isIntersecting;

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease-in',
      }}
    >
      {children}
    </div>
  );
}
\`\`\`

### Infinite Scroll Example

\`\`\`jsx
function InfiniteList() {
  const [items, setItems] = useState(initialItems);
  const bottomRef = useRef(null);
  const entry = useIntersectionObserver(bottomRef);

  useEffect(() => {
    // When the bottom sentinel becomes visible, load more items
    if (entry?.isIntersecting) {
      loadMoreItems().then(newItems =>
        setItems(prev => [...prev, ...newItems])
      );
    }
  }, [entry?.isIntersecting]);

  return (
    <div>
      {items.map(item => <div key={item.id}>{item.text}</div>)}
      {/* Invisible sentinel element at the bottom */}
      <div ref={bottomRef} style={{ height: 1 }} />
    </div>
  );
}
\`\`\`

## useHover

**What it does:** Tracks whether the mouse is currently hovering over an element. Returns a ref (to attach to the element) and a boolean \`isHovered\` state.

**When to use:** Showing tooltips, highlighting rows, revealing action buttons on hover, preview cards — any hover-dependent UI that needs JavaScript logic (not just CSS \`:hover\`).

\`\`\`jsx
function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // mouseenter fires when the cursor enters the element
    const handleEnter = () => setHovered(true);
    // mouseleave fires when the cursor leaves the element
    const handleLeave = () => setHovered(false);

    node.addEventListener('mouseenter', handleEnter);
    node.addEventListener('mouseleave', handleLeave);

    return () => {
      node.removeEventListener('mouseenter', handleEnter);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return [ref, hovered];
}

// Usage
function HoverCard({ title, details }) {
  const [ref, isHovered] = useHover();

  return (
    <div ref={ref} style={{
      padding: 16,
      border: '1px solid #ccc',
      // Elevate the card on hover
      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
      transition: 'all 0.2s ease',
    }}>
      <h3>{title}</h3>
      {/* Only render details section when hovering */}
      {isHovered && <p>{details}</p>}
    </div>
  );
}
\`\`\`

### When to use useHover vs CSS :hover

| Use CSS \`:hover\` | Use \`useHover\` hook |
|-------------------|---------------------|
| Simple style changes (color, background) | Conditional rendering (show/hide elements) |
| Transitions and animations | Triggering side effects (prefetch, analytics) |
| No JavaScript logic needed | Combining with other state (hover + timeout) |`,
      task: {
        description:
          'Build a `LazyImageGrid` component using `useIntersectionObserver` and `useHover`. Images should lazy-load (show a placeholder until they scroll into view). On hover, display an overlay with the image title using `useHover`.',
        starterCode: `function useIntersectionObserver(ref, options = {}) {
  // TODO: Return the IntersectionObserverEntry
}

function useHover() {
  // TODO: Return [ref, isHovered]
}

function LazyImage({ src, title }) {
  // TODO: Only load the image when it enters the viewport
  // TODO: Show title overlay on hover
  return null;
}

function LazyImageGrid({ images }) {
  // TODO: Render a grid of LazyImage components
  return null;
}`,
        solution: `function useIntersectionObserver(ref, options = {}) {
  const [entry, setEntry] = useState(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([e]) => setEntry(e), { threshold: 0, ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.root, options.rootMargin]);
  return entry;
}

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    node.addEventListener('mouseenter', enter);
    node.addEventListener('mouseleave', leave);
    return () => {
      node.removeEventListener('mouseenter', enter);
      node.removeEventListener('mouseleave', leave);
    };
  }, []);
  return [ref, hovered];
}

function LazyImage({ src, title }) {
  const imgRef = useRef(null);
  const entry = useIntersectionObserver(imgRef);
  const [hoverRef, isHovered] = useHover();
  const isVisible = entry?.isIntersecting;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isVisible) setLoaded(true);
  }, [isVisible]);

  return (
    <div ref={(node) => { imgRef.current = node; hoverRef.current = node; }}
      style={{ position: 'relative', width: 200, height: 200, background: '#eee' }}>
      {loaded ? (
        <img src={src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>Loading...</div>
      )}
      {isHovered && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(0,0,0,0.7)', color: 'white', padding: 8,
        }}>{title}</div>
      )}
    </div>
  );
}

function LazyImageGrid({ images }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: 16 }}>
      {images.map((img, i) => (
        <LazyImage key={i} src={img.src} title={img.title} />
      ))}
    </div>
  );
}`,
        hints: [
          'Use IntersectionObserver to detect when each image scrolls into view',
          'Once an image becomes visible, set a "loaded" flag and keep it true (don\'t unload)',
          'For useHover, use mouseenter/mouseleave events on the ref element',
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
    {
      id: 'mod12-q6',
      question: 'Why does usePrevious use useRef instead of useState to store the previous value?',
      options: [
        'useRef is faster than useState for storing numbers',
        'useState would cause an extra re-render, while useRef updates silently without triggering a render',
        'useRef can store any type of value, but useState can only store primitives',
        'useState would reset the value on every render, making it impossible to track history',
      ],
      correctAnswer: 1,
      explanation:
        'Storing the previous value with useState would cause an unnecessary extra re-render. useRef updates its .current property without triggering a re-render, making it ideal for tracking values silently.',
    },
    {
      id: 'mod12-q7',
      question: 'Why does useInterval store the callback in a ref instead of passing it directly to setInterval?',
      options: [
        'Refs are faster than closures for function execution',
        'setInterval does not accept callback functions directly',
        'To avoid stale closures — the interval always calls the latest version of the callback',
        'To prevent the callback from being garbage collected between intervals',
      ],
      correctAnswer: 2,
      explanation:
        'Without a ref, setInterval would capture the callback at creation time and keep calling that stale version. By storing the callback in a ref and reading ref.current inside the interval, it always calls the latest version.',
    },
    {
      id: 'mod12-q8',
      question: 'How do you pause a useInterval hook?',
      options: [
        'Call a pause() method returned by the hook',
        'Set the interval delay to 0',
        'Pass null as the delay parameter',
        'Remove the component from the DOM',
      ],
      correctAnswer: 2,
      explanation:
        'By convention, passing null as the delay causes the useEffect to skip the setInterval call entirely. When delay changes back to a number, the interval resumes.',
    },
    {
      id: 'mod12-q9',
      question: 'What advantage does useEventListener provide over writing addEventListener directly in useEffect?',
      options: [
        'It supports event types that addEventListener does not',
        'It automatically uses event delegation for better performance',
        'It avoids stale closures by storing the handler in a ref and handles cleanup automatically',
        'It batches multiple events into a single callback for efficiency',
      ],
      correctAnswer: 2,
      explanation:
        'useEventListener stores the handler in a ref so the listener always calls the latest version (no stale closures). It also handles addEventListener/removeEventListener cleanup automatically, reducing boilerplate and potential bugs.',
    },
    {
      id: 'mod12-q10',
      question: 'What does IntersectionObserver provide over listening to scroll events for lazy loading?',
      options: [
        'IntersectionObserver works in all browsers but scroll events do not',
        'IntersectionObserver fires callbacks asynchronously off the main thread, avoiding scroll performance issues',
        'IntersectionObserver can detect elements in iframes but scroll events cannot',
        'IntersectionObserver uses less memory than scroll event listeners',
      ],
      correctAnswer: 1,
      explanation:
        'Scroll event listeners fire on the main thread and can cause jank if the handler does heavy work. IntersectionObserver is handled asynchronously by the browser, making it far more performant for detecting element visibility.',
    },
  ],
};
