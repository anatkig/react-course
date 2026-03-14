import type { Module } from '../types';

export const module16: Module = {
  id: 'mod-16',
  title: 'Testing React Applications',
  description:
    'Learn to test React apps with confidence: unit tests with Vitest/Jest, React Testing Library patterns, mocking hooks and APIs, integration tests, and testing best practices.',
  topics: [
    {
      id: 'mod16-t1',
      title: 'Testing Fundamentals with Vitest',
      explanation: `## Setting Up Tests

### Vitest (Vite-native)

\`\`\`bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
\`\`\`

\`\`\`js
// vite.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
\`\`\`

\`\`\`ts
// src/test/setup.ts
import '@testing-library/jest-dom';
\`\`\`

### Writing Your First Test

\`\`\`tsx
import { describe, it, expect } from 'vitest';

// Testing a pure function
function add(a, b) { return a + b; }

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });

  it('handles zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});
\`\`\`

### Common Matchers

\`\`\`tsx
expect(value).toBe(exact);           // Strict equality
expect(value).toEqual(deepEqual);    // Deep equality
expect(value).toBeTruthy();          // Truthy check
expect(value).toBeNull();            // null check
expect(array).toContain(item);       // Array contains
expect(array).toHaveLength(3);       // Array length
expect(fn).toThrow();                // Throws error
expect(fn).toHaveBeenCalled();       // Function was called
expect(fn).toHaveBeenCalledWith(x);  // Called with specific args
\`\`\`

### Test Organization

\`\`\`
src/
  components/
    Button.tsx
    Button.test.tsx    # Co-located test
  utils/
    format.ts
    format.test.ts
  __tests__/           # Or a shared test folder
    integration/
      checkout.test.tsx
\`\`\`

### AAA Pattern (Arrange, Act, Assert)

\`\`\`tsx
it('filters completed todos', () => {
  // Arrange
  const todos = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Write tests', done: false },
  ];

  // Act
  const completed = todos.filter(t => t.done);

  // Assert
  expect(completed).toHaveLength(1);
  expect(completed[0].text).toBe('Learn React');
});
\`\`\``,
      task: {
        description:
          'Write tests for a `formatPrice` utility function that formats numbers as currency strings. Test edge cases: zero, negative numbers, large numbers, and decimal rounding.',
        starterCode: `// Function to test
function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// TODO: Write comprehensive tests
describe('formatPrice', () => {
  // TODO: Test normal cases
  // TODO: Test edge cases
});`,
        solution: `function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

describe('formatPrice', () => {
  it('formats a regular price', () => {
    expect(formatPrice(9.99)).toBe('$9.99');
  });

  it('formats zero', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });

  it('formats large numbers with commas', () => {
    expect(formatPrice(1234567.89)).toBe('$1,234,567.89');
  });

  it('rounds to two decimal places', () => {
    expect(formatPrice(9.999)).toBe('$10.00');
  });

  it('formats negative numbers', () => {
    expect(formatPrice(-5.50)).toBe('-$5.50');
  });

  it('supports different currencies', () => {
    expect(formatPrice(10, 'EUR')).toBe('€10.00');
  });

  it('handles very small amounts', () => {
    expect(formatPrice(0.01)).toBe('$0.01');
  });
});`,
        hints: [
          'Follow the AAA pattern: Arrange, Act, Assert',
          'Test edge cases: 0, negative, very large, many decimals',
          'Each test should verify one specific behavior',
        ],
      },
    },
    {
      id: 'mod16-t2',
      title: 'React Testing Library Basics',
      explanation: `## Testing Components with RTL

React Testing Library focuses on testing **what users see and do**, not internal implementation details.

### Core Principle: Test Behavior, Not Implementation

\`\`\`tsx
import { render, screen, fireEvent } from '@testing-library/react';

// ❌ Bad — testing implementation details
expect(component.state.count).toBe(1);

// ✅ Good — testing what user sees
expect(screen.getByText('Count: 1')).toBeInTheDocument();
\`\`\`

### Rendering Components

\`\`\`tsx
import { render, screen } from '@testing-library/react';

it('renders a greeting', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});
\`\`\`

### Query Types

| Priority | Method | Use When |
|----------|--------|----------|
| 1st | \`getByRole\` | Accessible elements (buttons, inputs, headings) |
| 2nd | \`getByLabelText\` | Form fields with labels |
| 3rd | \`getByPlaceholderText\` | Inputs with placeholders |
| 4th | \`getByText\` | Non-interactive text content |
| 5th | \`getByTestId\` | Last resort — use data-testid |

### Query Variants

| Variant | 0 Matches | 1 Match | 1+ Matches | Async? |
|---------|-----------|---------|------------|--------|
| \`getBy\` | Throws | Returns | Throws | No |
| \`queryBy\` | null | Returns | Throws | No |
| \`findBy\` | Throws | Returns | Throws | Yes |
| \`getAllBy\` | Throws | Array | Array | No |

### User Events

\`\`\`tsx
import userEvent from '@testing-library/user-event';

it('increments counter on click', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

it('types in an input', async () => {
  const user = userEvent.setup();
  render(<SearchBox />);

  const input = screen.getByRole('textbox');
  await user.type(input, 'React');
  expect(input).toHaveValue('React');
});
\`\`\`

### Testing Absence

\`\`\`tsx
// Use queryBy when you expect something NOT to be there
expect(screen.queryByText('Error')).not.toBeInTheDocument();
\`\`\``,
      task: {
        description:
          'Write tests for a `LoginForm` component. Test: rendering the form fields, submitting with valid data calls onSubmit, showing error when fields are empty, and the password field is type="password".',
        starterCode: `function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password}
        onChange={e => setPassword(e.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button type="submit">Log In</button>
    </form>
  );
}

// TODO: Write tests
describe('LoginForm', () => {
  // TODO
});`,
        solution: `describe('LoginForm', () => {
  it('renders email and password fields', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('password field has type password', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
  });

  it('shows error when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    await user.click(screen.getByRole('button', { name: /log in/i }));
    expect(screen.getByRole('alert')).toHaveTextContent('All fields are required');
  });

  it('calls onSubmit with email and password', async () => {
    const user = userEvent.setup();
    const mockSubmit = vi.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'secret123');
    await user.click(screen.getByRole('button', { name: /log in/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'secret123',
    });
  });

  it('does not show error initially', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});`,
        hints: [
          'Use getByLabelText to find form fields — tests accessibility too',
          'Use vi.fn() (Vitest) or jest.fn() (Jest) to create mock functions',
          'Use queryByRole instead of getByRole when testing absence',
        ],
      },
    },
    {
      id: 'mod16-t3',
      title: 'Mocking APIs & Hooks',
      explanation: `## Mocking API Calls

### Mocking fetch with vi.fn

\`\`\`tsx
beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

it('displays users after fetching', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]),
  });

  render(<UserList />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
});

it('shows error on fetch failure', async () => {
  global.fetch.mockRejectedValueOnce(new Error('Network error'));

  render(<UserList />);

  expect(await screen.findByText(/error/i)).toBeInTheDocument();
});
\`\`\`

### Mocking Modules

\`\`\`tsx
// Mock an entire module
vi.mock('../api/users', () => ({
  fetchUsers: vi.fn(),
}));

import { fetchUsers } from '../api/users';

it('uses the mocked function', async () => {
  fetchUsers.mockResolvedValue([{ id: 1, name: 'Test' }]);
  render(<UserList />);
  expect(await screen.findByText('Test')).toBeInTheDocument();
});
\`\`\`

### Mocking Custom Hooks

\`\`\`tsx
vi.mock('../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from '../hooks/useAuth';

it('shows dashboard for authenticated user', () => {
  useAuth.mockReturnValue({
    user: { name: 'Alice' },
    isAuthenticated: true,
  });

  render(<Dashboard />);
  expect(screen.getByText('Welcome, Alice')).toBeInTheDocument();
});

it('redirects unauthenticated users', () => {
  useAuth.mockReturnValue({
    user: null,
    isAuthenticated: false,
  });

  render(<Dashboard />);
  expect(screen.getByText('Please log in')).toBeInTheDocument();
});
\`\`\`

### Mocking Timers

\`\`\`tsx
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it('debounces search input', async () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  render(<SearchBox onSearch={mockSearch} />);

  await user.type(screen.getByRole('textbox'), 'React');
  expect(mockSearch).not.toHaveBeenCalled();

  vi.advanceTimersByTime(500);
  expect(mockSearch).toHaveBeenCalledWith('React');
});
\`\`\``,
      task: {
        description:
          'Write tests for a `UserProfile` component that fetches user data. Test: loading state, successful data display, error state on fetch failure, and that it calls the correct URL.',
        starterCode: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(r => { if (!r.ok) throw new Error('Not found'); return r.json(); })
      .then(setUser)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{user.name}</h1>;
}

// TODO: Write tests with mocked fetch
describe('UserProfile', () => {
  // TODO
});`,
        solution: `describe('UserProfile', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows loading initially', () => {
    global.fetch.mockReturnValue(new Promise(() => {}));
    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays user name after fetch', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 1, name: 'Alice' }),
    });

    render(<UserProfile userId={1} />);
    expect(await screen.findByText('Alice')).toBeInTheDocument();
  });

  it('fetches the correct URL', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 42, name: 'Bob' }),
    });

    render(<UserProfile userId={42} />);
    await screen.findByText('Bob');
    expect(global.fetch).toHaveBeenCalledWith('/api/users/42');
  });

  it('shows error when fetch fails', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false, status: 404 });

    render(<UserProfile userId={999} />);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});`,
        hints: [
          'Use vi.fn() to mock global.fetch before each test',
          'Use mockResolvedValueOnce for successful responses',
          'Use findByText (async) to wait for the loading state to resolve',
        ],
      },
    },
    {
      id: 'mod16-t4',
      title: 'Testing Best Practices',
      explanation: `## Testing Principles

