import type { Module } from '../types';

export const module7: Module = {
  id: 'mod-7',
  title: 'Advanced Component Patterns',
  description:
    'Explore higher-order components, render props, compound components, and other advanced composition patterns.',
  topics: [
    {
      id: 'mod7-t1',
      title: 'Higher-Order Components (HOC)',
      explanation: `## Higher-Order Components

A HOC is a **function that takes a component and returns a new enhanced component**.

\`\`\`jsx
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);

<UserListWithLoading isLoading={loading} users={users} />
\`\`\`

### Common HOC Patterns

**Authentication wrapper:**
\`\`\`jsx
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;
    return <WrappedComponent {...props} user={user} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
\`\`\`

**Data fetching wrapper:**
\`\`\`jsx
function withData(WrappedComponent, url) {
  return function DataComponent(props) {
    const { data, loading, error } = useFetch(url);
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <WrappedComponent {...props} data={data} />;
  };
}
\`\`\`

### HOC Conventions

1. Don't mutate the original component — use composition.
2. Pass through unrelated props with \`...props\`.
3. Name the wrapper for better debugging: \`WithLoading(UserList)\`.
4. Don't use HOCs inside render — define them outside the component.

> **Note:** Custom hooks are often preferred over HOCs in modern React as they are simpler and more composable.`,
      task: {
        description:
          'Create a `withTooltip` HOC that wraps any component and adds tooltip functionality. When the user hovers over the wrapped component, a tooltip appears showing a `tooltip` prop. Apply it to a simple Button component.',
        starterCode: `import { useState } from 'react';

// TODO: Create withTooltip HOC
// TODO: Create a simple Button component
// TODO: Create EnhancedButton = withTooltip(Button)`,
        solution: `import { useState } from 'react';

function withTooltip(WrappedComponent) {
  return function WithTooltipComponent({ tooltip, ...props }) {
    const [show, setShow] = useState(false);

    return (
      <div
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <WrappedComponent {...props} />
        {show && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 8px',
            background: '#333',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
          }}>
            {tooltip}
          </div>
        )}
      </div>
    );
  };
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

const EnhancedButton = withTooltip(Button);

// Usage: <EnhancedButton label="Save" tooltip="Save your changes" onClick={handleSave} />`,
        hints: [
          'The HOC should separate the tooltip prop from the rest and pass remaining props to WrappedComponent',
          'Use onMouseEnter/onMouseLeave to toggle tooltip visibility',
          'Position the tooltip absolutely relative to a container div',
        ],
      },
    },
    {
      id: 'mod7-t2',
      title: 'Compound Components',
      explanation: `## Compound Components Pattern

Compound components are a set of components that work together to form a complete UI element, sharing implicit state.

### Example: Accordion

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, children }) {
  return <div className="accordion-item">{children}</div>;
}

function AccordionHeader({ index, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <button
      className="accordion-header"
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      {children} {isOpen ? '▲' : '▼'}
    </button>
  );
}

function AccordionPanel({ index, children }) {
  const { openIndex } = useContext(AccordionContext);
  if (openIndex !== index) return null;
  return <div className="accordion-panel">{children}</div>;
}

// Attach sub-components
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;
\`\`\`

### Usage

\`\`\`jsx
<Accordion>
  <Accordion.Item index={0}>
    <Accordion.Header index={0}>Section 1</Accordion.Header>
    <Accordion.Panel index={0}>Content 1</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item index={1}>
    <Accordion.Header index={1}>Section 2</Accordion.Header>
    <Accordion.Panel index={1}>Content 2</Accordion.Panel>
  </Accordion.Item>
</Accordion>
\`\`\`

### Benefits

- **Flexible API** — users control layout and composition.
- **Encapsulated state** — shared via context, hidden from the consumer.
- **Dot notation** — \`Accordion.Item\` clearly signals the relationship.`,
      task: {
        description:
          'Create a `Tabs` compound component with `Tabs.Tab` and `Tabs.Panel` sub-components. Clicking a tab shows its corresponding panel. Use context to share the active tab index.',
        starterCode: `import { createContext, useContext, useState } from 'react';

// TODO: Create Tabs, Tabs.Tab, Tabs.Panel
// TODO: Share active tab state via context`,
        solution: `import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div className="tab-list" role="tablist">{children}</div>;
}

function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  return (
    <button
      role="tab"
      className={activeIndex === index ? 'tab active' : 'tab'}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

function Panel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  if (activeIndex !== index) return null;
  return <div className="tab-panel" role="tabpanel">{children}</div>;
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

// Usage:
// <Tabs>
//   <Tabs.TabList>
//     <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
//     <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
//   </Tabs.TabList>
//   <Tabs.Panel index={0}>Content 1</Tabs.Panel>
//   <Tabs.Panel index={1}>Content 2</Tabs.Panel>
// </Tabs>`,
        hints: [
          'Create a context to hold the active index and setter',
          'Tab buttons call setActiveIndex onClick',
          'Panel only renders children when its index matches activeIndex',
        ],
      },
    },
    {
      id: 'mod7-t3',
      title: 'Render Props & Function as Children',
      explanation: `## Render Props Pattern

A component receives a **function as a prop** (or as children) and calls it to determine what to render.

\`\`\`jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return render(position);
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse is at ({x}, {y})</p>
)} />
\`\`\`

### Function as Children

The same pattern using the \`children\` prop:

\`\`\`jsx
function DataFetcher({ url, children }) {
  const { data, loading, error } = useFetch(url);

  return children({ data, loading, error });
}

// Usage
<DataFetcher url="/api/users">
  {({ data, loading, error }) => {
    if (loading) return <Spinner />;
    if (error) return <Error message={error} />;
    return <UserList users={data} />;
  }}
</DataFetcher>
\`\`\`

### When to Use

- When you need to **share behavior** while letting the consumer control the rendering.
- When a custom hook isn't sufficient (e.g., you need to wrap DOM elements).

> **Modern alternative:** Custom hooks often replace render props for logic sharing. Render props are still useful when you need to control what renders around the shared element.`,
      task: {
        description:
          'Create a `WindowSize` render prop component that tracks window dimensions and passes them to its children function. Use it to build a responsive layout that shows "Mobile" at <768px, "Tablet" at <1024px, and "Desktop" above.',
        starterCode: `import { useState, useEffect } from 'react';

// TODO: WindowSize render prop component
// TODO: ResponsiveLabel component using WindowSize`,
        solution: `import { useState, useEffect } from 'react';

function WindowSize({ children }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return children(size);
}

function ResponsiveLabel() {
  return (
    <WindowSize>
      {({ width }) => {
        let label = 'Desktop';
        if (width < 768) label = 'Mobile';
        else if (width < 1024) label = 'Tablet';
        return <p>Current layout: {label} ({width}px)</p>;
      }}
    </WindowSize>
  );
}`,
        hints: [
          'The component calls props.children as a function, passing the data',
          'children(size) invokes the function-as-children pattern',
          'Use window.innerWidth and a resize event listener',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod7-q1',
      question: 'What is a Higher-Order Component (HOC)?',
      options: ['A function that takes a component and returns a new enhanced component', 'A component that is rendered at a higher position in the DOM element tree', 'A component that has more than ten props defined in its interface contract', 'A component that utilizes every available React hook in its implementation'],
      correctAnswer: 0,
      explanation:
        'A HOC is a function that accepts a component and returns a new component with additional behavior or props. It\'s a form of component composition.',
    },
    {
      id: 'mod7-q2',
      question: 'What makes the compound component pattern special?',
      options: ['It relies exclusively on class components and lifecycle method overrides', 'Components share implicit state via context while giving consumers control over composition', 'It uses memoization exclusively to prevent all unnecessary child re-renders', 'It requires TypeScript to enforce strict type contracts between compound members'],
      correctAnswer: 1,
      explanation:
        'Compound components share state implicitly via context. The consumer controls the layout and composition while the components handle logic and state internally.',
    },
    {
      id: 'mod7-q3',
      question: 'What is the render props pattern?',
      options: ['Using the render() lifecycle method inherited from the React.Component base class', 'Serializing all component props as plain text strings before passing them down', 'A component that receives a function prop to determine what to render', 'A design pattern specifically created for server-side rendering of React components'],
      correctAnswer: 2,
      explanation:
        'Render props is a pattern where a component receives a function (often as children) and calls it with some data, letting the consumer decide what to render.',
    },
    {
      id: 'mod7-q4',
      question: 'In modern React, what often replaces HOCs and render props?',
      options: [
        'Class components',
        'Web Components',
        'Redux',
        'Custom hooks',
      ],
      correctAnswer: 3,
      explanation:
        'Custom hooks provide a simpler, more composable way to share stateful logic between components without the complexity of HOCs or render props.',
    },
    {
      id: 'mod7-q5',
      question: 'What does the dot notation Accordion.Item signify?',
      options: ['AccordionItem is a child class derived from the Accordion base component class', 'Item is a static property on the Accordion component, signaling they are designed to work together', 'It is prototypal inheritance that allows AccordionItem to extend Accordion behavior', 'It is a React Router pattern for defining nested routes within layout components'],
      correctAnswer: 1,
      explanation:
        'Dot notation (Accordion.Item) is a convention that communicates that Item is meant to be used within Accordion. The sub-component is assigned as a property of the parent component.',
    },
  ],
};
