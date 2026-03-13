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
];