### 1. Test Behavior, Not Implementation

\`\`\`tsx
// ❌ Bad — coupled to implementation
it('sets isOpen state to true', () => {
  const { result } = renderHook(() => useState(false));
  act(() => result.current[1](true));
  expect(result.current[0]).toBe(true);
});

// ✅ Good — tests what user sees
it('shows dropdown content when clicked', async () => {
  const user = userEvent.setup();
  render(<Dropdown items={['A', 'B']} />);
  await user.click(screen.getByRole('button'));
  expect(screen.getByText('A')).toBeVisible();
});
\`\`\`

### 2. Arrange-Act-Assert (AAA)

\`\`\`tsx
it('adds item to cart', async () => {
  // Arrange
  const user = userEvent.setup();
  render(<ProductPage product={mockProduct} />);

  // Act
  await user.click(screen.getByRole('button', { name: /add to cart/i }));

  // Assert
  expect(screen.getByText('1 item in cart')).toBeInTheDocument();
});
\`\`\`

### 3. One Assertion Focus Per Test

Each test should verify one specific behavior. Multiple related assertions are fine, but don't test unrelated things together.

### 4. Avoid Testing Framework Internals

\`\`\`tsx
// ❌ Don't test that React renders
it('renders without crashing', () => {
  render(<App />);
}); // This tells us nothing useful

// ✅ Test meaningful behavior
it('shows the dashboard when user is logged in', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
});
\`\`\`

### 5. Testing Custom Hooks

\`\`\`tsx
import { renderHook, act } from '@testing-library/react';

it('increments counter', () => {
  const { result } = renderHook(() => useCounter(0));

  expect(result.current.count).toBe(0);

  act(() => result.current.increment());

  expect(result.current.count).toBe(1);
});
\`\`\`

### 6. Test Coverage Strategy

| Layer | What to Test | Coverage Goal |
|-------|-------------|---------------|
| Utils / Pure Functions | All edge cases | High |
| Custom Hooks | State transitions, effects | High |
| Components | User interactions, rendering | Medium-High |
| Pages / Integration | Happy paths, critical flows | Medium |
| E2E | Key user journeys | Low (but valuable) |`,
      task: {
        description:
          'Write tests for a `useCounter` custom hook. Test initialization, increment, decrement, reset, and ensure it handles boundaries (e.g., min/max values if provided).',
        starterCode: `function useCounter(initial = 0, { min = -Infinity, max = Infinity } = {}) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => Math.min(c + 1, max));
  const decrement = () => setCount(c => Math.max(c - 1, min));
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
}

// TODO: Write comprehensive hook tests
describe('useCounter', () => {
  // TODO
});`,
        solution: `describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('initializes with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments the count', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it('decrements the count', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(4);
  });

  it('resets to initial value', () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => result.current.increment());
    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.count).toBe(3);
  });

  it('does not exceed max', () => {
    const { result } = renderHook(() => useCounter(9, { max: 10 }));
    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.count).toBe(10);
  });

  it('does not go below min', () => {
    const { result } = renderHook(() => useCounter(1, { min: 0 }));
    act(() => result.current.decrement());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});`,
        hints: [
          'Use renderHook from @testing-library/react to test hooks',
          'Wrap state updates in act() to flush React updates',
          'Test boundary conditions: what happens at min/max limits',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod16-q1',
      question: 'What is the primary philosophy of React Testing Library?',
      options: [
        'Test internal component state and lifecycle methods',
        'Test components the way users interact with them',
        'Achieve 100% code coverage on every component',
        'Test the virtual DOM diffing algorithm',
      ],
      correctAnswer: 1,
      explanation:
        'React Testing Library encourages testing components the way users interact with them — finding elements by role, label, or text content rather than implementation details like state, props, or component instances.',
    },
    {
      id: 'mod16-q2',
      question: 'Which query should you prefer when selecting a button in tests?',
      options: [
        'screen.getByTestId("submit-btn")',
        'screen.getByRole("button", { name: /submit/i })',
        'document.querySelector(".submit-button")',
        'screen.getByClassName("submit-button")',
      ],
      correctAnswer: 1,
      explanation:
        'getByRole is the preferred query because it tests accessibility. It finds elements by their ARIA role, which is how assistive technologies identify elements. getByTestId should be a last resort.',
    },
    {
      id: 'mod16-q3',
      question: 'When should you use findByText instead of getByText?',
      options: [
        'When the text might not exist in the document',
        'When the element appears asynchronously (e.g., after a fetch)',
        'When there are multiple elements with the same text',
        'When testing in a production environment',
      ],
      correctAnswer: 1,
      explanation:
        'findByText returns a Promise that resolves when the element appears in the DOM. Use it when elements appear asynchronously, such as after API calls or state updates that trigger re-renders.',
    },
    {
      id: 'mod16-q4',
      question: 'What does act() do in React hook tests?',
      options: [
        'It mocks the hook for testing purposes',
        'It wraps state updates to ensure all renders and effects are processed',
        'It skips the hook execution for faster tests',
        'It creates a new React component for testing',
      ],
      correctAnswer: 1,
      explanation:
        'act() ensures that all state updates, effects, and re-renders triggered by the wrapped code are fully processed before assertions. Without it, you might assert against stale state.',
    },
    {
      id: 'mod16-q5',
      question: 'Why should you avoid testing implementation details?',
      options: [
        'Implementation details are not testable in JavaScript',
        'Tests become fragile and break when refactoring, even if behavior is unchanged',
        'React Testing Library physically prevents access to implementation details',
        'Implementation detail tests run slower than behavioral tests',
      ],
      correctAnswer: 1,
      explanation:
        'Testing implementation details (internal state, method names, component structure) creates fragile tests that break when you refactor. Behavior-focused tests remain valid as long as the user-facing behavior is unchanged.',
    },
  ],
};
