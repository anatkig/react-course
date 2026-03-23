import type { Module } from '../types';

export const module13: Module = {
  id: 'mod-13',
  title: 'TypeScript with React',
  description:
    'Master TypeScript in React: typing props, generics in components, discriminated unions for state, typing hooks, context, and event handlers.',
  topics: [
    {
      id: 'mod13-t1',
      title: 'Typing Props & Components',
      explanation: `## Typing React Props

### Interface vs Type for Props

\`\`\`tsx
// Both work — interface is conventional for props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // Optional with union
  disabled?: boolean;
}

function Button({ label, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
\`\`\`

### Children Typing

\`\`\`tsx
interface CardProps {
  title: string;
  children: React.ReactNode; // Accepts anything renderable
}

// For strict children typing:
interface StrictCardProps {
  children: React.ReactElement; // Only JSX elements
}

// Using PropsWithChildren helper
import { PropsWithChildren } from 'react';
type CardProps = PropsWithChildren<{ title: string }>;
\`\`\`

### Common Prop Types

| Type | Use Case |
|------|----------|
| \`React.ReactNode\` | Anything renderable (string, number, JSX, null) |
| \`React.ReactElement\` | Only JSX elements |
| \`React.CSSProperties\` | Inline style objects |
| \`React.HTMLAttributes<HTMLDivElement>\` | All native div props |
| \`React.ComponentProps<'button'>\` | All native button props |

### Extending Native HTML Props

\`\`\`tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({ label, error, ...rest }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
// Now accepts all native input props: type, placeholder, onChange, etc.
\`\`\`

### Discriminated Unions for Variant Props

\`\`\`tsx
type AlertProps =
  | { type: 'success'; message: string }
  | { type: 'error'; message: string; retryAction: () => void }
  | { type: 'loading' };

function Alert(props: AlertProps) {
  switch (props.type) {
    case 'success': return <p className="success">{props.message}</p>;
    case 'error': return (
      <div className="error">
        <p>{props.message}</p>
        <button onClick={props.retryAction}>Retry</button>
      </div>
    );
    case 'loading': return <p>Loading...</p>;
  }
}
\`\`\``,
      tasks: [{
        description:
          'Create a typed `DataTable` component that accepts a `columns` array (each with `key` and `header`) and a `rows` array of objects. Use proper TypeScript interfaces. Also create a variant using discriminated unions: the table can be in "loading", "error", or "data" state.',
        starterCode: `// TODO: Define interfaces for columns and rows
// TODO: Create DataTable with discriminated union for state

function DataTable(props) {
  // TODO: Handle loading, error, and data states
  return null;
}`,
        solution: `interface Column {
  key: string;
  header: string;
}

type DataTableProps =
  | { status: 'loading' }
  | { status: 'error'; message: string; onRetry: () => void }
  | { status: 'data'; columns: Column[]; rows: Record<string, string | number>[] };

function DataTable(props: DataTableProps) {
  if (props.status === 'loading') return <p>Loading...</p>;
  if (props.status === 'error') return (
    <div>
      <p>Error: {props.message}</p>
      <button onClick={props.onRetry}>Retry</button>
    </div>
  );

  return (
    <table>
      <thead>
        <tr>
          {props.columns.map(col => <th key={col.key}>{col.header}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, i) => (
          <tr key={i}>
            {props.columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}`,
        hints: [
          'Use a discriminated union with a "status" field to differentiate states',
          'TypeScript will narrow the type in each branch of the if/switch',
          'Use Record<string, string | number> for flexible row data',
        ],
      }],
    },
    {
      id: 'mod13-t2',
      title: 'Generic Components',
      explanation: `## Generics in React Components

Generics allow components to be **type-safe without knowing the exact type** at definition time.

### Basic Generic Component

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>;
}

// Usage — TypeScript infers T from the items array
<List items={users} renderItem={user => <span>{user.name}</span>} />
<List items={[1, 2, 3]} renderItem={num => <span>{num * 2}</span>} />
\`\`\`

### Generic with Constraints

\`\`\`tsx
interface HasId {
  id: string | number;
}

interface SelectableListProps<T extends HasId> {
  items: T[];
  selectedId: T['id'];
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
}

function SelectableList<T extends HasId>({
  items, selectedId, onSelect, renderItem,
}: SelectableListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          className={item.id === selectedId ? 'selected' : ''}
          onClick={() => onSelect(item)}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

### Generic Hook

\`\`\`tsx
function useArray<T>(initial: T[]) {
  const [items, setItems] = useState<T[]>(initial);

  const push = (item: T) => setItems(prev => [...prev, item]);
  const remove = (index: number) => setItems(prev => prev.filter((_, i) => i !== index));
  const update = (index: number, item: T) =>
    setItems(prev => prev.map((el, i) => (i === index ? item : el)));

  return { items, setItems, push, remove, update };
}
\`\`\`

### Arrow Function Syntax

In TSX files, the angle bracket syntax conflicts with JSX. Use this workaround:

\`\`\`tsx
// ❌ Ambiguous in .tsx files
const List = <T>(props: ListProps<T>) => { ... };

// ✅ Add extends or trailing comma
const List = <T extends unknown>(props: ListProps<T>) => { ... };
const List = <T,>(props: ListProps<T>) => { ... };
\`\`\``,
      tasks: [{
        description:
          'Create a generic `Autocomplete<T>` component. It should accept items of any type (with a constraint that items must have a `label: string` field), filter them based on user input, and call `onSelect` with the full typed item.',
        starterCode: `// TODO: Define the generic component with proper constraints
function Autocomplete(props) {
  // TODO: Filter items by label matching the input
  // TODO: Show filtered suggestions
  // TODO: Call onSelect with the full item
  return null;
}`,
        solution: `interface HasLabel {
  label: string;
}

interface AutocompleteProps<T extends HasLabel> {
  items: T[];
  onSelect: (item: T) => void;
  placeholder?: string;
}

function Autocomplete<T extends HasLabel>({
  items, onSelect, placeholder,
}: AutocompleteProps<T>) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: T) => {
    setQuery(item.label);
    setOpen(false);
    onSelect(item);
  };

  return (
    <div>
      <input
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        placeholder={placeholder}
      />
      {open && filtered.length > 0 && (
        <ul>
          {filtered.map((item, i) => (
            <li key={i} onClick={() => handleSelect(item)}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
        hints: [
          'Use T extends HasLabel to constrain the generic type',
          'TypeScript infers T from the items prop when used',
          'The onSelect callback receives the full T object, preserving all type info',
        ],
      }],
    },
    {
      id: 'mod13-t3',
      title: 'Typing Hooks & Context',
      explanation: `## Typing useState

\`\`\`tsx
// Type is inferred
const [count, setCount] = useState(0); // number
const [name, setName] = useState(''); // string

// Explicit type needed for complex/nullable initial values
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<Item[]>([]);
\`\`\`

## Typing useReducer

\`\`\`tsx
interface State {
  count: number;
  error: string | null;
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set'; payload: number }
  | { type: 'error'; message: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'decrement': return { ...state, count: state.count - 1 };
    case 'set': return { ...state, count: action.payload };
    case 'error': return { ...state, error: action.message };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
dispatch({ type: 'set', payload: 42 }); // ✅
dispatch({ type: 'set' }); // ❌ Error — missing payload
\`\`\`

## Typing Context

\`\`\`tsx
interface AuthContext {
  user: User | null;
  login: (creds: Credentials) => Promise<void>;
  logout: () => void;
}

// Avoid null assertion — use a helper
const AuthCtx = createContext<AuthContext | undefined>(undefined);

function useAuth(): AuthContext {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (creds: Credentials) => {
    const u = await api.login(creds);
    setUser(u);
  };

  const logout = () => setUser(null);

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
\`\`\`

## Typing Event Handlers

\`\`\`tsx
// Inline — TypeScript infers the type
<input onChange={e => console.log(e.target.value)} />

// Named handler — specify the event type
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  console.log(e.target.value);
};

// Or specify the event parameter type
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

// Form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
\`\`\``,
      tasks: [{
        description:
          'Create a fully typed `ThemeContext` with `useReducer`. The theme state should have `mode` ("light" | "dark"), `primaryColor` (string), and `fontSize` (number). Actions: `toggleMode`, `setColor(payload)`, `setFontSize(payload)`. Create the provider and a `useTheme` hook.',
        starterCode: `// TODO: Define State and Action types
// TODO: Create reducer
// TODO: Create context, provider, and useTheme hook`,
        solution: `interface ThemeState {
  mode: 'light' | 'dark';
  primaryColor: string;
  fontSize: number;
}

type ThemeAction =
  | { type: 'toggleMode' }
  | { type: 'setColor'; payload: string }
  | { type: 'setFontSize'; payload: number };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'toggleMode':
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    case 'setColor':
      return { ...state, primaryColor: action.payload };
    case 'setFontSize':
      return { ...state, fontSize: action.payload };
  }
}

interface ThemeContextValue {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

const ThemeCtx = createContext<ThemeContextValue | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: 'light',
    primaryColor: '#3b82f6',
    fontSize: 16,
  });

  return (
    <ThemeCtx.Provider value={{ state, dispatch }}>
      {children}
    </ThemeCtx.Provider>
  );
}

function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}`,
        hints: [
          'Use a discriminated union for actions with a "type" field',
          'React.Dispatch<Action> is the type for the dispatch function',
          'Create context as createContext<ContextValue | undefined>(undefined)',
        ],
      }],
    },
    {
      id: 'mod13-t4',
      title: 'Advanced TypeScript Patterns',
      explanation: `## Polymorphic Components ("as" Prop)

A component that renders as different HTML elements:

\`\`\`tsx
type BoxProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'children'>;

function Box<C extends React.ElementType = 'div'>({
  as, children, ...rest
}: BoxProps<C>) {
  const Component = as || 'div';
  return <Component {...rest}>{children}</Component>;
}

// Usage
<Box>div by default</Box>
<Box as="button" onClick={() => {}}>I'm a button</Box>
<Box as="a" href="/home">I'm a link</Box>
\`\`\`

## Template Literal Types

\`\`\`tsx
type Size = 'sm' | 'md' | 'lg';
type Color = 'red' | 'blue' | 'green';
type ClassName = \\\`\\\${Size}-\\\${Color}\\\`; // 'sm-red' | 'sm-blue' | ... (9 combinations)

interface BadgeProps {
  variant: ClassName;
}
\`\`\`

## Utility Types for Props

\`\`\`tsx
// Pick only certain props
type MiniUser = Pick<User, 'id' | 'name'>;

// Exclude certain props
type UserWithoutPassword = Omit<User, 'password'>;

// Make all props optional
type PartialUser = Partial<User>;

// Make all props required
type RequiredConfig = Required<Config>;

// Record for dictionaries
type UserMap = Record<string, User>;
\`\`\`

## Extracting Component Props

\`\`\`tsx
// Get props type from any component
type ButtonProps = React.ComponentProps<typeof Button>;

// Get props type from an HTML element
type InputProps = React.ComponentProps<'input'>;
\`\`\`

## Type Guards

\`\`\`tsx
interface TextMessage { type: 'text'; content: string }
interface ImageMessage { type: 'image'; url: string; alt: string }
type Message = TextMessage | ImageMessage;

function isTextMessage(msg: Message): msg is TextMessage {
  return msg.type === 'text';
}

function MessageBubble({ message }: { message: Message }) {
  if (isTextMessage(message)) {
    return <p>{message.content}</p>; // TS knows it's TextMessage
  }
  return <img src={message.url} alt={message.alt} />;
}
\`\`\``,
      tasks: [{
        description:
          'Create a polymorphic `Typography` component with an `as` prop. It should accept "h1", "h2", "h3", "p", or "span" and pass through all native props for the chosen element. Also include a `variant` prop for styling.',
        starterCode: `// TODO: Create a polymorphic Typography component
// that changes its rendered element via the "as" prop
// and accepts all native HTML props for that element`,
        solution: `type Variant = 'heading' | 'subheading' | 'body' | 'caption';

type TypographyProps<C extends React.ElementType = 'p'> = {
  as?: C;
  variant?: Variant;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'variant' | 'children'>;

function Typography<C extends React.ElementType = 'p'>({
  as,
  variant = 'body',
  children,
  className,
  ...rest
}: TypographyProps<C>) {
  const Component = as || 'p';
  return (
    <Component
      className={\`typography \${variant} \${className || ''}\`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}

// Usage:
// <Typography as="h1" variant="heading">Title</Typography>
// <Typography as="span" variant="caption" style={{ color: 'gray' }}>Note</Typography>`,
        hints: [
          'Use React.ElementType as the generic constraint for the "as" prop',
          'Use React.ComponentPropsWithoutRef<C> to get the element\'s native props',
          'Omit your custom props from the native props to avoid conflicts',
        ],
      }],
    },
  ],
  test: [
    {
      id: 'mod13-q1',
      question: 'What type should you use for the children prop that accepts anything renderable?',
      options: [
        'React.ReactElement',
        'React.ReactNode',
        'JSX.Element',
        'string | number',
      ],
      correctAnswer: 1,
      explanation:
        'React.ReactNode is the broadest type for renderable content — it includes strings, numbers, booleans, null, undefined, ReactElements, and arrays of those. ReactElement only accepts JSX elements.',
    },
    {
      id: 'mod13-q2',
      question: 'Why is createContext<T | undefined>(undefined) preferred over createContext<T>(null as any)?',
      options: [
        'It is faster at runtime because undefined uses less memory',
        'It provides proper type safety and forces consumers to check for undefined',
        'React does not allow null as a default value for context',
        'TypeScript requires all generics to include undefined',
      ],
      correctAnswer: 1,
      explanation:
        'Using undefined with a proper type guard in the useContext hook ensures that consumers outside the provider get a clear error instead of silently using an invalid value. "null as any" defeats TypeScript\'s type checking.',
    },
    {
      id: 'mod13-q3',
      question: 'What does <T extends HasId> mean in a generic component?',
      options: [
        'T must be exactly the HasId type',
        'T must be a type that includes at least all the properties of HasId',
        'T is a child class that inherits from HasId',
        'T must be a union that includes HasId as one variant',
      ],
      correctAnswer: 1,
      explanation:
        'extends in a generic constraint means T must satisfy the HasId interface — it must have at least the properties defined in HasId, but can also have additional properties.',
    },
    {
      id: 'mod13-q4',
      question: 'How do you type a discriminated union for useReducer actions?',
      options: [
        'Use a single interface with all possible properties made optional',
        'Use a union of types each with a unique literal "type" field',
        'Use an enum for action types and a single action interface',
        'Use generics with a factory function for each action type',
      ],
      correctAnswer: 1,
      explanation:
        'Discriminated unions use a unique literal type field (usually "type") in each variant. TypeScript narrows the type in switch/if statements based on this field, giving you type-safe access to variant-specific properties.',
    },
    {
      id: 'mod13-q5',
      question: 'What is a polymorphic component in React?',
      options: [
        'A component that accepts multiple children',
        'A component that uses multiple useState hooks',
        'A component that can render as different HTML elements via an "as" prop',
        'A component that works in both client and server rendering',
      ],
      correctAnswer: 2,
      explanation:
        'A polymorphic component uses an "as" prop to let the consumer choose which HTML element or component it renders as. It uses generics to pass through the correct native props for the chosen element.',
    },
  ],
};
