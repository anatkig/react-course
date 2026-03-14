import type { Module } from '../types';

export const module14: Module = {
  id: 'mod-14',
  title: 'Forms & Validation',
  description:
    'Master form handling in React: controlled components, dynamic fields, schema validation with Zod, React Hook Form patterns, and accessible form UX.',
  topics: [
    {
      id: 'mod14-t1',
      title: 'Controlled Forms at Scale',
      explanation: `## Managing Complex Forms

### Single Object State

Instead of one \`useState\` per field, use a single state object:

\`\`\`jsx
function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: { street: '', city: '', zipCode: '' },
  });

  const updateField = (path, value) => {
    setForm(prev => {
      const keys = path.split('.');
      const newForm = { ...prev };
      let obj = newForm;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return newForm;
    });
  };

  return (
    <form>
      <input value={form.firstName}
        onChange={e => updateField('firstName', e.target.value)} />
      <input value={form.address.city}
        onChange={e => updateField('address.city', e.target.value)} />
    </form>
  );
}
\`\`\`

### useReducer for Forms

\`\`\`jsx
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'RESET':
      return action.initialState;
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.value };
    default:
      return state;
  }
}

function useForm(initialValues) {
  const [state, dispatch] = useReducer(formReducer, {
    ...initialValues,
    errors: {},
    isSubmitting: false,
  });

  const setField = (field, value) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const reset = () =>
    dispatch({ type: 'RESET', initialState: { ...initialValues, errors: {}, isSubmitting: false } });

  return { values: state, setField, reset, dispatch };
}
\`\`\`

### Dirty Tracking and Touch State

\`\`\`jsx
function useFormField(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
    setDirty(newValue !== initialValue);
  };

  const handleBlur = () => setTouched(true);

  return { value, touched, dirty, onChange: handleChange, onBlur: handleBlur };
}
\`\`\``,
      task: {
        description:
          'Create a `useForm` hook that manages form state, field updates, dirty tracking, and reset. Use it in a multi-field `ProfileForm` component with firstName, lastName, email, and bio fields.',
        starterCode: `function useForm(initialValues) {
  // TODO: Manage values, dirty tracking, reset
}

function ProfileForm() {
  // TODO: Use the hook and render a form with 4 fields
  return null;
}`,
        solution: `function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [dirty, setDirty] = useState(false);

  const setField = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    setDirty(true);
  };

  const reset = () => {
    setValues(initialValues);
    setDirty(false);
  };

  const getFieldProps = (field) => ({
    value: values[field],
    onChange: (e) => setField(field, e.target.value),
  });

  return { values, dirty, setField, reset, getFieldProps };
}

function ProfileForm() {
  const { values, dirty, reset, getFieldProps } = useForm({
    firstName: '', lastName: '', email: '', bio: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...getFieldProps('firstName')} placeholder="First Name" />
      <input {...getFieldProps('lastName')} placeholder="Last Name" />
      <input {...getFieldProps('email')} type="email" placeholder="Email" />
      <textarea {...getFieldProps('bio')} placeholder="Bio" />
      <button type="submit" disabled={!dirty}>Save</button>
      <button type="button" onClick={reset} disabled={!dirty}>Reset</button>
    </form>
  );
}`,
        hints: [
          'Create a getFieldProps helper that returns value and onChange for easy spreading',
          'Track dirty state — set to true when any field changes',
          'Reset should restore initial values and clear dirty flag',
        ],
      },
    },
    {
      id: 'mod14-t2',
      title: 'Dynamic Form Fields',
      explanation: `## Adding and Removing Fields Dynamically

### Array of Fields

\`\`\`jsx
function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, value: '' }]);
  let nextId = useRef(2);

  const addField = () => {
    setFields(prev => [...prev, { id: nextId.current++, value: '' }]);
  };

  const removeField = (id) => {
    setFields(prev => prev.filter(f => f.id !== id));
  };

  const updateField = (id, value) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, value } : f));
  };

  return (
    <form>
      {fields.map(field => (
        <div key={field.id}>
          <input
            value={field.value}
            onChange={e => updateField(field.id, e.target.value)}
          />
          <button type="button" onClick={() => removeField(field.id)}>✕</button>
        </div>
      ))}
      <button type="button" onClick={addField}>+ Add Field</button>
    </form>
  );
}
\`\`\`

### Nested Dynamic: Repeatable Sections

\`\`\`jsx
function ExperienceForm() {
  const [experiences, setExperiences] = useState([
    { id: 1, company: '', role: '', startDate: '', endDate: '' },
  ]);

  const addExperience = () => {
    setExperiences(prev => [...prev, {
      id: Date.now(),
      company: '', role: '', startDate: '', endDate: '',
    }]);
  };

  const updateExperience = (id, field, value) => {
    setExperiences(prev =>
      prev.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    );
  };

  return (
    <div>
      {experiences.map((exp, idx) => (
        <fieldset key={exp.id}>
          <legend>Experience {idx + 1}</legend>
          <input value={exp.company}
            onChange={e => updateExperience(exp.id, 'company', e.target.value)}
            placeholder="Company" />
          <input value={exp.role}
            onChange={e => updateExperience(exp.id, 'role', e.target.value)}
            placeholder="Role" />
        </fieldset>
      ))}
      <button type="button" onClick={addExperience}>+ Add Experience</button>
    </div>
  );
}
\`\`\`

### Conditional Fields

\`\`\`jsx
function SmartForm() {
  const [type, setType] = useState('individual');

  return (
    <form>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
      </select>

      {type === 'individual' && (
        <>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
        </>
      )}
      {type === 'company' && (
        <>
          <input placeholder="Company Name" />
          <input placeholder="Tax ID" />
        </>
      )}
    </form>
  );
}
\`\`\``,
      task: {
        description:
          'Create a `SurveyBuilder` component where an admin can dynamically add questions. Each question has a type (text, multiple-choice, rating) and the form adjusts accordingly. Multiple-choice questions should allow adding/removing options.',
        starterCode: `function SurveyBuilder() {
  // TODO: Manage array of questions
  // TODO: Each question has type, title, and type-specific config
  // TODO: Allow adding/removing questions and options
  return null;
}`,
        solution: `function SurveyBuilder() {
  const [questions, setQuestions] = useState([]);
  const nextId = useRef(1);

  const addQuestion = (type) => {
    setQuestions(prev => [...prev, {
      id: nextId.current++,
      type,
      title: '',
      options: type === 'multiple-choice' ? [''] : [],
    }]);
  };

  const updateTitle = (id, title) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, title } : q));
  };

  const addOption = (qId) => {
    setQuestions(prev => prev.map(q =>
      q.id === qId ? { ...q, options: [...q.options, ''] } : q
    ));
  };

  const updateOption = (qId, idx, value) => {
    setQuestions(prev => prev.map(q =>
      q.id === qId ? { ...q, options: q.options.map((o, i) => i === idx ? value : o) } : q
    ));
  };

  const removeQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div>
      {questions.map((q, i) => (
        <fieldset key={q.id}>
          <legend>Question {i + 1} ({q.type})</legend>
          <input value={q.title} onChange={e => updateTitle(q.id, e.target.value)} placeholder="Question text" />
          {q.type === 'multiple-choice' && (
            <div>
              {q.options.map((opt, idx) => (
                <input key={idx} value={opt} onChange={e => updateOption(q.id, idx, e.target.value)} placeholder={\`Option \${idx + 1}\`} />
              ))}
              <button type="button" onClick={() => addOption(q.id)}>+ Option</button>
            </div>
          )}
          {q.type === 'rating' && <p>Rating: 1-5 stars</p>}
          <button type="button" onClick={() => removeQuestion(q.id)}>Remove</button>
        </fieldset>
      ))}
      <button type="button" onClick={() => addQuestion('text')}>+ Text Question</button>
      <button type="button" onClick={() => addQuestion('multiple-choice')}>+ Multiple Choice</button>
      <button type="button" onClick={() => addQuestion('rating')}>+ Rating</button>
    </div>
  );
}`,
        hints: [
          'Store questions as an array of objects with id, type, title, and options',
          'Use the type field to conditionally render different form elements',
          'For multiple-choice, store options as a sub-array within each question',
        ],
      },
    },
    {
      id: 'mod14-t3',
      title: 'Validation Patterns',
      explanation: `## Client-Side Validation Strategies

### Simple Validation

\`\`\`jsx
const validators = {
  required: (value) => value.trim() ? '' : 'Required',
  email: (value) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) ? '' : 'Invalid email',
  minLength: (min) => (value) =>
    value.length >= min ? '' : \\\`Must be at least \\\${min} characters\\\`,
  matches: (other, label) => (value) =>
    value === other ? '' : \\\`Must match \\\${label}\\\`,
};

function validate(values, rules) {
  const errors = {};
  for (const [field, fieldRules] of Object.entries(rules)) {
    for (const rule of fieldRules) {
      const error = rule(values[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
}
\`\`\`

### Validation Timing

| When | UX Pattern |
|------|-----------|
| On submit | Show all errors at once — simplest |
| On blur | Validate when user leaves a field — good UX |
| On change (after blur) | Validate live after first interaction — best UX |
| On keystroke | Too aggressive — avoid unless for character counters |

### Validate-on-blur Pattern

\`\`\`jsx
function useValidatedField(initialValue, validateFn) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (touched) setError(validateFn(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateFn(value));
  };

  return {
    value, error: touched ? error : '',
    onChange: handleChange,
    onBlur: handleBlur,
  };
}
\`\`\`

### Schema Validation with Zod

\`\`\`jsx
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string()
    .min(8, 'Must be at least 8 characters')
    .regex(/[A-Z]/, 'Must include uppercase')
    .regex(/[0-9]/, 'Must include number'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

function validateForm(values) {
  const result = signupSchema.safeParse(values);
  if (result.success) return {};
  const errors = {};
  for (const issue of result.error.issues) {
    errors[issue.path[0]] = issue.message;
  }
  return errors;
}
\`\`\``,
      task: {
        description:
          'Implement a `useValidatedForm` hook that supports field-level validation with validate-on-blur and validate-on-change-after-touch. Use it in a `SignupForm` with email, password, and confirm password. Show inline errors.',
        starterCode: `function useValidatedForm(initialValues, validationRules) {
  // TODO: Manage values, errors, touched state
  // TODO: Validate on blur, and on change after touched
}

function SignupForm() {
  // TODO: Use the hook with validation rules
  return null;
}`,
        solution: `function useValidatedForm(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (field, value) => {
    const rules = validationRules[field] || [];
    for (const rule of rules) {
      const error = rule(value, values);
      if (error) return error;
    }
    return '';
  };

  const getFieldProps = (field) => ({
    value: values[field],
    onChange: (e) => {
      const val = e.target.value;
      setValues(prev => ({ ...prev, [field]: val }));
      if (touched[field]) {
        setErrors(prev => ({ ...prev, [field]: validateField(field, val) }));
      }
    },
    onBlur: () => {
      setTouched(prev => ({ ...prev, [field]: true }));
      setErrors(prev => ({ ...prev, [field]: validateField(field, values[field]) }));
    },
  });

  const validateAll = () => {
    const newErrors = {};
    const newTouched = {};
    for (const field of Object.keys(validationRules)) {
      newTouched[field] = true;
      newErrors[field] = validateField(field, values[field]);
    }
    setTouched(newTouched);
    setErrors(newErrors);
    return Object.values(newErrors).every(e => !e);
  };

  return { values, errors, touched, getFieldProps, validateAll };
}

function SignupForm() {
  const { values, errors, getFieldProps, validateAll } = useValidatedForm(
    { email: '', password: '', confirmPassword: '' },
    {
      email: [(v) => !v.trim() ? 'Required' : '', (v) => !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? 'Invalid email' : ''],
      password: [(v) => !v ? 'Required' : '', (v) => v.length < 8 ? 'Min 8 characters' : ''],
      confirmPassword: [(v) => !v ? 'Required' : '', (v, all) => v !== all.password ? 'Passwords must match' : ''],
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) console.log('Submit:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input {...getFieldProps('email')} placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input {...getFieldProps('password')} type="password" placeholder="Password" />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <input {...getFieldProps('confirmPassword')} type="password" placeholder="Confirm Password" />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}`,
        hints: [
          'Each validation rule is a function: (value, allValues) => errorString | ""',
          'On blur: mark field as touched and validate it',
          'On change: only validate if field was already touched',
        ],
      },
    },
    {
      id: 'mod14-t4',
      title: 'Accessible Form UX',
      explanation: `## Building Accessible Forms

### Label Association

\`\`\`jsx
// ✅ Always associate labels with inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Or wrap the input in the label
<label>
  Email
  <input type="email" />
</label>
\`\`\`

### Error Announcements

\`\`\`jsx
function FormField({ label, error, id, ...inputProps }) {
  const errorId = \\\`\\\${id}-error\\\`;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <span id={errorId} role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  );
}
\`\`\`

### Focus Management

\`\`\`jsx
function FormWithFocusManagement() {
  const firstErrorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      // Focus the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
    }
  };
}
\`\`\`

### Required Fields

\`\`\`jsx
// Use aria-required for custom required indicators
<div>
  <label htmlFor="name">
    Name <span aria-hidden="true">*</span>
  </label>
  <input id="name" aria-required="true" />
</div>
\`\`\`

### Loading/Disabled States

\`\`\`jsx
function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
}
\`\`\`

### Form-Level Error Summary

\`\`\`jsx
function ErrorSummary({ errors }) {
  if (Object.keys(errors).length === 0) return null;

  return (
    <div role="alert" aria-label="Form errors">
      <h3>Please fix the following errors:</h3>
      <ul>
        {Object.entries(errors).map(([field, msg]) => (
          <li key={field}>
            <a href={\\\`#\\\${field}\\\`}>{msg}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,
      task: {
        description:
          'Create an accessible `ContactForm` with proper label association, error announcements (role="alert"), aria-invalid, aria-describedby, focus management on error, and a form-level error summary at the top.',
        starterCode: `function ContactForm() {
  // TODO: Name, email, message fields
  // TODO: Proper labels, aria attributes
  // TODO: Error summary at top
  // TODO: Focus first error field on submit
  return null;
}`,
        solution: `function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Name is required';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email)) errs.email = 'Valid email is required';
    if (!values.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstField = Object.keys(errs)[0];
      document.getElementById(firstField)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const setField = (field, value) => setValues(prev => ({ ...prev, [field]: value }));

  if (submitted) return <p role="status">Thank you for your message!</p>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 && (
        <div role="alert" aria-label="Form errors">
          <ul>
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}><a href={\`#\${field}\`}>{msg}</a></li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
        <input id="name" value={values.name} onChange={e => setField('name', e.target.value)}
          aria-required="true" aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <span id="name-error" role="alert">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
        <input id="email" type="email" value={values.email} onChange={e => setField('email', e.target.value)}
          aria-required="true" aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea id="message" value={values.message} onChange={e => setField('message', e.target.value)}
          aria-required="true" aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <span id="message-error" role="alert">{errors.message}</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}`,
        hints: [
          'Use htmlFor and id to associate labels with inputs',
          'Use aria-invalid={!!error} and aria-describedby pointing to the error element',
          'Focus the first error field when validation fails on submit',
        ],
      },
    },
  ],
  test: [
    {
      id: 'mod14-q1',
      question: 'When is the best time to validate a form field for good UX?',
      options: [
        'On every keystroke from the moment the page loads',
        'Only when the form is submitted',
        'On blur first, then on change after the field has been touched',
        'Every 5 seconds using a polling interval',
      ],
      correctAnswer: 2,
      explanation:
        'Validating on blur (first interaction) then on change (subsequent typing) provides the best UX. The user sees errors after leaving a field and gets immediate feedback as they correct it.',
    },
    {
      id: 'mod14-q2',
      question: 'What is the purpose of aria-describedby on a form input?',
      options: [
        'It styles the input with a specific CSS class',
        'It links the input to a description element (like an error message) for screen readers',
        'It adds a tooltip that appears on hover',
        'It prevents the form from submitting until the description is read',
      ],
      correctAnswer: 1,
      explanation:
        'aria-describedby points to the ID of an element that provides additional description. Screen readers announce this content when the input is focused, making error messages accessible.',
    },
    {
      id: 'mod14-q3',
      question: 'Why use useReducer instead of multiple useState calls for complex forms?',
      options: [
        'useReducer is faster than useState at runtime',
        'useState is deprecated for form handling',
        'It centralizes state transitions and makes complex updates more predictable',
        'useReducer automatically validates form data',
      ],
      correctAnswer: 2,
      explanation:
        'useReducer centralizes all state transitions in a pure reducer function. This makes complex state updates (setting fields, errors, submit state) more predictable and easier to test than scattered useState calls.',
    },
    {
      id: 'mod14-q4',
      question: 'What should happen when form validation fails on submit?',
      options: [
        'Reload the page and clear all form data',
        'Show an alert dialog with all error messages',
        'Focus the first field with an error and display inline errors',
        'Disable all form fields until the user clicks a reset button',
      ],
      correctAnswer: 2,
      explanation:
        'Focusing the first error field and showing inline errors provides the best UX. It guides the user to the problem, keeps their data intact, and is accessible to screen readers via role="alert".',
    },
    {
      id: 'mod14-q5',
      question: 'How do you handle dynamic form fields (add/remove) in React?',
      options: [
        'Use document.createElement to add new DOM elements directly',
        'Store fields as an array in state and use map() with unique keys to render them',
        'Create a new component for each field using React.createComponent',
        'Use refs to track dynamically added inputs outside of React state',
      ],
      correctAnswer: 1,
      explanation:
        'Dynamic fields should be stored as an array in state. Use map() with stable unique IDs (not array index) as keys. Add fields with spread [...fields, newField] and remove with filter().',
    },
  ],
};
