import type { Module } from '../types';

export const module1: Module = {
  id: 'mod-1',
  title: 'React Fundamentals',
  description:
    'Learn the core building blocks of React: JSX syntax, components, props, and how React renders UI.',
  topics: [
    {
      id: 'mod1-t1',
      title: 'Introduction to JSX',
      explanation: `## What is JSX?

JSX stands for **JavaScript XML**. It is a syntax extension that lets you write HTML-like markup directly inside JavaScript files.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

### Key Rules of JSX

1. **Return a single root element** — wrap siblings in a \`<div>\` or \`<>\` (Fragment).
2. **Close all tags** — self-closing tags like \`<img />\` must include the slash.
3. **Use camelCase for attributes** — \`className\` instead of \`class\`, \`onClick\` instead of \`onclick\`.
4. **Embed expressions with curly braces** — \`{variable}\`, \`{2 + 2}\`, \`{fn()}\`.

\`\`\`jsx
function Greeting() {
  const name = "React";
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Welcome to the course.</p>
    </>
  );
}
\`\`\`

### JSX is compiled to JavaScript

Under the hood, JSX is transformed into \`React.createElement()\` calls:

\`\`\`js
// JSX
const el = <h1 className="title">Hello</h1>;

// Compiled
const el = React.createElement('h1', { className: 'title' }, 'Hello');
\`\`\``,
      tasks: [{
        description:
          'Create a component called `UserCard` that displays a user\'s name, email, and role using JSX. The component should accept these as props and wrap them in a `<div>` with the className "user-card".',
        starterCode: `function UserCard() {
  // TODO: Accept props for name, email, and role
  // Return a div with className "user-card" containing:
  // - an h2 with the name
  // - a p with the email
  // - a span with the role
  return null;
}`,
        solution: `function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}`,
        hints: [
          'Destructure props in the function parameter: { name, email, role }',
          'Use curly braces {} to embed JavaScript expressions in JSX',
          'Remember to use className instead of class',
        ],
      }],
    },
    {
      id: 'mod1-t2',
      title: 'Functional Components',
      explanation: `## Functional Components

A React component is a **JavaScript function** that returns JSX. Components let you split UI into independent, reusable pieces.

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}
\`\`\`

### Rules for Components

1. **Name must start with a capital letter** — \`Welcome\`, not \`welcome\`.
2. **Must return JSX** (or \`null\` to render nothing).
3. **Props are read-only** — never modify props directly.

### Composing Components

Components can render other components:

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
\`\`\`

### Arrow Function Syntax

You can also use arrow functions:

\`\`\`jsx
const Welcome = ({ name }) => <h1>Welcome, {name}!</h1>;
\`\`\`

### Default Props

Provide defaults using destructuring:

\`\`\`jsx
function Button({ label = "Click me", variant = "primary" }) {
  return <button className={variant}>{label}</button>;
}
\`\`\``,
      tasks: [{
        description:
          'Create a `ProductList` component that receives an array of products as a prop. Each product has a `name` and `price`. Render each product using a separate `ProductItem` component.',
        starterCode: `function ProductItem({ name, price }) {
  // TODO: render product name and price
  return null;
}

function ProductList({ products }) {
  // TODO: map over products and render ProductItem for each
  return null;
}`,
        solution: `function ProductItem({ name, price }) {
  return (
    <div className="product-item">
      <span>{name}</span>
      <strong>\${price.toFixed(2)}</strong>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}`,
        hints: [
          'Use Array.map() to transform the array into JSX elements',
          'Each mapped element needs a unique key prop',
          'Pass individual product properties as props to ProductItem',
        ],
      }],
    },
    {
      id: 'mod1-t3',
      title: 'Props & Data Flow',
      explanation: `## Props: Passing Data to Components

Props (short for "properties") are the way data flows **from parent to child** in React. This is called **one-way data flow** or **unidirectional data flow**.

\`\`\`jsx
// Parent passes data down
function App() {
  return <Profile name="Alice" age={30} isAdmin={true} />;
}

// Child receives via props
function Profile({ name, age, isAdmin }) {
  return (
    <div>
      <h2>{name}, {age}</h2>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}
\`\`\`

### Types of Props

| Type | Example |
|------|---------|
| String | \`<C title="Hello" />\` |
| Number | \`<C count={42} />\` |
| Boolean | \`<C active={true} />\` or \`<C active />\` |
| Array | \`<C items={[1, 2, 3]} />\` |
| Object | \`<C user={{ name: "A" }} />\` |
| Function | \`<C onClick={() => {}} />\` |
| JSX / Children | \`<C><span>child</span></C>\` |

### The \`children\` Prop

Content placed between opening and closing tags is available as \`props.children\`:

\`\`\`jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Usage
<Card title="Settings">
  <p>Some content here</p>
</Card>
\`\`\`

### Spreading Props

\`\`\`jsx
const btnProps = { type: "submit", disabled: false };
<button {...btnProps}>Submit</button>
\`\`\``,
      tasks: [{
        description:
          'Create a `Layout` component that uses the `children` prop to wrap content. It should render a header (with a `title` prop), the children in a main section, and a footer with a `copyright` prop.',
        starterCode: `function Layout({ title, copyright, children }) {
  // TODO: Render a header with title,
  // a <main> with children,
  // and a footer with copyright
  return null;
}`,
        solution: `function Layout({ title, copyright, children }) {
  return (
    <div className="layout">
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
}`,
        hints: [
          'children is a special prop — just render it like any other expression: {children}',
          'Wrap everything in a single root element',
          'Use semantic HTML tags: header, main, footer',
        ],
      }],
    },
    {
      id: 'mod1-t4',
      title: 'Rendering Lists & Conditional Rendering',
      explanation: `## Rendering Lists

Use \`Array.map()\` to turn data arrays into lists of elements. Always provide a unique \`key\` prop.

\`\`\`jsx
function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Choosing Good Keys

- Use **stable, unique IDs** from your data (e.g., database IDs).
- **Avoid using array index** as key when items can be reordered or deleted.
- Keys must be unique **among siblings**, not globally.

## Conditional Rendering

Several patterns for rendering content conditionally:

### 1. Logical AND (\`&&\`)
\`\`\`jsx
{isLoggedIn && <UserMenu />}
\`\`\`

### 2. Ternary Operator
\`\`\`jsx
{isLoggedIn ? <UserMenu /> : <LoginButton />}
\`\`\`

### 3. Early Return
\`\`\`jsx
function Dashboard({ user }) {
  if (!user) return <p>Please log in.</p>;
  return <h1>Welcome, {user.name}</h1>;
}
\`\`\`

### 4. Variable Assignment
\`\`\`jsx
function StatusBadge({ status }) {
  let color;
  if (status === 'active') color = 'green';
  else if (status === 'pending') color = 'yellow';
  else color = 'red';

  return <span style={{ color }}>{status}</span>;
}
\`\`\``,
      tasks: [{
        description:
          'Create a `TaskBoard` component that takes an array of tasks (each with `id`, `title`, `completed`). Render each task with a visual distinction for completed vs. incomplete tasks. Show a "No tasks" message if the array is empty.',
        starterCode: `function TaskBoard({ tasks }) {
  // TODO: Handle empty array case
  // TODO: Map over tasks and render them
  // TODO: Show different styling for completed tasks
  return null;
}`,
        solution: `function TaskBoard({ tasks }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks</p>;
  }

  return (
    <div className="task-board">
      {tasks.map(task => (
        <div
          key={task.id}
          className={task.completed ? 'task completed' : 'task'}
        >
          <span>{task.title}</span>
          {task.completed && <span className="check">✓</span>}
        </div>
      ))}
    </div>
  );
}`,
        hints: [
          'Use an early return for the empty array case',
          'Use a ternary for className to toggle styles',
          'Use && for conditionally showing elements',
        ],
      }],
    },
  ],
  test: [
    {
      id: 'mod1-q1',
      question: 'Which of the following is valid JSX?',
      options: [
        '<div className="box">Hello</div>',
        '<div class="box">Hello</div>',
        '<div className="box">Hello<div>',
        '<Div className="box">Hello</Div>',
      ],
      correctAnswer: 0,
      explanation:
        'JSX uses className instead of class (which is a reserved word in JS). All tags must be properly closed. Lowercase tag names are treated as HTML elements.',
    },
    {
      id: 'mod1-q2',
      question: 'What happens if you render a list without key props?',
      options: ['The application crashes and displays a React error boundary', 'React shows a warning and may have performance issues or bugs with reordering', 'Nothing — keys are purely optional and have no effect on list rendering', 'The list renders correctly but in the reverse order of the source array'],
      correctAnswer: 1,
      explanation:
        'React uses keys to track which items changed. Without them, React falls back to using index which can cause issues with reordering, and shows a console warning.',
    },
    {
      id: 'mod1-q3',
      question: 'How does data flow between components in React by default?',
      options: [
        'Bidirectionally between parent and child',
        'From child to parent via props',
        'From parent to child via props (one-way)',
        'Through a global store only',
      ],
      correctAnswer: 2,
      explanation:
        'React uses unidirectional (one-way) data flow. Data flows from parent to child via props. To communicate upward, parents pass callback functions as props.',
    },
    {
      id: 'mod1-q4',
      question: 'What is the children prop?',
      options: ['An array of child component class definitions registered with the parent', 'Content placed between the opening and closing tags of a component', 'A lifecycle method that runs before the component renders its children', 'A required prop that must be explicitly declared in every component interface'],
      correctAnswer: 1,
      explanation:
        'The children prop contains whatever JSX is placed between the opening and closing tags of a component. It allows components to act as wrappers.',
    },
    {
      id: 'mod1-q5',
      question: 'Which pattern is NOT a valid conditional rendering technique in React?',
      options: [
        '{condition && <Component />}',
        '{condition ? <A /> : <B />}',
        'if (condition) return <Component />;',
        '<if condition={true}><Component /></if>',
      ],
      correctAnswer: 3,
      explanation:
        'There is no <if> element in JSX. Conditional rendering uses JavaScript expressions like &&, ternary operators, or early returns.',
    },
  ],
};
