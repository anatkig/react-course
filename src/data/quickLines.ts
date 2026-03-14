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
  // --- Module 9: Security ---
  {
    id: 'ql-31',
    prompt: 'Sanitize userInput before using it in dangerouslySetInnerHTML.',
    codeBefore: [
      'import DOMPurify from "dompurify";',
      'function RichContent({ userInput }) {',
    ],
    codeAfter: [
      '  return <div dangerouslySetInnerHTML={{ __html: clean }} />;',
      '}',
    ],
    answer: 'const clean = DOMPurify.sanitize(userInput);',
    hint: 'Use DOMPurify.sanitize() to strip malicious scripts from HTML content.',
  },
  {
    id: 'ql-32',
    prompt: 'Set the Authorization header with the Bearer token for a fetch request.',
    codeBefore: [
      'const fetchData = async (token) => {',
      '  const res = await fetch("/api/data", {',
    ],
    codeAfter: [
      '  });',
      '  return res.json();',
      '};',
    ],
    answer: 'headers: { Authorization: `Bearer ${token}` },',
    hint: 'Set headers with the Authorization key and `Bearer ${token}` value.',
  },
  // --- Module 10: React Tricks ---
  {
    id: 'ql-33',
    prompt: 'Use a key to force React to remount the component when userId changes.',
    codeBefore: [
      'function UserPage({ userId }) {',
      '  return (',
    ],
    codeAfter: [
      '  );',
      '}',
    ],
    answer: '<UserProfile key={userId} userId={userId} />',
    hint: 'Changing the key prop forces React to unmount and remount with fresh state.',
  },
  {
    id: 'ql-34',
    prompt: 'Forward the ref to the inner input element.',
    codeBefore: [
      'const FancyInput = forwardRef((props, ref) => {',
      '  return (',
    ],
    codeAfter: [
      '  );',
      '});',
    ],
    answer: '<input ref={ref} {...props} />',
    hint: 'Pass the ref received from forwardRef directly to the inner DOM element.',
  },
  // --- Module 11: React Traps ---
  {
    id: 'ql-35',
    prompt: 'Fix: use functional update to avoid stale closure in the interval.',
    codeBefore: [
      'useEffect(() => {',
      '  const id = setInterval(() => {',
    ],
    codeAfter: [
      '  }, 1000);',
      '  return () => clearInterval(id);',
      '}, []);',
    ],
    answer: 'setCount(prev => prev + 1);',
    hint: 'Use a function updater to get the latest value instead of a stale closure reference.',
  },
  {
    id: 'ql-36',
    prompt: 'Fix: update nested object immutably (update city inside address).',
    codeBefore: [
      'const updateCity = (newCity) => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setUser(prev => ({ ...prev, address: { ...prev.address, city: newCity } }));',
    hint: 'Spread each level of nesting: { ...prev, nested: { ...prev.nested, key: value } }.',
  },
  // --- Module 12: Custom Hooks ---
  {
    id: 'ql-37',
    prompt: 'Return the debounced value after a delay using a custom hook pattern.',
    codeBefore: [
      'function useDebounce(value, delay) {',
      '  const [debounced, setDebounced] = useState(value);',
      '  useEffect(() => {',
      '    const timer = setTimeout(() => setDebounced(value), delay);',
      '    return () => clearTimeout(timer);',
      '  }, [value, delay]);',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'return debounced;',
    hint: 'A custom hook returns its computed value at the end.',
  },
  {
    id: 'ql-38',
    prompt: 'Initialize state from localStorage in a useLocalStorage hook.',
    codeBefore: [
      'function useLocalStorage(key, initial) {',
    ],
    codeAfter: [
      '  // ... sync logic',
      '  return [value, setValue];',
      '}',
    ],
    answer: 'const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)) ?? initial);',
    hint: 'Use a lazy initializer to read from localStorage and fall back to the initial value.',
  },
  // --- Module 13: TypeScript ---
  {
    id: 'ql-39',
    prompt: 'Type the children prop to accept any renderable React content.',
    codeBefore: [
      'interface LayoutProps {',
    ],
    codeAfter: [
      '}',
    ],
    answer: 'children: React.ReactNode;',
    hint: 'React.ReactNode covers elements, strings, numbers, null, fragments, and more.',
  },
  {
    id: 'ql-40',
    prompt: 'Type a generic List component that accepts items of type T.',
    codeBefore: [],
    codeAfter: [
      '  return <ul>{items.map(renderItem)}</ul>;',
      '}',
    ],
    answer: 'function List<T>({ items, renderItem }: { items: T[]; renderItem: (item: T) => React.ReactNode }) {',
    hint: 'Use function Name<T>({ prop }: { prop: T[] }) { for a generic component.',
  },
  // --- Module 14: Forms ---
  {
    id: 'ql-41',
    prompt: 'Handle multiple form inputs with a single onChange using computed property names.',
    codeBefore: [
      'const handleChange = (e) => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));',
    hint: 'Use [e.target.name] as a computed key to update the right field.',
  },
  {
    id: 'ql-42',
    prompt: 'Add a new empty field to a dynamic form fields array.',
    codeBefore: [
      'const addField = () => {',
    ],
    codeAfter: [
      '};',
    ],
    answer: 'setFields(prev => [...prev, ""]);',
    hint: 'Spread the existing array and append a new empty string.',
  },
  // --- Module 15: API Integration ---
  {
    id: 'ql-43',
    prompt: 'Create an AbortController and pass its signal to fetch.',
    codeBefore: [
      'useEffect(() => {',
    ],
    codeAfter: [
      '  fetch("/api/data", { signal: controller.signal }).then(r => r.json()).then(setData);',
      '  return () => controller.abort();',
      '}, []);',
    ],
    answer: 'const controller = new AbortController();',
    hint: 'new AbortController() creates a controller whose signal can cancel fetch requests.',
  },
  {
    id: 'ql-44',
    prompt: 'Implement optimistic update: update state before the API call.',
    codeBefore: [
      'const toggleLike = async (postId) => {',
      '  const prev = posts;',
    ],
    codeAfter: [
      '  try { await api.toggleLike(postId); }',
      '  catch { setPosts(prev); }',
      '};',
    ],
    answer: 'setPosts(posts.map(p => p.id === postId ? { ...p, liked: !p.liked } : p));',
    hint: 'Update the target item optimistically with map(), save previous state for rollback.',
  },
  // --- Module 16: Testing ---
  {
    id: 'ql-45',
    prompt: 'Query a button by its accessible role and name in a test.',
    codeBefore: [
      'render(<SubmitForm />);',
    ],
    codeAfter: [
      'expect(button).toBeInTheDocument();',
    ],
    answer: 'const button = screen.getByRole("button", { name: /submit/i });',
    hint: 'getByRole("button", { name: /text/i }) finds a button by its accessible name.',
  },
  {
    id: 'ql-46',
    prompt: 'Simulate a user clicking a button in a test.',
    codeBefore: [
      'render(<Counter />);',
      'const button = screen.getByRole("button", { name: /increment/i });',
    ],
    codeAfter: [
      'expect(screen.getByText("1")).toBeInTheDocument();',
    ],
    answer: 'await userEvent.click(button);',
    hint: 'userEvent.click(element) simulates a real user click interaction.',
  },
  // --- Module 17: Accessibility ---
  {
    id: 'ql-47',
    prompt: 'Add an aria-label to an icon button that has no visible text.',
    codeBefore: [
      'function CloseButton({ onClose }) {',
      '  return (',
    ],
    codeAfter: [
      '  );',
      '}',
    ],
    answer: '<button onClick={onClose} aria-label="Close">✕</button>',
    hint: 'aria-label provides an accessible name when there is no visible label text.',
  },
  {
    id: 'ql-48',
    prompt: 'Associate a label with its input using htmlFor.',
    codeBefore: [],
    codeAfter: [
      '<input id="email" type="email" />',
    ],
    answer: '<label htmlFor="email">Email</label>',
    hint: 'Set htmlFor on the label to match the input\'s id attribute.',
  },
  // --- Module 18: Ecosystem & Tooling ---
  {
    id: 'ql-49',
    prompt: 'Configure Vite to set the base path for GitHub Pages deployment.',
    codeBefore: [
      'export default defineConfig({',
    ],
    codeAfter: [
      '  plugins: [react()],',
      '});',
    ],
    answer: 'base: "/my-app/",',
    hint: 'Set the base property in vite.config to match your GitHub Pages repository name.',
  },
  {
    id: 'ql-50',
    prompt: 'Write an ESLint rule to warn on console.log statements.',
    codeBefore: [
      'module.exports = {',
      '  rules: {',
    ],
    codeAfter: [
      '  },',
      '};',
    ],
    answer: '"no-console": "warn",',
    hint: 'Use the "no-console" rule with "warn" severity level.',
  },
];
