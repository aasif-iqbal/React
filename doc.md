Step-1:
npm create vite@6.5.0


<!-- https://tailwindcss.com/docs/installation/using-vite -->

Step-2: 
npm i tailwindcss @tailwindcss/vite

vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
```

App.css
```css
@import "tailwindcss";
```

<!-- https://reactrouter.com/7.6.3/api/data-routers/RouterProvider -->
### Installation

```sql
npm install react-router-dom
```


Step-2:
You're very close! But there's a small confusion: **`@tailwindcss/vite` does not exist** — the correct setup doesn't require any Tailwind-specific plugin in `vite.config.js`.

---

### ✅ Here's the **correct setup** for using **Tailwind CSS with Vite and React**:

---

### ✅ Step-by-step Fix:

#### 1. **Install Tailwind CSS**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will create:

* `tailwind.config.js`
* `postcss.config.js`

---

#### 2. **Configure `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // optional
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

#### 3. **Configure `postcss.config.js`** (generated automatically)

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

#### 4. **Import Tailwind in your `src/index.css` or `src/App.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

#### 5. **Your `vite.config.js` should look like this (NO tailwind plugin needed):**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

---

### ✅ Directory structure should look like:

```
project/
├─ src/
│  ├─ App.jsx
│  ├─ App.css  ← Tailwind directives here
│
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
```

---

### ✅ Done!

Now just run:

```bash
npm run dev
```

And your Tailwind setup with Vite + React is complete and working.

---
