import type { Module } from '../types';

export const module18: Module = {
  id: 'mod-18',
  title: 'React Ecosystem & Tooling',
  description:
    'Navigate the React ecosystem: Vite configuration, ESLint and Prettier setup, monorepo basics, Storybook for component development, and CI/CD for React apps.',
  topics: [
    {
      id: 'mod18-t1',
      title: 'Vite Configuration & Optimization',
      explanation: `## Vite — The Modern Build Tool

Vite uses native ES modules for development and Rollup for production builds.

### Basic Configuration

\`\`\`ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
    },
  },
});
\`\`\`

### Path Aliases with TypeScript

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
\`\`\`

\`\`\`tsx
// Now you can import like this:
import { Button } from '@components/Button';
import { useAuth } from '@/hooks/useAuth';
\`\`\`

### Environment Variables

\`\`\`
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
\`\`\`

\`\`\`tsx
// Access in code (must start with VITE_)
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
\`\`\`

### Proxy API Requests

\`\`\`ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, ''),
      },
    },
  },
});
\`\`\`

### Code Splitting

\`\`\`tsx
// Automatic code splitting with lazy loading
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Manual chunk configuration
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});
\`\`\``,
      task: {
        description:
          'Create a Vite configuration file with: path aliases (@/ for src), environment-based API URL, dev server proxy for /api routes, manual chunks for vendor libraries, and source maps in production.',
        starterCode: `// vite.config.ts
// TODO: Configure with all the requirements
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // TODO: Add configuration
});`,
        solution: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});`,
        hints: [
          'Use path.resolve for aliases to get absolute paths',
          'Environment variables in Vite must start with VITE_',
          'manualChunks splits specified packages into separate bundle files',
        ],
      },
    },
    {
      id: 'mod18-t2',
      title: 'ESLint & Prettier',
      explanation: `## Code Quality with ESLint

### Setup

\`\`\`bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
\`\`\`

### Flat Config (ESLint 9+)

\`\`\`js
// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
      }],
    },
  },
  { ignores: ['dist/'] },
);
\`\`\`

### Important React ESLint Rules

| Rule | Purpose |
|------|---------|
| \`react-hooks/rules-of-hooks\` | Enforces Hooks rules (only call at top level) |
| \`react-hooks/exhaustive-deps\` | Warns about missing useEffect dependencies |
| \`no-unused-vars\` | Catches dead code |
| \`no-console\` | Prevents debug logs in production |

## Prettier — Code Formatting

### Setup

\`\`\`bash
npm install -D prettier eslint-config-prettier
\`\`\`

\`\`\`json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always"
}
\`\`\`

### Integrating with ESLint

Add \`eslint-config-prettier\` last to disable conflicting rules:

\`\`\`js
// eslint.config.js
import prettierConfig from 'eslint-config-prettier';

export default [
  // ... other configs
  prettierConfig, // Must be last
];
\`\`\`

### Package.json Scripts

\`\`\`json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/"
  }
}
\`\`\`

### Pre-commit Hooks with Husky

\`\`\`bash
npm install -D husky lint-staged
npx husky init
\`\`\`

\`\`\`json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,md,json}": ["prettier --write"]
  }
}
\`\`\``,
      task: {
        description:
          'Create an ESLint flat config and Prettier config for a React TypeScript project. Include rules for hooks, unused variables, no console.log, and TypeScript strict mode. Set up package.json scripts for linting and formatting.',
        starterCode: `// eslint.config.js
// TODO: Create ESLint flat config

// .prettierrc
// TODO: Create Prettier config

// package.json scripts
// TODO: Add lint and format scripts`,
        solution: `// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  prettierConfig,
  { ignores: ['dist/'] },
);

// .prettierrc
// { "semi": true, "singleQuote": true, "trailingComma": "all", "printWidth": 100, "tabWidth": 2 }

// package.json scripts
// "lint": "eslint src/",
// "lint:fix": "eslint src/ --fix",
// "format": "prettier --write 'src/**/*.{ts,tsx,css,json}'",
// "format:check": "prettier --check 'src/**/*.{ts,tsx,css,json}'"`,
        hints: [
          'eslint-config-prettier must be the last item to override conflicting rules',
          'Use argsIgnorePattern: "^_" to allow unused args prefixed with underscore',
          'Add the ignores config to exclude the dist folder',
        ],
      },
    },
    {
      id: 'mod18-t3',
      title: 'Storybook for Component Development',
      explanation: `## Storybook — Develop Components in Isolation

### Setup

\`\`\`bash
npx storybook@latest init
\`\`\`

### Writing Stories

\`\`\`tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
\`\`\`

### Story Types

| Type | Purpose |
|------|---------|
| Args Stories | Configure via controls panel |
| Render Stories | Custom JSX layout |
| Play Stories | Interactive tests (click, type) |
| Template Stories | Share setup across variants |

### Interactive Stories with Play

\`\`\`tsx
import { within, userEvent, expect } from '@storybook/test';

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText('Email'),
      'test@example.com'
    );
    await userEvent.type(
      canvas.getByLabelText('Password'),
      'password123'
    );
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));

    await expect(canvas.getByText('Welcome!')).toBeInTheDocument();
  },
};
\`\`\`

### Documenting with MDX

\`\`\`mdx
{/* Button.mdx */}
import { Meta, Story, Canvas, ArgsTable } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button Component

Buttons trigger actions. Use the appropriate variant for the context.

<Canvas of={ButtonStories.Primary} />

## Props

<ArgsTable of={ButtonStories} />
\`\`\``,
      task: {
        description:
          'Write Storybook stories for a `Card` component that has props: title, description, imageUrl (optional), variant ("default" | "highlighted"), and onClick. Include stories for default, highlighted, with image, and without image variants.',
        starterCode: `// Card.stories.tsx
// TODO: Write meta and stories for the Card component

function Card({ title, description, imageUrl, variant = 'default', onClick }) {
  return (
    <div className={\`card card-\${variant}\`} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}`,
        solution: `import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Getting Started',
    description: 'Learn the basics of React development.',
    variant: 'default',
  },
};

export const Highlighted: Story = {
  args: {
    title: 'Featured Course',
    description: 'Our most popular course this month.',
    variant: 'highlighted',
  },
};

export const WithImage: Story = {
  args: {
    title: 'React Mastery',
    description: 'A comprehensive guide to React.',
    imageUrl: 'https://via.placeholder.com/300x200',
    variant: 'default',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Quick Tip',
    description: 'Use React.memo to prevent unnecessary re-renders.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Card title="Default" description="Default variant" variant="default" />
      <Card title="Highlighted" description="Highlighted variant" variant="highlighted" />
    </div>
  ),
};`,
        hints: [
          'Use Meta<typeof Card> for type-safe story configuration',
          'Each exported const is a separate story in the Storybook sidebar',
          'Use the render function for stories that show multiple variants together',
        ],
      },
    },
    {
      id: 'mod18-t4',
      title: 'CI/CD for React Apps',
      explanation: `## Continuous Integration & Deployment

### GitHub Actions for React

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run format:check
      - run: npm run test -- --run
      - run: npm run build
\`\`\`

### Deploy to GitHub Pages

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
\`\`\`

### Deploy to Netlify

\`\`\`yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

### Deploy to Vercel

\`\`\`json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
\`\`\`

### Quality Gates

\`\`\`yaml
# Add to CI workflow
- name: Check test coverage
  run: npm run test -- --run --coverage
  env:
    MIN_COVERAGE: 80

- name: Bundle size check
  run: |
    npm run build
    SIZE=$(du -sk dist/assets/*.js | awk '{sum += $1} END {print sum}')
    if [ $SIZE -gt 500 ]; then
      echo "Bundle too large: \${SIZE}KB"
      exit 1
    fi
\`\`\`

### Preview Deployments

Many platforms offer preview deployments for pull requests:
- **Vercel**: Automatic preview for every PR
- **Netlify**: Deploy previews with unique URLs
- **GitHub Pages**: Use PR-specific branches

This gives reviewers a live preview of changes before merging.`,
      task: {
        description:
          'Create a GitHub Actions CI/CD workflow that: lints, type-checks, tests (with coverage threshold), builds, and deploys to GitHub Pages on push to main. Include a separate job for PR checks.',
        starterCode: `# .github/workflows/ci.yml
# TODO: Create CI/CD pipeline
# Requirements:
# - Lint and format check
# - TypeScript type check
# - Tests with coverage
# - Build
# - Deploy to GitHub Pages (only on main)`,
        solution: `name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run test -- --run --coverage

  build:
    needs: quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: build
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist/
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
        hints: [
          'Use "needs" to create job dependencies (deploy needs build needs quality)',
          'Use "if" condition to only deploy from main branch pushes',
          'Upload build artifacts to pass them between jobs',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod18-q1',
      question: 'What is the purpose of path aliases in Vite?',
      options: [
        'To encrypt import paths for security',
        'To create shorter, more readable imports instead of relative paths like ../../',
        'To prevent circular dependencies at build time',
        'To lazy-load modules based on their alias name',
      ],
      correctAnswer: 1,
      explanation:
        'Path aliases like @/ map to directories (e.g., src/), replacing deeply nested relative paths like ../../../components/Button with clean imports like @/components/Button.',
    },
    {
      id: 'mod18-q2',
      question: 'Why must eslint-config-prettier be listed last in ESLint config?',
      options: [
        'It is alphabetically the last package name',
        'It disables all ESLint rules that conflict with Prettier formatting',
        'It enables Prettier to run after ESLint',
        'ESLint requires all config packages to be in alphabetical order',
      ],
      correctAnswer: 1,
      explanation:
        'eslint-config-prettier turns off ESLint rules that would conflict with Prettier\'s formatting. It must be last so it can override any conflicting rules from earlier configurations.',
    },
    {
      id: 'mod18-q3',
      question: 'What is the main benefit of Storybook?',
      options: [
        'It reduces the bundle size of the application',
        'It lets you develop and test UI components in isolation, outside the app',
        'It automatically generates React components from design files',
        'It replaces the need for unit tests',
      ],
      correctAnswer: 1,
      explanation:
        'Storybook provides an isolated development environment for components. You can develop, test, and document components without running the full app, making it easier to handle different states and edge cases.',
    },
    {
      id: 'mod18-q4',
      question: 'What does the SPA redirect rule do in deployment configs (/* → /index.html)?',
      options: [
        'It redirects all traffic to the homepage',
        'It ensures client-side routing works by serving index.html for all routes',
        'It blocks access to all files except index.html',
        'It compresses all responses to reduce bandwidth',
      ],
      correctAnswer: 1,
      explanation:
        'SPAs use client-side routing. When a user directly visits /about, the server needs to serve index.html (not look for an /about file). The rewrite rule ensures React Router handles all routes client-side.',
    },
    {
      id: 'mod18-q5',
      question: 'What is the purpose of manualChunks in Vite build config?',
      options: [
        'To manually delete unused code from the bundle',
        'To split specific libraries into separate files for better caching',
        'To compress JavaScript files into smaller chunks',
        'To specify which files should not be included in the build',
      ],
      correctAnswer: 1,
      explanation:
        'manualChunks splits specified packages into separate bundle files. This improves caching — when your app code changes, users only re-download the app chunk, not the unchanged vendor libraries like React.',
    },
  ],
};
