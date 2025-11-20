# Thought Architecture Demo - Integration Guide

## Files Included

### Component Files
- `src/pages/ThoughtArchitectureDemo/ThoughtArchitectureDemo.tsx` - Main component
- `src/pages/ThoughtArchitectureDemo/ThoughtArchitectureDemo.css` - Styling

### Asset Files (Platform Logos)
- `public/assets/Claude_logo.png`
- `public/assets/openAI_logo.png`
- `public/assets/Microsoft_Copilot_Logo.png`
- `public/assets/Google_logo.svg.webp`

## Installation Steps

### 1. Copy Files
Place files in the same directory structure as shown above.

### 2. Update App.jsx
Add the lazy import:
```jsx
const ThoughtArchitectureDemo = lazy(() => import('./pages/ThoughtArchitectureDemo/ThoughtArchitectureDemo'));
```

Add the route:
```jsx
<Route path="/demo/thought-architecture" element={<ThoughtArchitectureDemo />} />
```

### 3. Add Dashboard Card (Optional)
In your admin dashboard, add:
```jsx
<div
  className="dashboard-card card"
  onClick={() => navigate('/demo/thought-architecture')}
>
  <div className="card-icon">🧠</div>
  <h2 className="card-title">Thought Architecture Demo</h2>
  <p className="card-description">
    Interactive comparison: Transactional AI vs Strategic Partnership
  </p>
</div>
```

### 4. NPM Dependencies Required
```json
{
  "lucide-react": "^0.553.0",
  "react": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

Install with:
```bash
npm install lucide-react
```

### 5. CSS Variables Required
The component uses these design system variables:
- `--brand-red`
- `--primary-blue`
- `--accent-cyan`
- `--bg-light`
- `--bg-card`
- `--bg-hover`
- `--text-dark`
- `--text-medium`
- `--text-white`
- `--border-light`
- `--border-medium`
- `--shadow-card`

Ensure these are defined in your global CSS.

## Access

Navigate to `/demo/thought-architecture` or click the dashboard card.

## Features

- 5-step Thought Architecture walkthrough
- 4-step Transactional AI comparison
- Interactive step progression with animations
- Official platform logos (Claude, ChatGPT, Copilot, NotebookLM)
- Fully responsive design
