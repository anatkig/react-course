import type { QuizQuestion } from '../types';

export const finalTest: QuizQuestion[] = [
  {
    id: 'ft-1',
    question: 'What is the primary benefit of the virtual DOM?',
    options: ['It minimizes direct DOM manipulations by batching and diffing updates', 'It replaces the need for HTML by providing its own markup language', 'It makes JavaScript execution faster by compiling it to native code', 'It eliminates the need for CSS by handling all styling automatically'],
    correctAnswer: 0,
    explanation:
      'The virtual DOM is a lightweight copy of the real DOM. React diffs changes against it and applies only the minimal set of updates to the real DOM, improving performance.',
  },
  {
    id: 'ft-2',
    question: 'Which hook should you use to run code after every render?',
    options: ['useState with an initial value', 'useEffect without a dependency array', 'useRef with a DOM element attached', 'useMemo with empty dependencies'],
    correctAnswer: 1,
    explanation:
      'useEffect without a dependency array runs after every render. Adding [] makes it run only on mount; adding [deps] makes it run when those deps change.',
  },
  {
    id: 'ft-3',
    question: 'How do you prevent a child component from re-rendering when the parent re-renders?',
    options: ['Wrap the child with React.memo and memoize its props', 'Use useState in the child to track whether it should re-render', 'Use useEffect in the child component to skip redundant render cycles', 'Move the child component definition outside the parent function body'],
    correctAnswer: 0,
    explanation:
      'React.memo wraps a component to skip re-rendering when its props haven\'t changed (shallow comparison). Combined with useMemo/useCallback for props, this prevents unnecessary re-renders.',
  },
  {
    id: 'ft-4',
    question: 'What is the difference between useEffect and useLayoutEffect?',
    options: ['They are functionally identical and can always be used interchangeably in every case', 'useLayoutEffect runs synchronously after DOM mutations but before paint; useEffect runs asynchronously after paint', 'useLayoutEffect is the original hook designed only for class component migration patterns', 'useEffect fires before the render phase completes, while useLayoutEffect fires after reconciliation finishes'],
    correctAnswer: 1,
    explanation:
      'useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. useEffect fires asynchronously after paint. Use useLayoutEffect for DOM measurements.',
  },
  {
    id: 'ft-5',
    question: 'What happens when you call setState inside useEffect without proper dependencies?',
    options: ['It can cause an infinite re-render loop', 'Nothing special happens — React handles it automatically', 'React silently ignores the state update and does not re-render', 'The state updates are queued and applied in the next browser session'],
    correctAnswer: 0,
    explanation:
      'If useEffect updates state that is in its own dependency array (or has no dependency array), it triggers a re-render, which runs the effect again, causing an infinite loop.',
  },
  {
    id: 'ft-6',
    question: 'In React Router v6, how do you create a layout that wraps multiple routes?',
    options: ['Use a Higher-Order Component wrapper on each individual route component', 'Wrap each Route declaration inside a div element with a shared CSS class', 'Use a layout Route without a path that renders an Outlet', 'Use Redux global state management to synchronize all layout rendering'],
    correctAnswer: 2,
    explanation:
      'A layout route (Route without a path or with a parent path) renders a layout component containing an <Outlet />, where matched child routes are displayed.',
  },
  {
    id: 'ft-7',
    question: 'What is the purpose of the key prop in React?',
    options: ['Applying inline CSS styling properties to elements rendered inside a list', 'Authenticating API requests by attaching a token to each list element', 'Helping React track which elements changed in a list for efficient reconciliation', 'Encrypting data attributes on list elements for security and privacy purposes'],
    correctAnswer: 2,
    explanation:
      'Keys help React\'s reconciliation algorithm identify which items in a list have changed, been added, or removed. They should be stable and unique among siblings.',
  },
  {
    id: 'ft-8',
    question: 'When should you use useReducer over useState?',
    options: ['For managing any piece of state at all, since it is always better than useState', 'Only in class components because functional components do not support reducers', 'When state logic is complex, has multiple sub-values, or next state depends on previous state', 'Only when state is a simple boolean value that toggles between true and false'],
    correctAnswer: 2,
    explanation:
      'useReducer excels with complex state: multiple related values, actions with different update patterns, and when the next state depends on the previous one in non-trivial ways.',
  },
  {
    id: 'ft-9',
    question: 'What is the compound component pattern?',
    options: ['Using multiple useState hooks to manage separate pieces of related component state', 'Components that share implicit state via context while letting consumers control composition', 'Deeply nesting div elements to create complex multi-level layout structures', 'Applying TypeScript generics to enforce strict type safety across components'],
    correctAnswer: 1,
    explanation:
      'Compound components work together by sharing internal state via context. The consumer controls how they\'re composed (e.g., Tabs + Tab + Panel), while logic is encapsulated.',
  },
  {
    id: 'ft-10',
    question: 'What is the correct order of operations in a React component lifecycle?',
    options: ['Render → Browser paint → Effect → (on next update: Cleanup → Render → Paint → Effect)', 'Effect runs first → Component renders → Cleanup executes after the render completes', 'Cleanup runs first → Component renders → Effect fires after the render is committed', 'Effect fires immediately → Cleanup runs → Component renders the updated output'],
    correctAnswer: 0,
    explanation:
      'React renders, the browser paints, then effects run. On updates, React runs cleanup from the previous effect, renders, paints, then runs the new effect.',
  },
  {
    id: 'ft-11',
    question: 'What does React.lazy() do?',
    options: ['Delays the rendering of a component until the browser\'s next idle frame period', 'Creates a temporary placeholder component that displays while data is fetching', 'Memoizes a component and prevents it from re-rendering when its props change', 'Loads a component dynamically (on demand) via code splitting'],
    correctAnswer: 3,
    explanation:
      'React.lazy() enables code splitting by loading a component only when it\'s first rendered. It takes a function that returns a dynamic import() and must be used with Suspense.',
  },
  {
    id: 'ft-12',
    question: 'How do you share logic between components without changing the component hierarchy?',
    options: [
      'Copy-paste the code',
      'Use inheritance',
      'Create a custom hook',
      'Use global variables',
    ],
    correctAnswer: 2,
    explanation:
      'Custom hooks extract and share stateful logic between components. They don\'t affect the component tree structure and can be composed together.',
  },
  {
    id: 'ft-13',
    question: 'What is prop drilling and how do you solve it?',
    options: ['Drilling into DOM elements manually from parent to child; use CSS selectors instead', 'Passing props through many intermediate components that don\'t use them; use Context API', 'Adding too many props to one component interface and overloading it; use fewer props', 'A performance optimization technique for reducing re-renders; use React.memo exclusively'],
    correctAnswer: 1,
    explanation:
      'Prop drilling occurs when props are passed through multiple component levels just to reach a deeply nested child. Context API or state management libraries solve this.',
  },
  {
    id: 'ft-14',
    question: 'Why should you never mutate state directly in React?',
    options: ['It causes a syntax error during the component\'s next render cycle', 'It causes security vulnerabilities by exposing internal state references', 'It\'s perfectly fine — you can mutate state directly without any issues', 'React won\'t detect the change and the UI won\'t update'],
    correctAnswer: 3,
    explanation:
      'React uses reference comparison to detect state changes. If you mutate an object/array in place, the reference stays the same and React won\'t know to re-render.',
  },
  {
    id: 'ft-15',
    question: 'What is the best place to apply code splitting in a React application?',
    options: ['Every single component should be individually code-split for best performance', 'Inside useEffect hooks to defer loading of expensive side-effect dependencies', 'Only the root component of the application should be wrapped in a lazy boundary', 'Route boundaries — loading each page on demand'],
    correctAnswer: 3,
    explanation:
      'Route-based code splitting is the most impactful and natural place to split your code. Each page is loaded only when the user navigates to it.',
  },
  // --- Module 9: Security ---
  {
    id: 'ft-16',
    question: 'Which React feature provides built-in XSS protection?',
    options: ['React.memo prevents injection by memoizing component output', 'JSX automatically escapes embedded values before rendering to the DOM', 'useEffect sanitizes all state values before they reach the browser', 'React Router validates all URL parameters against an allowlist'],
    correctAnswer: 1,
    explanation:
      'React\'s JSX automatically escapes embedded expressions, converting special characters to HTML entities and preventing XSS injection by default.',
  },
  {
    id: 'ft-17',
    question: 'Why should you avoid storing JWT tokens in localStorage?',
    options: ['localStorage has a strict 1KB size limit that tokens may exceed', 'localStorage is accessible via JavaScript, making tokens vulnerable to XSS attacks', 'localStorage data is sent with every HTTP request adding unnecessary bandwidth', 'localStorage is not supported in modern browsers for security reasons'],
    correctAnswer: 1,
    explanation:
      'localStorage is accessible to any JavaScript on the page. If an XSS vulnerability exists, attackers can steal tokens. httpOnly cookies are safer.',
  },
  // --- Module 10: React Tricks ---
  {
    id: 'ft-18',
    question: 'How can you force React to fully reset a component\'s state?',
    options: ['Call setState(undefined) to clear all state back to initial values', 'Use useEffect with an empty dependency array to reset on mount', 'Change the component\'s key prop to a different value', 'Call forceUpdate() to trigger a complete state reset'],
    correctAnswer: 2,
    explanation:
      'Changing a component\'s key makes React treat it as a new element — it unmounts the old instance and mounts a fresh one with initial state.',
  },
  // --- Module 11: React Traps ---
  {
    id: 'ft-19',
    question: 'What causes a stale closure bug in React?',
    options: ['Using async/await inside a useEffect callback function', 'A callback captures a variable from a previous render and never sees the update', 'Declaring multiple useState hooks in the same component', 'Passing a function as a prop to a child component'],
    correctAnswer: 1,
    explanation:
      'Stale closures happen when a function captures a variable from a previous render. The function continues to see the old value even after state updates.',
  },
  {
    id: 'ft-20',
    question: 'Which pattern avoids stale closure issues when using setState?',
    options: ['Always destructure state at the top of the component', 'Use the functional updater form: setState(prev => prev + 1)', 'Wrap the state update in a setTimeout to ensure freshness', 'Store the value in localStorage and read it back each time'],
    correctAnswer: 1,
    explanation:
      'The functional updater receives the latest state value as its argument, avoiding dependency on a potentially stale closure variable.',
  },
  // --- Module 12: Custom Hooks ---
  {
    id: 'ft-21',
    question: 'What is the key benefit of extracting logic into custom hooks?',
    options: ['Custom hooks share the same state instance across all calling components', 'They allow reusing stateful logic without duplicating code or changing component hierarchy', 'They automatically optimize performance by memoizing all return values', 'They bypass the rules of hooks, allowing conditional hook calls inside them'],
    correctAnswer: 1,
    explanation:
      'Custom hooks encapsulate reusable stateful logic. Each component calling the hook gets its own independent copy of the state.',
  },
  // --- Module 13: TypeScript ---
  {
    id: 'ft-22',
    question: 'What is React.ReactNode used for in TypeScript?',
    options: ['Typing the return value of a DOM query selector function', 'Representing any renderable content: elements, strings, numbers, null, fragments', 'Defining the shape of context values passed through the component tree', 'Typing CSS module imports to ensure class names are valid strings'],
    correctAnswer: 1,
    explanation:
      'React.ReactNode is the broadest type for renderable content — it includes JSX elements, strings, numbers, booleans, null, undefined, and fragments.',
  },
  {
    id: 'ft-23',
    question: 'How do you correctly type a component that accepts an onChange handler for an input?',
    options: ['onChange: (value: string) => void', 'onChange: React.ChangeEvent<HTMLInputElement>', 'onChange: (e: React.ChangeEvent<HTMLInputElement>) => void', 'onChange: EventHandler'],
    correctAnswer: 2,
    explanation:
      'The onChange prop should be typed as a function that receives a React.ChangeEvent<HTMLInputElement> parameter.',
  },
  // --- Module 14: Forms ---
  {
    id: 'ft-24',
    question: 'What is the best approach for validating complex forms in React?',
    options: ['Use alert() to show validation errors after form submission', 'Validate only on the server and disable the submit button until response', 'Use a schema validation library (e.g., Zod) combined with real-time field validation', 'Check each field individually with nested if-else statements in the submit handler'],
    correctAnswer: 2,
    explanation:
      'Schema validation libraries provide declarative, reusable, and composable validation rules with TypeScript type inference.',
  },
  // --- Module 15: API Integration ---
  {
    id: 'ft-25',
    question: 'What is an optimistic update and when should you use it?',
    options: ['Updating the cache before making the request — never recommended in production', 'Showing a loading spinner optimized for fast connections', 'Updating the UI immediately and rolling back on failure — for perceived responsiveness', 'Pre-fetching all possible API responses on application startup'],
    correctAnswer: 2,
    explanation:
      'Optimistic updates immediately reflect changes in the UI before server confirmation, improving perceived responsiveness. They roll back if the server rejects the change.',
  },
  // --- Module 16: Testing ---
  {
    id: 'ft-26',
    question: 'What is the core philosophy of React Testing Library?',
    options: ['Test implementation details like state values and lifecycle methods', 'Test components the way users interact with them — by accessible roles and text', 'Maximize code coverage by testing every internal function individually', 'Snapshot test every component to detect any visual change automatically'],
    correctAnswer: 1,
    explanation:
      'React Testing Library focuses on testing behavior from the user\'s perspective — querying by role, text, and label rather than implementation details.',
  },
  {
    id: 'ft-27',
    question: 'Why should you avoid testing implementation details?',
    options: ['Implementation detail tests are slower than behavioral tests', 'They create fragile tests that break on refactors even when behavior is unchanged', 'The testing library does not support querying internal state', 'Implementation details are automatically tested by the TypeScript compiler'],
    correctAnswer: 1,
    explanation:
      'Testing implementation details (state values, internal methods) creates brittle tests that break on refactoring without actual behavior changes.',
  },
  // --- Module 17: Accessibility ---
  {
    id: 'ft-28',
    question: 'Why should you prefer <button> over <div onClick={...}> for clickable elements?',
    options: ['Buttons render faster than divs with click handlers attached', 'Buttons have built-in keyboard accessibility, focus management, and semantic role', 'Divs cannot receive onClick handlers according to the HTML specification', 'There is no difference — they are functionally and semantically identical'],
    correctAnswer: 1,
    explanation:
      'Native <button> elements are keyboard accessible (Enter/Space), focusable, and have an implicit role. A div with onClick lacks all of these by default.',
  },
  {
    id: 'ft-29',
    question: 'What should you use to label a form input for screen readers?',
    options: ['A placeholder attribute is sufficient for screen reader accessibility', 'A <label> element with htmlFor matching the input\'s id, or aria-label', 'A <span> element placed visually next to the input field', 'A title attribute on the input element provides full accessibility'],
    correctAnswer: 1,
    explanation:
      'A <label> with htmlFor (or wrapping the input) provides an accessible name. aria-label or aria-labelledby are alternatives when a visible label isn\'t possible.',
  },
  // --- Module 18: Ecosystem & Tooling ---
  {
    id: 'ft-30',
    question: 'What is the main benefit of using ESLint in a React project?',
    options: ['It bundles JavaScript files for production deployment', 'It automatically formats code with consistent spacing and indentation', 'It catches potential bugs, enforces coding standards, and prevents anti-patterns', 'It compiles TypeScript to JavaScript before the build step'],
    correctAnswer: 2,
    explanation:
      'ESLint statically analyzes code to find problems, enforce consistent style, and prevent common React anti-patterns like missing hook dependencies.',
  },
];
