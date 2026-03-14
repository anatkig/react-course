import type { Module } from '../types';

export const module15: Module = {
  id: 'mod-15',
  title: 'React & API Integration',
  description:
    'Master API integration patterns: REST and GraphQL, caching strategies, optimistic updates, pagination, error/loading states, and request cancellation.',
  topics: [
    {
      id: 'mod15-t1',
      title: 'Data Fetching Patterns',
      explanation: `## Fetching Data in React

### Basic Pattern with useEffect

\`\`\`jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const res = await fetch('/api/users', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
\`\`\`

### Abstracting with a Custom Hook

\`\`\`jsx
function useAPI(method, url, body = null) {
  const [state, setState] = useState({
    data: null, loading: method === 'GET', error: null,
  });

  const execute = useCallback(async (overrideBody) => {
    const controller = new AbortController();
    setState(s => ({ ...s, loading: true, error: null }));

    try {
      const options = {
        method,
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      };
      if (method !== 'GET') {
        options.body = JSON.stringify(overrideBody || body);
      }
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
      const data = await res.json();
      setState({ data, loading: false, error: null });
      return data;
    } catch (err) {
      if (err.name !== 'AbortError') {
        setState({ data: null, loading: false, error: err.message });
      }
    }
  }, [method, url, body]);

  useEffect(() => {
    if (method === 'GET') execute();
  }, [method, execute]);

  return { ...state, execute };
}
\`\`\`

### POST / PUT / DELETE

\`\`\`jsx
function CreateUserForm() {
  const { execute, loading, error } = useAPI('POST', '/api/users');

  const handleSubmit = async (formData) => {
    const newUser = await execute(formData);
    if (newUser) {
      // Navigate or update UI
    }
  };
}
\`\`\`

### Request Deduplication

\`\`\`jsx
const cache = new Map();

function useCachedFetch(url) {
  const [data, setData] = useState(() => cache.get(url) || null);
  const [loading, setLoading] = useState(!cache.has(url));

  useEffect(() => {
    if (cache.has(url)) return;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        cache.set(url, data);
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
\`\`\``,
      task: {
        description:
          'Create a `useAPI` hook that supports GET, POST, PUT, and DELETE methods. GET requests should auto-execute on mount. Other methods should return an `execute` function. Include loading, error, and data states. Use AbortController for cleanup.',
        starterCode: `function useAPI(method, url) {
  // TODO: Handle GET auto-fetch and manual execute for others
  // TODO: Include AbortController for cleanup
}`,
        solution: `function useAPI(method, url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(method === 'GET');
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const execute = useCallback(async (body) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      };
      if (body) options.body = JSON.stringify(body);

      const res = await fetch(url, options);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const result = await res.json();
      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setLoading(false);
      }
    }
  }, [method, url]);

  useEffect(() => {
    if (method === 'GET') execute();
    return () => controllerRef.current?.abort();
  }, [method, execute]);

  return { data, loading, error, execute };
}`,
        hints: [
          'Auto-execute on mount only for GET requests',
          'Store AbortController in a ref and abort previous requests',
          'Return execute function so POST/PUT/DELETE can be triggered manually',
        ],
      },
    },
    {
      id: 'mod15-t2',
      title: 'Optimistic Updates',
      explanation: `## Optimistic UI Updates

Update the UI **immediately** before the server confirms, then roll back on failure.

### Pattern

\`\`\`jsx
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = async (id) => {
    // 1. Save the previous state
    const previousTodos = todos;

    // 2. Optimistically update
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );

    try {
      // 3. Send to server
      const todo = todos.find(t => t.id === id);
      await fetch(\\\`/api/todos/\\\${id}\\\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !todo.done }),
      });
    } catch {
      // 4. Roll back on failure
      setTodos(previousTodos);
      alert('Failed to update. Reverted.');
    }
  };

  const deleteTodo = async (id) => {
    const previousTodos = todos;
    setTodos(prev => prev.filter(t => t.id !== id));

    try {
      const res = await fetch(\\\`/api/todos/\\\${id}\\\`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
    } catch {
      setTodos(previousTodos);
      alert('Failed to delete. Reverted.');
    }
  };
}
\`\`\`

### Optimistic Add with Temporary ID

\`\`\`jsx
const addTodo = async (text) => {
  const tempId = 'temp-' + Date.now();
  const optimisticTodo = { id: tempId, text, done: false };

  // Add immediately with temp ID
  setTodos(prev => [...prev, optimisticTodo]);

  try {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const realTodo = await res.json();

    // Replace temp with real
    setTodos(prev =>
      prev.map(t => t.id === tempId ? realTodo : t)
    );
  } catch {
    // Remove optimistic item
    setTodos(prev => prev.filter(t => t.id !== tempId));
  }
};
\`\`\`

### When to Use Optimistic Updates

- **Good for**: Toggle buttons, likes, adding items to lists, status changes
- **Bad for**: Financial transactions, critical data changes, multi-step processes`,
      task: {
        description:
          'Create a `LikeButton` component with optimistic updates. It should show the current like count and a like/unlike toggle. Update the UI immediately, send the request, and roll back if it fails.',
        starterCode: `function LikeButton({ postId, initialLikes, initialLiked }) {
  // TODO: Track like count and liked state
  // TODO: Optimistically update on click
  // TODO: Roll back on API failure
  return null;
}`,
        solution: `function LikeButton({ postId, initialLikes, initialLiked }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(initialLiked);

  const handleToggle = async () => {
    const prevLikes = likes;
    const prevLiked = liked;

    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);

    try {
      const res = await fetch(\`/api/posts/\${postId}/like\`, {
        method: liked ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed');
    } catch {
      setLiked(prevLiked);
      setLikes(prevLikes);
    }
  };

  return (
    <button onClick={handleToggle} className={liked ? 'liked' : ''}>
      {liked ? '❤️' : '🤍'} {likes}
    </button>
  );
}`,
        hints: [
          'Save previous state before making optimistic changes',
          'Update state immediately, then send the API request',
          'In the catch block, restore the previous state to roll back',
        ],
      },
    },
    {
      id: 'mod15-t3',
      title: 'Pagination & Infinite Scroll',
      explanation: `## Pagination Patterns

### Offset-Based Pagination

\`\`\`jsx
function PaginatedList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(\\\`/api/items?page=\\\${page}&limit=10\\\`)
      .then(r => r.json())
      .then(data => {
        setItems(data.items);
        setTotalPages(data.totalPages);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
      )}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
\`\`\`

### Cursor-Based Pagination

\`\`\`jsx
function CursorPaginated() {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const url = cursor
      ? \\\`/api/items?cursor=\\\${cursor}&limit=10\\\`
      : '/api/items?limit=10';
    const data = await fetch(url).then(r => r.json());
    setItems(prev => [...prev, ...data.items]);
    setCursor(data.nextCursor);
    setHasMore(!!data.nextCursor);
  };
}
\`\`\`

### Infinite Scroll with Intersection Observer

\`\`\`jsx
function useInfiniteScroll(callback, hasMore) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) callback();
      },
      { threshold: 0.1 }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [callback, hasMore]);

  return sentinelRef;
}

function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    const data = await fetch(\\\`/api/items?page=\\\${page}\\\`).then(r => r.json());
    setItems(prev => [...prev, ...data.items]);
    setHasMore(data.hasMore);
    setPage(p => p + 1);
  }, [page]);

  const sentinelRef = useInfiniteScroll(loadMore, hasMore);

  return (
    <div>
      {items.map(i => <div key={i.id}>{i.name}</div>)}
      {hasMore && <div ref={sentinelRef}>Loading more...</div>}
    </div>
  );
}
\`\`\``,
      task: {
        description:
          'Create a `useInfiniteScroll` hook using Intersection Observer. Use it in a component that loads pages of items as the user scrolls. Include loading and "no more items" states.',
        starterCode: `function useInfiniteScroll(loadMore, hasMore) {
  // TODO: Use Intersection Observer on a sentinel element
}

function InfinitePostList() {
  // TODO: Use the hook to load posts as user scrolls
  return null;
}`,
        solution: `function useInfiniteScroll(loadMore, hasMore) {
  const sentinelRef = useRef(null);
  const loadMoreRef = useRef(loadMore);
  loadMoreRef.current = loadMore;

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMoreRef.current(); },
      { threshold: 0.1 }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasMore]);

  return sentinelRef;
}

function InfinitePostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=10\`);
    const data = await res.json();
    setPosts(prev => [...prev, ...data]);
    setHasMore(data.length === 10);
    setPage(p => p + 1);
    setLoading(false);
  }, [page, loading]);

  const sentinelRef = useInfiniteScroll(loadMore, hasMore);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {hasMore ? <div ref={sentinelRef}>{loading ? 'Loading...' : 'Scroll for more'}</div>
        : <p>No more posts</p>}
    </div>
  );
}`,
        hints: [
          'Use IntersectionObserver to detect when the sentinel enters the viewport',
          'Use a ref for loadMore to avoid recreating the observer on every render',
          'Set hasMore to false when the API returns fewer items than requested',
        ],
      },
    },
    {
      id: 'mod15-t4',
      title: 'Error Handling & Loading States',
      explanation: `## Comprehensive Error Handling

### Error Boundary for Render Errors

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('React error:', error, info);
    // Send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
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

// Usage
<ErrorBoundary>
  <UserDashboard />
</ErrorBoundary>
\`\`\`

### HTTP Error Handling

\`\`\`jsx
class APIError extends Error {
  constructor(status, statusText, body) {
    super(\\\`API Error: \\\${status} \\\${statusText}\\\`);
    this.status = status;
    this.body = body;
  }
}

async function apiFetch(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new APIError(res.status, res.statusText, body);
  }
  return res.json();
}
\`\`\`

### Loading State Patterns

\`\`\`jsx
// Skeleton Loading
function PostSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line short" />
    </div>
  );
}

function PostList() {
  const { data, loading } = useFetch('/api/posts');

  if (loading) {
    return Array.from({ length: 5 }, (_, i) => <PostSkeleton key={i} />);
  }
  return data.map(p => <Post key={p.id} {...p} />);
}
\`\`\`

### Retry Logic

\`\`\`jsx
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay * (i + 1)));
    }
  }
}
\`\`\`

### Combining Error Boundary with API Errors

\`\`\`jsx
function DataView({ url }) {
  const { data, error, loading } = useFetch(url);

  if (loading) return <Skeleton />;
  if (error) {
    // Re-throw to let ErrorBoundary handle it
    if (error.status >= 500) throw error;
    // Handle client errors inline
    return <ErrorMessage message={error.message} />;
  }
  return <DataDisplay data={data} />;
}
\`\`\``,
      task: {
        description:
          'Create a `DataFetcher` component that demonstrates comprehensive error handling: loading skeletons, inline error messages for 4xx errors, error boundary fallback for 5xx errors, and a retry mechanism with exponential backoff.',
        starterCode: `function DataFetcher({ url }) {
  // TODO: Fetch data with proper error handling
  // TODO: Show skeleton while loading
  // TODO: Handle different error types differently
  // TODO: Include retry with backoff
  return null;
}`,
        solution: `async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const error = new Error(\`HTTP \${res.status}\`);
        error.status = res.status;
        throw error;
      }
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
}

function Skeleton() {
  return (
    <div className="skeleton">
      <div style={{ height: 20, background: '#e0e0e0', marginBottom: 8, borderRadius: 4 }} />
      <div style={{ height: 14, background: '#e0e0e0', marginBottom: 6, borderRadius: 4 }} />
      <div style={{ height: 14, background: '#e0e0e0', width: '60%', borderRadius: 4 }} />
    </div>
  );
}

function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchWithRetry(url);
      setData(result);
    } catch (err) {
      if (err.status >= 500) throw err; // Let ErrorBoundary handle
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => { load(); }, [load]);

  if (loading) return <Skeleton />;
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={load}>Retry</button>
    </div>
  );
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
        hints: [
          'Use exponential backoff: delay * Math.pow(2, attempt)',
          'Throw 5xx errors to let an ErrorBoundary handle server errors',
          'Handle 4xx errors inline with a retry button',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod15-q1',
      question: 'What is the purpose of AbortController in data fetching?',
      options: [
        'To encrypt the request data before sending',
        'To cancel in-flight requests when the component unmounts or dependencies change',
        'To retry failed requests automatically',
        'To compress the response data for faster transfer',
      ],
      correctAnswer: 1,
      explanation:
        'AbortController allows you to cancel pending fetch requests. This prevents memory leaks and race conditions when a component unmounts or when a new request should replace an old one.',
    },
    {
      id: 'mod15-q2',
      question: 'What is an optimistic update?',
      options: [
        'Updating the UI after the server confirms the change',
        'Updating the UI immediately and rolling back if the server request fails',
        'Sending multiple requests simultaneously for redundancy',
        'Prefetching data before the user requests it',
      ],
      correctAnswer: 1,
      explanation:
        'Optimistic updates change the UI instantly to make the app feel fast, then send the request to the server. If the request fails, the UI is reverted to the previous state.',
    },
    {
      id: 'mod15-q3',
      question: 'How does Intersection Observer help with infinite scroll?',
      options: [
        'It prefetches all pages at once when the component mounts',
        'It detects when a sentinel element enters the viewport, triggering the next page load',
        'It automatically scrolls the page to show new content',
        'It compresses images as they enter the viewport',
      ],
      correctAnswer: 1,
      explanation:
        'IntersectionObserver watches a sentinel element at the bottom of the list. When the user scrolls near it (it becomes visible in the viewport), the callback fires and loads the next page of data.',
    },
    {
      id: 'mod15-q4',
      question: 'What is exponential backoff in retry logic?',
      options: [
        'Retrying immediately without any delay',
        'Increasing the delay between retries exponentially (e.g., 1s, 2s, 4s)',
        'Decreasing the number of items fetched with each retry',
        'Sending the request to a different server each time',
      ],
      correctAnswer: 1,
      explanation:
        'Exponential backoff increases the wait time between retries (e.g., 1s, 2s, 4s, 8s). This prevents overwhelming a recovering server and gives it time to recover from temporary failures.',
    },
    {
      id: 'mod15-q5',
      question: 'Why should 5xx server errors be handled differently from 4xx client errors?',
      options: [
        '5xx errors mean the response is too large to display',
        '5xx errors indicate server problems and may be retryable; 4xx indicate client mistakes',
        '4xx errors are always caused by network issues',
        'There is no difference — they should be handled the same way',
      ],
      correctAnswer: 1,
      explanation:
        '5xx errors (server errors) are often temporary and retryable. 4xx errors (client errors like 404, 403) indicate the request itself is wrong and typically need different handling like showing an error message or redirecting.',
    },
  ],
};
