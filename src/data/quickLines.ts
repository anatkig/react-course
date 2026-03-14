export interface QuickLineChallenge {
  id: string;
  /** Short description of what to do */
  prompt: string;
  /** Lines of code shown above the blank line */
  codeBefore: string[];
  /** Lines of code shown below the blank line */
  codeAfter: string[];
  /** The exact expected answer (trimmed for comparison) */
  answer: string;
  /** Hint shown on request */
  hint: string;
}

export const quickLineChallenges: QuickLineChallenge[] = [
  // --- React Basics ---
  {
    id: 'ql-1',
    prompt: 'Destructure the "name" and "age" props in the function parameter.',
    codeBefore: [],
    codeAfter: [
      '  return <p>{name} is {age} years old</p>;',
      '}',
    ],
    answer: 'function UserInfo({ name, age }) {',
    hint: 'Destructure props directly in the parameter list: { prop1, prop2 }',
  },
  {
    id: 'ql-2',
    prompt: 'Render the items array as a list. Fill in the map line with key and content.',
    codeBefore: [
      'function ItemList({ items }) {',
      '  return (',
      '    <ul>',
    ],
    codeAfter: [
      '    </ul>',
      '  );',
      '}',
    ],
    answer: '{items.map(item => <li key={item.id}>{item.name}</li>)}',
    hint: 'Use items.map() and don\'t forget the key prop.',
  },
  {
    id: 'ql-3',
    prompt: 'Initialize a state variable "count" with value 0.',
    codeBefore: [
      'function Counter() {',
    ],
    codeAfter: [
      '  return <button onClick={() => setCount(count + 1)}>{count}</button>;',
      '}',
    ],
    answer: 'const [count, setCount] = useState(0);',
    hint: 'Use array destructuring with useState(initialValue).',
  },
  {
    id: 'ql-4',
    prompt: 'Add the correct dependency array so this effect runs only when userId changes.',
    codeBefore: [
      'useEffect(() => {',
      '  fetchUser(userId);',
    ],
    codeAfter: [],
    answer: '}, [userId]);',
    hint: 'The dependency array comes after the callback, inside useEffect().',
  },
  {
    id: 'ql-5',
    prompt: 'Conditionally render <AdminPanel /> only if user.isAdmin is true.',
    codeBefore: [
      'function Dashboard({ user }) {',
      '  return (',
      '    <div>',
      '      <h1>Welcome</h1>',
    ],
    codeAfter: [
      '    </div>',
      '  );',
      '}',
    ],
    answer: '{user.isAdmin && <AdminPanel />}',
    hint: 'Use the logical AND (&&) pattern for conditional rendering.',
  },
  // --- Hooks ---
  {
    id: 'ql-6',
    prompt: 'Create a ref to store a DOM element reference.',
    codeBefore: [
      'function TextInput() {',
    ],
    codeAfter: [
      '  return <input ref={inputRef} />;',
      '}',
    ],
    answer: 'const inputRef = useRef(null);',
    hint: 'useRef(null) creates a mutable ref object with a .current property.',
  },
  {
    id: 'ql-7',
    prompt: 'Memoize the filtered array so it only recalculates when items or query changes.',
    codeBefore: [
      'function SearchList({ items, query }) {',
    ],
    codeAfter: [
      '  return <ul>{filtered.map(i => <li key={i.id}>{i.name}</li>)}</ul>;',
      '}',
    ],
    answer: 'const filtered = useMemo(() => items.filter(i => i.name.includes(query)), [items, query]);',
    hint: 'useMemo(() => computation, [deps]) caches the result.',
  },
  {
    id: 'ql-8',
    prompt: 'Wrap the handleClick function with useCallback so it only changes when count changes.',
    codeBefore: [
      'function Button({ count }) {',
    ],
    codeAfter: [
      '  return <button onClick={handleClick}>Clicked {count}</button>;',
      '}',
    ],
    answer: 'const handleClick = useCallback(() => console.log(count), [count]);',
    hint: 'useCallback(fn, [deps]) memoizes the function reference.',
  },
  // --- State Patterns ---
  {
    id: 'ql-9',
    prompt: 'Use functional update to increment count without stale closure.',
    codeBefore: [
      'const increment = () => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setCount(prev => prev + 1);',
    hint: 'Pass a function to setState: setState(previousValue => newValue).',
  },
  {
    id: 'ql-10',
    prompt: 'Create a new array with the item added without mutating the original.',
    codeBefore: [
      'const addItem = (item) => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setItems(prev => [...prev, item]);',
    hint: 'Use spread operator: [...existingArray, newItem].',
  },
  {
    id: 'ql-11',
    prompt: 'Remove the item with the given id immutably.',
    codeBefore: [
      'const removeItem = (id) => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setItems(prev => prev.filter(item => item.id !== id));',
    hint: 'filter() returns a new array without the matching item.',
  },
  {
    id: 'ql-12',
    prompt: 'Update the name property of a user object immutably.',
    codeBefore: [
      'const updateName = (newName) => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setUser(prev => ({ ...prev, name: newName }));',
    hint: 'Spread the previous object and override the property: { ...prev, key: value }.',
  },
  // --- JSX & Components ---
  {
    id: 'ql-13',
    prompt: 'Use a ternary to show either <LoggedIn /> or <LoggedOut /> based on isAuth.',
    codeBefore: [
      'function App({ isAuth }) {',
      '  return (',
      '    <div>',
    ],
    codeAfter: [
      '    </div>',
      '  );',
      '}',
    ],
    answer: '{isAuth ? <LoggedIn /> : <LoggedOut />}',
    hint: 'Ternary in JSX: {condition ? <A /> : <B />}.',
  },
  {
    id: 'ql-14',
    prompt: 'Spread all remaining props onto the inner input element.',
    codeBefore: [
      'function TextInput({ label, ...rest }) {',
      '  return (',
      '    <div>',
      '      <label>{label}</label>',
    ],
    codeAfter: [
      '    </div>',
      '  );',
      '}',
    ],
    answer: '<input {...rest} />',
    hint: 'Use the spread operator on JSX: <element {...objectOfProps} />.',
  },
  // --- useEffect patterns ---
  {
    id: 'ql-15',
    prompt: 'Return a cleanup function that clears the interval.',
    codeBefore: [
      'useEffect(() => {',
      '  const id = setInterval(() => tick(), 1000);',
    ],
    codeAfter: [
      '}, []);',
    ],
    answer: 'return () => clearInterval(id);',
    hint: 'Return a function from useEffect for cleanup.',
  },
  {
    id: 'ql-16',
    prompt: 'Add an event listener on mount and remove it on cleanup.',
    codeBefore: [
      'useEffect(() => {',
      '  window.addEventListener("resize", handleResize);',
    ],
    codeAfter: [
      '}, []);',
    ],
    answer: 'return () => window.removeEventListener("resize", handleResize);',
    hint: 'Clean up by removing the same event listener in the return function.',
  },
  // --- TypeScript ---
  {
    id: 'ql-17',
    prompt: 'Type the useState to hold either a User object or null.',
    codeBefore: [
      'interface User { id: number; name: string; }',
      'function Profile() {',
    ],
    codeAfter: [
      '  // ...',
      '}',
    ],
    answer: 'const [user, setUser] = useState<User | null>(null);',
    hint: 'Provide the generic type: useState<Type>(initialValue).',
  },
  {
    id: 'ql-18',
    prompt: 'Define the type for an onClick handler prop.',
    codeBefore: [
      'interface ButtonProps {',
      '  label: string;',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'onClick: () => void;',
    hint: 'A function that takes no args and returns nothing: () => void.',
  },
  // --- Context ---
  {
    id: 'ql-19',
    prompt: 'Consume the ThemeContext to get the current theme.',
    codeBefore: [
      'function Header() {',
    ],
    codeAfter: [
      '  return <h1 className={theme}>Title</h1>;',
      '}',
    ],
    answer: 'const theme = useContext(ThemeContext);',
    hint: 'useContext(ContextObject) returns the current context value.',
  },
  // --- Array methods ---
  {
    id: 'ql-20',
    prompt: 'Sort a copy of the array alphabetically by name without mutating the original.',
    codeBefore: [
      'const sortByName = (items) => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'return [...items].sort((a, b) => a.name.localeCompare(b.name));',
    hint: 'Copy first with [...arr] since sort() mutates in place.',
  },
  // --- Event handling ---
  {
    id: 'ql-21',
    prompt: 'Prevent the default form submission behavior.',
    codeBefore: [
      'const handleSubmit = (e) => {',
    ],
    codeAfter: [
      '  // submit logic',
      '};',
    ],
    answer: 'e.preventDefault();',
    hint: 'Call preventDefault() on the event object.',
  },
  // --- Routing ---
  {
    id: 'ql-22',
    prompt: 'Get the "id" parameter from the URL using React Router.',
    codeBefore: [
      'function ProductPage() {',
    ],
    codeAfter: [
      '  return <h1>Product {id}</h1>;',
      '}',
    ],
    answer: 'const { id } = useParams();',
    hint: 'useParams() returns an object of URL parameters.',
  },
  {
    id: 'ql-23',
    prompt: 'Navigate programmatically to the /dashboard route.',
    codeBefore: [
      'function LoginPage() {',
      '  const navigate = useNavigate();',
      '  const handleLogin = () => {',
      '    // after successful login...',
    ],
    codeAfter: [
      '  };',
      '}',
    ],
    answer: 'navigate("/dashboard");',
    hint: 'Call the navigate function with the target path.',
  },
  // --- Misc patterns ---
  {
    id: 'ql-24',
    prompt: 'Lazy-load the Settings component for code splitting.',
    codeBefore: [
      'import { lazy } from "react";',
    ],
    codeAfter: [
      '',
      '// used inside <Suspense>',
    ],
    answer: 'const Settings = lazy(() => import("./Settings"));',
    hint: 'lazy() takes a function that returns a dynamic import().',
  },
  {
    id: 'ql-25',
    prompt: 'Provide a fallback UI while the lazy component loads.',
    codeBefore: [],
    codeAfter: [
      '  <LazyComponent />',
      '</Suspense>',
    ],
    answer: '<Suspense fallback={<p>Loading...</p>}>',
    hint: 'Suspense takes a fallback prop with JSX to show while loading.',
  },
  {
    id: 'ql-26',
    prompt: 'Create a portal that renders children into document.body.',
    codeBefore: [
      'function Overlay({ children }) {',
      '  return (',
    ],
    codeAfter: [
      '  );',
      '}',
    ],
    answer: 'createPortal(children, document.body)',
    hint: 'createPortal(element, container) from "react-dom".',
  },
  {
    id: 'ql-27',
    prompt: 'Set the document title when the component mounts.',
    codeBefore: [
      'function Page({ title }) {',
    ],
    codeAfter: [
      '  return <div>{title}</div>;',
      '}',
    ],
    answer: 'useEffect(() => { document.title = title; }, [title]);',
    hint: 'Use useEffect with title as a dependency.',
  },
  {
    id: 'ql-28',
    prompt: 'Debounce: set a timeout that clears the previous one on each value change.',
    codeBefore: [
      'useEffect(() => {',
      '  const timer = setTimeout(() => setDebounced(value), 300);',
    ],
    codeAfter: [
      '}, [value]);',
    ],
    answer: 'return () => clearTimeout(timer);',
    hint: 'Return a cleanup function that calls clearTimeout.',
  },
  {
    id: 'ql-29',
    prompt: 'Stop the click event from bubbling up to parent elements.',
    codeBefore: [
      '<div className="modal-content" onClick={',
    ],
    codeAfter: [
      '}>',
    ],
    answer: 'e => e.stopPropagation()',
    hint: 'Call stopPropagation() on the event to prevent bubbling.',
  },
  {
    id: 'ql-30',
    prompt: 'Derive the total price from a cart array during render (don\'t use state).',
    codeBefore: [
      'function Cart({ items }) {',
    ],
    codeAfter: [
      '  return <p>Total: ${total}</p>;',
      '}',
    ],
    answer: 'const total = items.reduce((sum, item) => sum + item.price, 0);',
    hint: 'Use reduce() to sum up values. Don\'t store derived data in state.',
  },
];
