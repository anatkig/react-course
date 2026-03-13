import type { Module } from '../types';

export const module2: Module = {
  id: 'mod-2',
  title: 'State & Events',
  description:
    'Learn how to make your components interactive with state management using useState and event handling.',
  topics: [
    {
      id: 'mod2-t1',
      title: 'useState Hook',
      explanation: `## Managing State with useState

State lets a component "remember" information between renders. The \`useState\` hook is the primary way to add state to functional components.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### How useState Works

1. **Call \`useState(initialValue)\`** — returns a pair: \`[currentValue, setterFunction]\`.
2. **Read state** — use the first element (\`count\`).
3. **Update state** — call the setter (\`setCount\`). This triggers a re-render.

### Important Rules

- Call hooks **at the top level** of your component (not inside loops, conditions, or nested functions).
- State updates are **asynchronous** — the new value is available on the next render.
- React **batches** multiple state updates in event handlers.

### Functional Updates

When new state depends on previous state, use the functional form:

\`\`\`jsx
// ✅ Correct — uses latest state
setCount(prev => prev + 1);

// ⚠️ Risky — may use stale state
setCount(count + 1);
\`\`\`

### State with Objects and Arrays

\`\`\`jsx
const [user, setUser] = useState({ name: 'Alice', age: 25 });

// Always create a new object (don't mutate!)
setUser(prev => ({ ...prev, age: 26 }));

const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]); // add
setItems(prev => prev.filter(i => i.id !== id)); // remove
\`\`\``,
      task: {
        description:
          'Create a `ToggleSwitch` component that maintains an on/off state. Display the current state as text and provide a button to toggle it. Also add a reset counter that tracks how many times the switch has been toggled.',
        starterCode: `import { useState } from 'react';

function ToggleSwitch() {
  // TODO: Add state for isOn (boolean) and toggleCount (number)
  // TODO: Handle toggle logic
  return null;
}`,
        solution: `import { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [toggleCount, setToggleCount] = useState(0);

  const handleToggle = () => {
    setIsOn(prev => !prev);
    setToggleCount(prev => prev + 1);
  };

  return (
    <div className="toggle-switch">
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <p>Toggled {toggleCount} times</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}`,
        hints: [
          'Use two separate useState calls for independent state values',
          'Use the functional updater form: setIsOn(prev => !prev)',
          'Combine both state updates in a single handler function',
        ],
      },
    },
    {
      id: 'mod2-t2',
      title: 'Handling Events',
      explanation: `## Event Handling in React

React events use **camelCase** naming and accept functions (not strings) as handlers.

\`\`\`jsx
// ✅ React way
<button onClick={handleClick}>Click</button>

// ❌ HTML way (don't use)
<button onclick="handleClick()">Click</button>
\`\`\`

### The Event Object

Event handlers receive a **SyntheticEvent** — React's cross-browser wrapper:

\`\`\`jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Form submitted');
  };

  const handleChange = (e) => {
    console.log(e.target.value); // input value
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

### Passing Arguments to Handlers

\`\`\`jsx
// Use an arrow function wrapper
<button onClick={() => handleDelete(item.id)}>Delete</button>

// Or use .bind
<button onClick={handleDelete.bind(null, item.id)}>Delete</button>
\`\`\`

### Common Events

| Event | Usage |
|-------|-------|
| \`onClick\` | Buttons, clickable elements |
| \`onChange\` | Inputs, selects, textareas |
| \`onSubmit\` | Forms |
| \`onKeyDown\` / \`onKeyUp\` | Keyboard interactions |
| \`onFocus\` / \`onBlur\` | Focus management |
| \`onMouseEnter\` / \`onMouseLeave\` | Hover effects |`,
      task: {
        description:
          'Create a `SearchBox` component with an input field and a search button. Track the input value in state. When the user presses Enter or clicks Search, display the search query below the input. Also implement a Clear button that resets everything.',
        starterCode: `import { useState } from 'react';

function SearchBox() {
  // TODO: Track input value and submitted query
  // TODO: Handle input change, submit, and clear
  return null;
}`,
        solution: `import { useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  const handleClear = () => {
    setInput('');
    setQuery('');
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      {query && <p>Results for: "{query}"</p>}
    </div>
  );
}`,
        hints: [
          'Use a <form> with onSubmit to handle both button click and Enter key',
          'Call e.preventDefault() in onSubmit to prevent page reload',
          'Use type="button" on the Clear button so it does not submit the form',
        ],
      },
    },
    {
      id: 'mod2-t3',
      title: 'Working with Forms',
      explanation: `## Controlled Components

In a **controlled component**, form data is handled by React state:

\`\`\`jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

### Managing Multiple Fields with One State Object

\`\`\`jsx
function ProfileForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <textarea name="bio" value={form.bio} onChange={handleChange} />
    </form>
  );
}
\`\`\`

### Select and Checkbox

\`\`\`jsx
<select value={role} onChange={e => setRole(e.target.value)}>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

<input
  type="checkbox"
  checked={agreed}
  onChange={e => setAgreed(e.target.checked)}
/>
\`\`\`

### Basic Validation

\`\`\`jsx
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email.includes('@')) {
    setError('Invalid email');
    return;
  }
  setError('');
  // proceed
};
\`\`\``,
      task: {
        description:
          'Create a `RegistrationForm` component with fields: username, email, password, and a "role" select (user/admin). Use a single state object for all fields. Add validation: username must be at least 3 characters and email must contain @. Show error messages inline.',
        starterCode: `import { useState } from 'react';

function RegistrationForm() {
  // TODO: single state object for all form fields
  // TODO: error state
  // TODO: handleChange using computed property names
  // TODO: validate on submit
  return null;
}`,
        solution: `import { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (form.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!form.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      </div>
      <div>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}`,
        hints: [
          'Use [name]: value (computed property name) in handleChange',
          'Store errors as an object with field names as keys',
          'Validate in handleSubmit before proceeding',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod2-q1',
      question: 'What does useState return?',
      options: ['An array with [currentValue, setterFunction]', 'A single value that updates automatically on re-render', 'An object containing { value, setValue } properties', 'A Promise that resolves with the initial state value'],
      correctAnswer: 0,
      explanation:
        'useState returns an array with exactly two elements: the current state value and a function to update it. We use array destructuring to name them.',
    },
    {
      id: 'mod2-q2',
      question: 'Why should you use the functional form of setState (e.g., setCount(prev => prev + 1))?',
      options: ['It makes the state update execute faster than using a direct value', 'It ensures you are working with the latest state value', 'It is required by React — direct values cause a runtime error', 'It prevents the component from triggering any unnecessary re-renders'],
      correctAnswer: 1,
      explanation:
        'The functional updater ensures you use the most recent state value, which is important when multiple updates are batched or when the update depends on the previous state.',
    },
    {
      id: 'mod2-q3',
      question: 'What is a controlled component?',
      options: [
        'A component that controls other components',
        'A component without side effects',
        'A component wrapped in React.memo',
        'A form element whose value is driven by React state',
      ],
      correctAnswer: 3,
      explanation:
        'A controlled component is a form element (input, select, textarea) whose value is set by React state and updated via onChange. React is the "single source of truth."',
    },
    {
      id: 'mod2-q4',
      question: 'How do you prevent a form from reloading the page on submit?',
      options: [
        'Use type="button" on the submit button',
        'Call e.preventDefault() in the onSubmit handler',
        'Use return false in the handler',
        'Remove the action attribute',
      ],
      correctAnswer: 1,
      explanation:
        'Calling e.preventDefault() on the submit event prevents the browser\'s default form submission behavior, which would reload the page.',
    },
    {
      id: 'mod2-q5',
      question: 'How do you handle multiple form inputs with a single onChange handler?',
      options: ['Create a separate ref for each input and read values from the DOM directly', 'Declare separate state variables and individual handlers for each form field', 'Use a state object and computed property names: [e.target.name]: e.target.value', 'You cannot — each input must always have its own dedicated change handler function'],
      correctAnswer: 2,
      explanation:
        'By giving each input a name attribute and using computed property names [name]: value, a single handler can update the correct field in a state object.',
    },
  ],
};
