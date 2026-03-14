import type { Module } from '../types';

export const module9: Module = {
  id: 'mod-9',
  title: 'Security in React',
  description:
    'Learn how to protect your React applications from common web vulnerabilities: XSS, CSRF, secure authentication, input sanitization, and secure data handling.',
  topics: [
    {
      id: 'mod9-t1',
      title: 'Cross-Site Scripting (XSS) Prevention',
      explanation: `## XSS in React

React **automatically escapes** values embedded in JSX, which provides built-in protection against most XSS attacks.

\`\`\`jsx
const userInput = '<script>alert("hacked")</script>';
// This is SAFE — React escapes the string
return <p>{userInput}</p>;
// Renders as text: <script>alert("hacked")</script>
\`\`\`

### The Dangerous Exception: dangerouslySetInnerHTML

React provides \`dangerouslySetInnerHTML\` to inject raw HTML. As the name suggests, this is **dangerous** and bypasses React's XSS protection.

\`\`\`jsx
// ❌ DANGEROUS — never use with untrusted input
function Comment({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
\`\`\`

### Sanitizing HTML

If you must render HTML, **always sanitize** it first using a library like DOMPurify:

\`\`\`jsx
import DOMPurify from 'dompurify';

function SafeHTML({ html }) {
  const sanitized = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
\`\`\`

### Other XSS Vectors to Watch

1. **URL-based XSS** — Always validate URLs before using in \`href\` or \`src\`:

\`\`\`jsx
// ❌ Dangerous
<a href={userProvidedUrl}>Click</a>

// ✅ Safe — validate the protocol
function SafeLink({ url, children }) {
  const isValid = /^https?:\\/\\//i.test(url);
  return isValid ? <a href={url}>{children}</a> : <span>{children}</span>;
}
\`\`\`

2. **Injecting into CSS** — Don't use user input directly in inline styles.
3. **eval() and new Function()** — Never pass user input to these.`,
      task: {
        description:
          'Create a `SafeComment` component that receives raw HTML content as a prop. It should sanitize the HTML before rendering. Implement a simple sanitizer that strips all `<script>` tags and event handler attributes (like onclick, onerror, etc.).',
        starterCode: `function sanitizeHTML(html) {
  // TODO: Remove <script> tags and event handler attributes
  return html;
}

function SafeComment({ htmlContent }) {
  // TODO: Sanitize and render the HTML safely
  return null;
}`,
        solution: `function sanitizeHTML(html) {
  let clean = html.replace(/<script[^>]*>[\\s\\S]*?<\\/script>/gi, '');
  clean = clean.replace(/\\s*on\\w+\\s*=\\s*"[^"]*"/gi, '');
  clean = clean.replace(/\\s*on\\w+\\s*=\\s*'[^']*'/gi, '');
  return clean;
}

function SafeComment({ htmlContent }) {
  const sanitized = sanitizeHTML(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}`,
        hints: [
          'Use regex to match and remove <script>...</script> tags',
          'Event handlers in HTML start with "on" (onclick, onerror, onload, etc.)',
          'In production, use a battle-tested library like DOMPurify instead of custom regex',
        ],
      },
    },
    {
      id: 'mod9-t2',
      title: 'Authentication & Token Security',
      explanation: `## Handling Auth Tokens Securely

### Where to Store Tokens

| Storage | XSS Risk | CSRF Risk | Recommendation |
|---------|----------|-----------|----------------|
| localStorage | ❌ Vulnerable | ✅ Safe | Avoid for sensitive tokens |
| sessionStorage | ❌ Vulnerable | ✅ Safe | Short-lived sessions only |
| HttpOnly Cookie | ✅ Safe | ❌ Vulnerable | Best for auth tokens |
| In-Memory (state) | ✅ Safe | ✅ Safe | Best security, lost on refresh |

### Best Practice: HttpOnly Cookies

\`\`\`
// Server sets the cookie
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict; Path=/
\`\`\`

JavaScript **cannot access** HttpOnly cookies, making them immune to XSS.

### In-Memory Token Pattern

\`\`\`jsx
// Store token only in memory — not in localStorage
let accessToken = null;

function login(credentials) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    credentials: 'include', // sends/receives cookies
  });
  const data = await response.json();
  accessToken = data.accessToken; // short-lived, in memory
  // refresh token is in HttpOnly cookie (set by server)
}
\`\`\`

### Secure API Calls

\`\`\`jsx
async function fetchProtectedData() {
  const response = await fetch('/api/data', {
    headers: {
      'Authorization': \\\`Bearer \\\${accessToken}\\\`,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (response.status === 401) {
    // Token expired — try refresh
    await refreshToken();
    return fetchProtectedData();
  }
  return response.json();
}
\`\`\`

### Token Refresh Pattern

Keep access tokens short-lived (5–15 min) and use refresh tokens (in HttpOnly cookies) to get new ones silently.`,
      task: {
        description:
          'Create an `useAuth` hook that manages authentication state. It should store the access token in memory (not localStorage), provide login/logout functions, and include an `authFetch` wrapper that automatically adds the Authorization header.',
        starterCode: `function useAuth() {
  // TODO: Store accessToken in state (in-memory)
  // TODO: Implement login(credentials) that calls an API
  // TODO: Implement logout() that clears the token
  // TODO: Implement authFetch(url, options) that adds auth header
  return { user: null, login, logout, authFetch };
}`,
        solution: `function useAuth() {
  const [user, setUser] = useState(null);
  const tokenRef = useRef(null);

  const login = async (credentials) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });
    const data = await res.json();
    tokenRef.current = data.accessToken;
    setUser(data.user);
  };

  const logout = () => {
    tokenRef.current = null;
    setUser(null);
    fetch('/api/logout', { method: 'POST', credentials: 'include' });
  };

  const authFetch = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': \\\`Bearer \\\${tokenRef.current}\\\`,
      },
      credentials: 'include',
    });
  };

  return { user, login, logout, authFetch };
}`,
        hints: [
          'Use useRef instead of useState for the token to avoid unnecessary re-renders',
          'Always include credentials: "include" for cookie-based refresh tokens',
          'Never store the token in localStorage — it is accessible to XSS attacks',
        ],
      },
    },
    {
      id: 'mod9-t3',
      title: 'CSRF Protection & Secure Requests',
      explanation: `## Cross-Site Request Forgery (CSRF)

CSRF tricks a user's browser into making unwanted requests to a site where the user is authenticated.

### How CSRF Works

1. User logs into \`bank.com\` (session cookie is set)
2. User visits malicious site that has: \`<img src="https://bank.com/transfer?to=hacker&amount=1000">\`
3. Browser sends the request with the session cookie automatically

### Protection Strategies

#### 1. SameSite Cookies
\`\`\`
Set-Cookie: session=abc; SameSite=Strict; Secure; HttpOnly
\`\`\`
- **Strict** — Cookie never sent on cross-site requests
- **Lax** — Cookie sent on top-level navigation (GET) only
- **None** — Always sent (requires Secure flag)

#### 2. CSRF Tokens
\`\`\`jsx
function TransferForm() {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/csrf-token', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setCsrfToken(data.token));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      credentials: 'include',
      body: JSON.stringify({ to, amount }),
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
\`\`\`

#### 3. Custom Request Headers

APIs can require a custom header that browsers don't send automatically from cross-origin forms:

\`\`\`jsx
fetch('/api/action', {
  method: 'POST',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  credentials: 'include',
});
\`\`\`

### CORS & React

When your React app communicates with a different domain, the browser enforces CORS. Your API must set proper headers:

\`\`\`
Access-Control-Allow-Origin: https://your-app.com
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: Content-Type, X-CSRF-Token
\`\`\``,
      task: {
        description:
          'Create a `SecureForm` component that fetches a CSRF token on mount and includes it in form submissions. The form should have a "recipient" and "amount" field for a mock transfer.',
        starterCode: `function SecureForm() {
  // TODO: Fetch CSRF token on mount
  // TODO: Include CSRF token in form submission
  // TODO: Render form with recipient and amount fields
  return null;
}`,
        solution: `function SecureForm() {
  const [csrfToken, setCsrfToken] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/csrf-token', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setCsrfToken(data.token))
      .catch(() => setStatus('Failed to fetch CSRF token'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({ recipient, amount: Number(amount) }),
      });
      setStatus(res.ok ? 'Transfer successful' : 'Transfer failed');
    } catch {
      setStatus('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient" />
      <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" />
      <button type="submit" disabled={!csrfToken}>Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}`,
        hints: [
          'Fetch the CSRF token in a useEffect with an empty dependency array',
          'Send the token as a custom header: X-CSRF-Token',
          'Disable the submit button until the CSRF token is loaded',
        ],
      },
    },
    {
      id: 'mod9-t4',
      title: 'Input Validation & Secure Data Handling',
      explanation: `## Client-Side Validation

While server-side validation is mandatory, client-side validation improves UX and reduces unnecessary requests.

### Validating User Input

\`\`\`jsx
function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function validatePassword(password) {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };
  return { valid: Object.values(checks).every(Boolean), checks };
}

function SignupForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit the form
  };
}
\`\`\`

### Preventing Sensitive Data Leaks

1. **Never log sensitive data** to the console in production:
\`\`\`jsx
// ❌ Bad
console.log('User token:', token);

// ✅ Good — use environment checks
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', safeData);
}
\`\`\`

2. **Don't store sensitive data in state** that gets serialized:
\`\`\`jsx
// ❌ Bad — password stays in state
const [formData, setFormData] = useState({ email: '', password: '' });

// ✅ Better — use refs for sensitive fields
const passwordRef = useRef();
\`\`\`

3. **Clear sensitive data** when no longer needed:
\`\`\`jsx
useEffect(() => {
  return () => {
    // Cleanup sensitive data on unmount
    tokenRef.current = null;
  };
}, []);
\`\`\`

### Content Security Policy (CSP)

Set CSP headers to restrict what resources can load:

\`\`\`html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';">
\`\`\``,
      task: {
        description:
          'Create a `SecureSignupForm` with email and password fields. Validate the email format and enforce password requirements (min 8 chars, uppercase, lowercase, number). Show validation errors inline and never log the password.',
        starterCode: `function SecureSignupForm() {
  // TODO: Add state for email, password, and errors
  // TODO: Validate on submit
  // TODO: Show inline error messages
  return null;
}`,
        solution: `function SecureSignupForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const passwordRef = useRef();

  const validate = () => {
    const newErrors = {};
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    const pw = passwordRef.current?.value || '';
    if (pw.length < 8) newErrors.password = 'Must be at least 8 characters';
    else if (!/[A-Z]/.test(pw)) newErrors.password = 'Must include uppercase letter';
    else if (!/[a-z]/.test(pw)) newErrors.password = 'Must include lowercase letter';
    else if (!/[0-9]/.test(pw)) newErrors.password = 'Must include a number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Submit form data securely
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input ref={passwordRef} type="password" placeholder="Password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Sign Up</button>
      {submitted && <p>Account created securely!</p>}
    </form>
  );
}`,
        hints: [
          'Use useRef for the password field to avoid storing it in state',
          'Validate both fields before allowing submission',
          'Show specific error messages for each validation rule',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod9-q1',
      question: 'Why is React relatively safe from XSS by default?',
      options: [
        'It uses a Web Application Firewall (WAF) internally',
        'It automatically escapes values embedded in JSX before rendering',
        'It blocks all user input from being rendered',
        'It uses Content Security Policy headers automatically',
      ],
      correctAnswer: 1,
      explanation:
        'React escapes all values embedded in JSX by default, converting them to strings before inserting into the DOM. This prevents most XSS attacks unless you use dangerouslySetInnerHTML.',
    },
    {
      id: 'mod9-q2',
      question: 'What is the safest place to store authentication tokens in a React app?',
      options: [
        'localStorage for persistence across sessions',
        'A global JavaScript variable accessible from the console',
        'HttpOnly cookies set by the server',
        'In the URL query parameters for easy access',
      ],
      correctAnswer: 2,
      explanation:
        'HttpOnly cookies cannot be accessed by JavaScript, making them immune to XSS attacks. They are automatically sent with requests, and combined with SameSite and Secure flags provide strong protection.',
    },
    {
      id: 'mod9-q3',
      question: 'What does a CSRF attack exploit?',
      options: [
        'Vulnerabilities in the JavaScript runtime engine',
        'The browser automatically sending cookies with cross-site requests',
        'Weak encryption algorithms used for data transmission',
        'Insecure Content Security Policy headers on the page',
      ],
      correctAnswer: 1,
      explanation:
        'CSRF exploits the fact that browsers automatically include cookies with every request to a domain, even when the request originates from a different site.',
    },
    {
      id: 'mod9-q4',
      question: 'Why should you use useRef instead of useState for password fields?',
      options: [
        'useRef provides built-in password encryption',
        'useState triggers re-renders and keeps the value in the component tree, risking exposure',
        'useRef automatically hides the value from browser developer tools',
        'useState cannot be used with input elements of type password',
      ],
      correctAnswer: 1,
      explanation:
        'useState stores values in React state which is visible in React DevTools and causes re-renders. useRef keeps the value in a mutable ref that does not appear in the React tree or trigger re-renders.',
    },
    {
      id: 'mod9-q5',
      question: 'Which of the following is a safe use of dangerouslySetInnerHTML?',
      options: [
        'Rendering user-submitted comments directly without processing',
        'Rendering content sanitized by a library like DOMPurify before injection',
        'Rendering HTML fetched from any third-party API endpoint',
        'Rendering error messages that include user input for debugging',
      ],
      correctAnswer: 1,
      explanation:
        'dangerouslySetInnerHTML should only be used with sanitized content. Libraries like DOMPurify strip out dangerous elements and attributes, making the HTML safe to render.',
    },
  ],
};
