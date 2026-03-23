import type { Module } from '../types';

export const module17: Module = {
  id: 'mod-17',
  title: 'Accessibility (a11y)',
  description:
    'Build inclusive React applications: ARIA roles and attributes, focus management, keyboard navigation, screen reader support, and semantic HTML patterns.',
  topics: [
    {
      id: 'mod17-t1',
      title: 'Semantic HTML & ARIA Basics',
      explanation: `## Why Accessibility Matters

1 in 4 adults in the US have some form of disability. Accessible apps work for everyone and are often legally required.

### Semantic HTML First

Use the right HTML elements — they have built-in accessibility:

\`\`\`jsx
// ❌ Bad — div with onClick has no keyboard support or role
<div onClick={handleClick}>Click me</div>

// ✅ Good — button has built-in keyboard, focus, and role
<button onClick={handleClick}>Click me</button>
\`\`\`

### Semantic Elements to Use

| Instead of... | Use... |
|--------------|--------|
| \`<div>\` for navigation | \`<nav>\` |
| \`<div>\` for main content | \`<main>\` |
| \`<div>\` for header | \`<header>\` |
| \`<div>\` for footer | \`<footer>\` |
| \`<div>\` for sections | \`<section>\` with heading |
| \`<span onClick>\` | \`<button>\` |
| \`<div>\` for list | \`<ul>\`, \`<ol>\` |

### ARIA Roles

When semantic HTML isn't enough, use ARIA:

\`\`\`jsx
// ❌ Unclear to screen readers
<div className="alert-box">Error occurred!</div>

// ✅ Announced as an alert
<div role="alert">Error occurred!</div>
\`\`\`

### Common ARIA Attributes

\`\`\`jsx
// Labeling
<button aria-label="Close dialog">✕</button>
<input aria-labelledby="name-label" />
<span id="name-label">Full Name</span>

// State
<button aria-expanded={isOpen}>Menu</button>
<input aria-invalid={hasError} />
<div aria-busy={loading}>Content</div>

// Relationships
<input aria-describedby="help-text" />
<p id="help-text">Must be at least 8 characters</p>

// Live regions (screen reader announces changes)
<div aria-live="polite">3 items found</div>
<div aria-live="assertive">Error: connection lost!</div>
\`\`\`

### The First Rule of ARIA

> Don't use ARIA when native HTML can do the job.

\`\`\`jsx
// ❌ Unnecessary ARIA
<div role="button" tabIndex={0} onClick={handleClick}>Save</div>

// ✅ Just use a button
<button onClick={handleClick}>Save</button>
\`\`\``,
      tasks: [{
        description:
          'Refactor a poorly accessible component to use semantic HTML and proper ARIA attributes. The component is a notification center with a list of messages, a dismiss button for each, and a clear-all button.',
        starterCode: `// ❌ Current inaccessible version
function NotificationCenter({ notifications, onDismiss, onClearAll }) {
  return (
    <div className="notif-panel">
      <div className="notif-title">Notifications</div>
      <div className="notif-list">
        {notifications.map(n => (
          <div key={n.id} className="notif-item">
            <div>{n.message}</div>
            <div className="notif-close" onClick={() => onDismiss(n.id)}>✕</div>
          </div>
        ))}
      </div>
      <div className="notif-clear" onClick={onClearAll}>Clear All</div>
    </div>
  );
}`,
        solution: `function NotificationCenter({ notifications, onDismiss, onClearAll }) {
  return (
    <section aria-label="Notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <>
          <ul role="list">
            {notifications.map(n => (
              <li key={n.id}>
                <span>{n.message}</span>
                <button
                  aria-label={\`Dismiss notification: \${n.message}\`}
                  onClick={() => onDismiss(n.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onClearAll}>Clear All</button>
        </>
      )}
    </section>
  );
}`,
        hints: [
          'Replace outer div with <section> and add aria-label',
          'Use <h2> for the title, <ul>/<li> for the list, <button> for actions',
          'Add aria-label to the dismiss button explaining what it dismisses',
        ],
      }],
    },
    {
      id: 'mod17-t2',
      title: 'Keyboard Navigation',
      explanation: `## Keyboard Accessibility

All interactive elements must be usable with keyboard only (Tab, Enter, Space, Escape, Arrow keys).

### Focus Order (Tab Index)

\`\`\`jsx
// tabIndex="0" — element is focusable in natural tab order
<div tabIndex={0} role="button" onClick={handleClick}>Custom button</div>

// tabIndex="-1" — focusable programmatically but not via Tab
<div tabIndex={-1} ref={errorRef}>Error message</div>

// ❌ Never use tabIndex > 0 — it overrides natural order
\`\`\`

### Keyboard Event Handlers

\`\`\`jsx
function MenuButton({ onSelect }) {
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        onSelect();
        break;
      case 'Escape':
        closeMenu();
        break;
      case 'ArrowDown':
        e.preventDefault();
        focusNextItem();
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusPreviousItem();
        break;
    }
  };

  return <div role="menu" onKeyDown={handleKeyDown}>...</div>;
}
\`\`\`

### Focus Trapping (for Modals)

\`\`\`jsx
function useFocusTrap(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const focusable = el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    el.addEventListener('keydown', handleKeyDown);
    first?.focus();

    return () => el.removeEventListener('keydown', handleKeyDown);
  }, [ref]);
}
\`\`\`

### Skip Navigation Link

\`\`\`jsx
function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav>...</nav>
      <main id="main-content">{children}</main>
    </>
  );
}

// CSS
.skip-link {
  position: absolute;
  left: -9999px;
}
.skip-link:focus {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
\`\`\``,
      tasks: [{
        description:
          'Create an accessible `Modal` component with focus trapping. When the modal opens, focus should move to the modal. Tab/Shift+Tab should cycle within the modal. Escape closes it. When closed, focus returns to the trigger.',
        starterCode: `function Modal({ isOpen, onClose, title, children }) {
  // TODO: Focus trap inside modal
  // TODO: Escape key closes modal
  // TODO: Return focus to trigger on close
  if (!isOpen) return null;
  return null;
}`,
        solution: `function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      setTimeout(() => modalRef.current?.focus(), 0);
    } else if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
      >
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}`,
        hints: [
          'Save document.activeElement before opening to restore focus later',
          'Use role="dialog" and aria-modal="true" on the modal container',
          'Query all focusable elements and trap Tab between first and last',
        ],
      }],
    },
    {
      id: 'mod17-t3',
      title: 'Screen Reader Support',
      explanation: `## Making Content Screen Reader Friendly

### Visually Hidden but Accessible

\`\`\`jsx
// CSS class for screen-reader-only content
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Usage
<button>
  <TrashIcon />
  <span className="sr-only">Delete item</span>
</button>
\`\`\`

### Live Regions for Dynamic Content

\`\`\`jsx
function SearchResults({ results, loading }) {
  return (
    <div>
      {/* Polite: announced when screen reader is idle */}
      <div aria-live="polite" className="sr-only">
        {loading ? 'Searching...' : \\\`\\\${results.length} results found\\\`}
      </div>

      {results.map(r => <ResultItem key={r.id} {...r} />)}
    </div>
  );
}
\`\`\`

### Announcing Status Changes

\`\`\`jsx
function useAnnounce() {
  const [message, setMessage] = useState('');

  const announce = (text) => {
    setMessage('');
    // Small delay ensures screen reader detects the change
    setTimeout(() => setMessage(text), 100);
  };

  const Announcer = () => (
    <div aria-live="assertive" className="sr-only">
      {message}
    </div>
  );

  return { announce, Announcer };
}

// Usage
function TodoApp() {
  const { announce, Announcer } = useAnnounce();

  const addTodo = (text) => {
    setTodos(prev => [...prev, { text }]);
    announce(\\\`Added: \\\${text}\\\`);
  };

  const deleteTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    setTodos(prev => prev.filter(t => t.id !== id));
    announce(\\\`Deleted: \\\${todo.text}\\\`);
  };

  return (
    <div>
      <Announcer />
      {/* rest of component */}
    </div>
  );
}
\`\`\`

### Image Accessibility

\`\`\`jsx
// Informative image — describe it
<img src="chart.png" alt="Sales increased 25% in Q3 2024" />

// Decorative image — empty alt
<img src="divider.png" alt="" />

// Complex image — longer description
<figure>
  <img src="architecture.png" alt="System architecture diagram" />
  <figcaption>
    The system uses a microservices architecture with three major layers...
  </figcaption>
</figure>
\`\`\`

### Heading Hierarchy

\`\`\`jsx
// ✅ Proper heading hierarchy
<h1>Dashboard</h1>
  <h2>Recent Activity</h2>
  <h2>Statistics</h2>
    <h3>Daily Users</h3>
    <h3>Revenue</h3>

// ❌ Skipping levels
<h1>Dashboard</h1>
  <h4>Activity</h4>  // Skipped h2 and h3!
\`\`\``,
      tasks: [{
        description:
          'Create a `Toast` notification system that is screen-reader accessible. Toasts should be announced via aria-live when they appear. Include a visually hidden announcer and proper dismiss functionality.',
        starterCode: `function useToast() {
  // TODO: Manage toast state
  // TODO: Provide announce function
  // TODO: Auto-dismiss after timeout
}

function ToastContainer() {
  // TODO: Render toasts with proper aria-live
  return null;
}`,
        solution: `function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    if (duration > 0) {
      setTimeout(() => dismissToast(id), duration);
    }
  };

  const dismissToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return { toasts, addToast, dismissToast };
}

function ToastContainer({ toasts, onDismiss }) {
  return (
    <div aria-live="polite" aria-label="Notifications" role="region">
      {toasts.map(toast => (
        <div key={toast.id} role="status" className={\`toast toast-\${toast.type}\`}>
          <span>{toast.message}</span>
          <button
            aria-label={\`Dismiss: \${toast.message}\`}
            onClick={() => onDismiss(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}`,
        hints: [
          'Use aria-live="polite" on the container so new toasts are announced',
          'Each toast should have role="status" for proper screen reader support',
          'Dismiss buttons need aria-label explaining what they dismiss',
        ],
      }],
    },
    {
      id: 'mod17-t4',
      title: 'Testing Accessibility',
      explanation: `## Automated Accessibility Testing

### Using jest-axe

\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`

### RTL Accessibility Queries

React Testing Library's queries are accessibility-focused by design:

\`\`\`tsx
// These test accessibility by default
screen.getByRole('button', { name: /submit/i });  // Tests role + accessible name
screen.getByLabelText(/email/i);                    // Tests label association
screen.getByRole('heading', { level: 2 });          // Tests heading hierarchy
screen.getByRole('alert');                           // Tests alert role
\`\`\`

### Testing Keyboard Navigation

\`\`\`tsx
it('supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Menu items={['Home', 'About', 'Contact']} />);

  // Tab to the menu
  await user.tab();
  expect(screen.getByText('Home')).toHaveFocus();

  // Arrow down to next item
  await user.keyboard('{ArrowDown}');
  expect(screen.getByText('About')).toHaveFocus();

  // Enter to select
  await user.keyboard('{Enter}');
  expect(mockOnSelect).toHaveBeenCalledWith('About');
});
\`\`\`

### Testing Focus Management

\`\`\`tsx
it('traps focus in modal', async () => {
  const user = userEvent.setup();
  render(<Modal isOpen={true} onClose={mockClose} />);

  const closeBtn = screen.getByRole('button', { name: /close/i });
  const input = screen.getByRole('textbox');

  // Focus should start in the modal
  expect(closeBtn).toHaveFocus();

  // Tab should cycle within modal
  await user.tab();
  expect(input).toHaveFocus();

  await user.tab();
  expect(closeBtn).toHaveFocus(); // Back to first element
});

it('closes modal on Escape', async () => {
  const user = userEvent.setup();
  render(<Modal isOpen={true} onClose={mockClose} />);

  await user.keyboard('{Escape}');
  expect(mockClose).toHaveBeenCalled();
});
\`\`\`

### Accessibility Checklist

- [ ] All images have alt text (or alt="" for decorative)
- [ ] All form inputs have associated labels
- [ ] Color is not the only way to convey information
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Focus is visible and managed correctly
- [ ] All functionality is keyboard accessible
- [ ] Dynamic content uses aria-live regions
- [ ] Modals trap focus and restore it on close
- [ ] Sufficient color contrast (4.5:1 for text)`,
      tasks: [{
        description:
          'Write accessibility tests for a `NavigationMenu` component. Test: proper ARIA roles, keyboard navigation (arrow keys to move between items, Enter to select), and that the current page is indicated with aria-current.',
        starterCode: `function NavigationMenu({ items, currentPath, onNavigate }) {
  return (
    <nav aria-label="Main navigation">
      <ul role="menubar">
        {items.map((item) => (
          <li key={item.path} role="none">
            <a
              href={item.path}
              role="menuitem"
              aria-current={item.path === currentPath ? 'page' : undefined}
              onClick={(e) => { e.preventDefault(); onNavigate(item.path); }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// TODO: Write accessibility tests
describe('NavigationMenu a11y', () => {
  // TODO
});`,
        solution: `const mockItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

describe('NavigationMenu a11y', () => {
  it('has navigation landmark with label', () => {
    render(<NavigationMenu items={mockItems} currentPath="/" onNavigate={() => {}} />);
    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument();
  });

  it('renders items with menuitem role', () => {
    render(<NavigationMenu items={mockItems} currentPath="/" onNavigate={() => {}} />);
    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(3);
  });

  it('marks current page with aria-current', () => {
    render(<NavigationMenu items={mockItems} currentPath="/about" onNavigate={() => {}} />);
    expect(screen.getByText('About')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current');
  });

  it('calls onNavigate when item is clicked', async () => {
    const user = userEvent.setup();
    const mockNav = vi.fn();
    render(<NavigationMenu items={mockItems} currentPath="/" onNavigate={mockNav} />);

    await user.click(screen.getByText('About'));
    expect(mockNav).toHaveBeenCalledWith('/about');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <NavigationMenu items={mockItems} currentPath="/" onNavigate={() => {}} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});`,
        hints: [
          'Use getByRole("navigation") to verify the nav landmark',
          'Use toHaveAttribute to check aria-current',
          'Use jest-axe for automated accessibility violation detection',
        ],
      }],
    },
  ],
  test: [
    {
      id: 'mod17-q1',
      question: 'What is the "first rule of ARIA"?',
      options: [
        'Always use aria-label on every element',
        'Don\'t use ARIA when native HTML elements can provide the semantics',
        'Use ARIA roles on every div element',
        'ARIA attributes are required for all interactive elements',
      ],
      correctAnswer: 1,
      explanation:
        'The first rule of ARIA is to not use it when native HTML provides the same semantics. A <button> is better than <div role="button"> because it includes keyboard support, focus management, and form submission for free.',
    },
    {
      id: 'mod17-q2',
      question: 'What does aria-live="polite" do?',
      options: [
        'It makes the element focusable via Tab key',
        'It announces content changes to screen readers when the user is idle',
        'It prevents the element from being read by screen readers',
        'It adds a polite animation when content changes',
      ],
      correctAnswer: 1,
      explanation:
        'aria-live="polite" creates a live region. Screen readers will announce content changes in this element when they finish reading the current content. Use "assertive" for urgent messages that interrupt.',
    },
    {
      id: 'mod17-q3',
      question: 'Why is focus trapping important for modals?',
      options: [
        'It improves the visual appearance of the modal',
        'It prevents keyboard users from tabbing to content hidden behind the modal',
        'It makes the modal load faster',
        'It reduces the number of DOM elements rendered',
      ],
      correctAnswer: 1,
      explanation:
        'Focus trapping keeps keyboard focus within the modal, preventing users from tabbing to invisible content behind it. Without it, keyboard users can interact with page elements they can\'t see, causing confusion.',
    },
    {
      id: 'mod17-q4',
      question: 'What is the purpose of the sr-only CSS class?',
      options: [
        'It hides content from all users including screen readers',
        'It hides content visually but keeps it accessible to screen readers',
        'It applies special styling only when a screen reader is detected',
        'It enlarges text for users with low vision',
      ],
      correctAnswer: 1,
      explanation:
        'The sr-only (screen reader only) class visually hides content while keeping it in the accessibility tree. Screen readers can still read it. This is used for adding context that sighted users get visually (like icon button labels).',
    },
    {
      id: 'mod17-q5',
      question: 'What is aria-current="page" used for?',
      options: [
        'To indicate which page was loaded first',
        'To indicate the current page in a navigation menu for assistive technology',
        'To mark a page as the homepage of the site',
        'To set the default page when no URL is specified',
      ],
      correctAnswer: 1,
      explanation:
        'aria-current="page" tells assistive technology which link in a navigation corresponds to the current page. Screen readers announce it as "current page", helping users understand where they are in the site.',
    },
  ],
};
