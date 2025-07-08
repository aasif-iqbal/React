npm create vite@6


<!-- https://tailwindcss.com/docs/installation/using-vite -->

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
