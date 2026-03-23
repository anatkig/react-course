import type { Module } from '../types';

export const module5: Module = {
  id: 'mod-5',
  title: 'React Router',
  description:
    'Learn client-side routing with React Router: navigation, route parameters, nested routes, and programmatic navigation.',
  topics: [
    {
      id: 'mod5-t1',
      title: 'Basic Routing Setup',
      explanation: `## Client-Side Routing with React Router

React Router enables navigation between views without full page reloads.

### Installation

\`\`\`bash
npm install react-router-dom
\`\`\`

### Basic Setup

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

### Key Components

| Component | Purpose |
|-----------|---------|
| \`<BrowserRouter>\` | Wrapper that enables routing |
| \`<Routes>\` | Container for route definitions |
| \`<Route>\` | Maps a URL path to a component |
| \`<Link>\` | Declarative navigation (replaces \`<a>\`) |
| \`<NavLink>\` | Like Link but supports active styling |

### NavLink for Active Styles

\`\`\`jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>
\`\`\`

### 404 Catch-All Route

\`\`\`jsx
<Route path="*" element={<NotFound />} />
\`\`\`

The \`*\` path matches any URL that doesn't match other routes.`,
      tasks: [{
        description:
          'Set up a basic router with three pages: Home ("/"), Products ("/products"), and About ("/about"). Add a navigation bar with NavLink components that highlight the active page. Add a 404 catch-all route.',
        starterCode: `import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// TODO: Create Home, Products, About, NotFound components
// TODO: Set up BrowserRouter with Routes
// TODO: Add navigation with NavLink`,
        solution: `import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Home() { return <h1>Home Page</h1>; }
function Products() { return <h1>Products</h1>; }
function About() { return <h1>About Us</h1>; }
function NotFound() { return <h1>404 — Page Not Found</h1>; }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
        hints: [
          'Use NavLink instead of Link for active state support',
          'Add end prop to the "/" NavLink to avoid matching all routes',
          'Place the "*" route last to catch unmatched URLs',
        ],
      }],
    },
    {
      id: 'mod5-t2',
      title: 'Dynamic Routes & Parameters',
      explanation: `## URL Parameters

Dynamic segments in the URL are defined with \`:\` prefix:

\`\`\`jsx
<Route path="/users/:userId" element={<UserProfile />} />
\`\`\`

### Reading Parameters with useParams

\`\`\`jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  // userId is a string from the URL
  return <h1>User #{userId}</h1>;
}
\`\`\`

### Multiple Parameters

\`\`\`jsx
<Route path="/posts/:year/:month" element={<Archive />} />

function Archive() {
  const { year, month } = useParams();
  return <h1>Archive: {month}/{year}</h1>;
}
\`\`\`

### Query Parameters with useSearchParams

\`\`\`jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'name';

  const updateCategory = (cat) => {
    setSearchParams({ category: cat, sort });
  };

  return <h1>Category: {category}, Sort: {sort}</h1>;
}
// URL: /products?category=electronics&sort=price
\`\`\`

### Programmatic Navigation with useNavigate

\`\`\`jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // after login...
    navigate('/dashboard');
    // or go back:
    navigate(-1);
  };
}
\`\`\``,
      tasks: [{
        description:
          'Create a mini blog app with routes: "/posts" (list of posts), "/posts/:postId" (single post). The list should link to each post. The post detail page should read the postId parameter and display it. Add a "Back to list" button using useNavigate.',
        starterCode: `import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', body: 'Hello World' },
  { id: 2, title: 'Second Post', body: 'React is great' },
  { id: 3, title: 'Third Post', body: 'Routing is fun' },
];

// TODO: PostList component with links to each post
// TODO: PostDetail component using useParams and useNavigate`,
        solution: `import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', body: 'Hello World' },
  { id: 2, title: 'Second Post', body: 'React is great' },
  { id: 3, title: 'Third Post', body: 'Routing is fun' },
];

function PostList() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={\`/posts/\${post.id}\`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(postId));

  if (!post) return <p>Post not found</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate('/posts')}>Back to list</button>
    </article>
  );
}`,
        hints: [
          'Use template literals for dynamic Link paths: /posts/${id}',
          'useParams returns strings — convert to number if needed',
          'Use navigate("/posts") or navigate(-1) to go back',
        ],
      }],
    },
    {
      id: 'mod5-t3',
      title: 'Nested Routes & Layouts',
      explanation: `## Nested Routes

Nested routes let child routes render inside parent layouts using the \`<Outlet />\` component.

\`\`\`jsx
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard">
      <aside>
        <Link to="overview">Overview</Link>
        <Link to="settings">Settings</Link>
      </aside>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
\`\`\`

### Key Concepts

- **\`<Outlet />\`** — renders the matched child route's element.
- **\`index\` route** — the default child route (matches the parent's path exactly).
- **Relative paths** — child routes are relative to the parent: \`settings\` = \`/dashboard/settings\`.

### Shared Layouts

Nested routes are perfect for shared layouts:

\`\`\`jsx
<Routes>
  {/* Public layout */}
  <Route element={<PublicLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>

  {/* Protected layout */}
  <Route element={<ProtectedLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
</Routes>
\`\`\`

Routes without a \`path\` prop act as **layout routes** — they render a wrapper around their children.`,
      tasks: [{
        description:
          'Create a dashboard with nested routes. The layout has a sidebar with links and an Outlet for content. Add nested routes for: index (Overview), "analytics", and "settings". Each shows a simple component.',
        starterCode: `import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

// TODO: DashboardLayout with sidebar and Outlet
// TODO: Overview, Analytics, Settings components
// TODO: Nested route configuration`,
        solution: `import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <NavLink to="/dashboard" end>Overview</NavLink>
        <NavLink to="/dashboard/analytics">Analytics</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

function Overview() { return <h2>Dashboard Overview</h2>; }
function Analytics() { return <h2>Analytics</h2>; }
function Settings() { return <h2>Settings</h2>; }

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}`,
        hints: [
          'Place <Outlet /> where child content should render',
          'Use index prop for the default child route',
          'Child route paths are relative — just "analytics", not "/dashboard/analytics"',
        ],
      }],
    },
  ],
  test: [
    {
      id: 'mod5-q1',
      question: 'What does the <Link> component do compared to a regular <a> tag?',
      options: ['Navigates without a full page reload (client-side routing)', 'Nothing different — it behaves exactly the same as a standard HTML anchor tag', 'Opens the target URL in a new browser tab or window automatically', 'Adds default CSS styling and active class handling to the rendered link'],
      correctAnswer: 0,
      explanation:
        '<Link> performs client-side navigation by updating the URL and rendering the matched route without a full page reload, unlike <a> which triggers a server request.',
    },
    {
      id: 'mod5-q2',
      question: 'How do you access URL parameters like /users/:id?',
      options: [
        'window.location.params',
        'useParams() hook',
        'props.match.params',
        'useLocation().params',
      ],
      correctAnswer: 1,
      explanation:
        'The useParams() hook returns an object of key/value pairs from the current URL matching the dynamic segments defined in the route path.',
    },
    {
      id: 'mod5-q3',
      question: 'What is the purpose of <Outlet /> in nested routes?',
      options: ['It creates a navigation link with automatic active styling for the current path', 'It handles and displays custom 404 error pages when routes are not matched', 'It performs a client-side redirect from one route path to a different path', 'It renders the matched child route\'s element'],
      correctAnswer: 3,
      explanation:
        '<Outlet /> acts as a placeholder in parent route components where the matched child route\'s element will be rendered.',
    },
    {
      id: 'mod5-q4',
      question: 'What does the "index" route do?',
      options: ['It generates the index.html file that serves as the SPA\'s entry point', 'It redirects all unmatched URLs to the application\'s homepage route', 'It defines the default child route that matches the parent\'s URL exactly', 'It registers a route specifically designed for handling URL query parameters'],
      correctAnswer: 2,
      explanation:
        'An index route renders at the parent\'s URL when no other child route matches. It\'s the default content for a nested route layout.',
    },
    {
      id: 'mod5-q5',
      question: 'How do you navigate programmatically (e.g., after a form submission)?',
      options: [
        'window.location.href = "/page"',
        'useNavigate() hook',
        '<Link> component only',
        'document.redirect("/page")',
      ],
      correctAnswer: 1,
      explanation:
        'useNavigate() returns a function that lets you navigate programmatically: navigate("/path") to go to a route, or navigate(-1) to go back.',
    },
  ],
};
