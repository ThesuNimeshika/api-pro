# API PRO – Modern React + TypeScript + Vite Project

Welcome! This README will guide you through running and understanding this project, even if you have no prior experience. Just follow the steps below.

---

## 🚀 How to Run This Project Locally

1. **Install Node.js**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - This will also install npm (Node Package Manager).

2. **Clone the Repository**
   - Download this project as a ZIP or use Git:
     ```sh
     git clone https://github.com/ThesuNimeshika/api-pro.git
     cd api-pro
     ```

3. **Install Dependencies**
   - Open a terminal in the project folder and run:
     ```sh
     npm install
     ```
   - This will install all required packages.

4. **Start the Development Server**
   - Run:
     ```sh
     npm run dev
     ```
   - The app will open in your browser (usually at http://localhost:5173).

5. **Build for Production (Optional)**
   - To create a production build:
     ```sh
     npm run build
     ```
   - Output will be in the `dist` folder.

---

## 🤖 AI Tools Used

- **GitHub Copilot**
  - Used for generating React components, custom CSS, and responsive layouts.
  - Helped with glassmorphism, gradients, and mobile/desktop design polish.
  - Assisted in debugging, error fixing, and code refactoring.

- **Copilot Chat**
  - Used for step-by-step guidance, answering design and implementation questions.
  - Provided suggestions for best practices and accessibility improvements.

---

## 📝 Project Notes & Decisions

- **No prior knowledge required:** All instructions are step-by-step and beginner-friendly.
- **Custom CSS only:** No Tailwind or external CSS frameworks used.
- **Fully responsive:** All pages are designed to look great on desktop, tablet, and mobile.
- **Modern UI:** Features glassmorphism, vibrant backgrounds, and animated elements.
- **Assets:** PNG and SVG images are used for backgrounds and icons.
- **API Demo:** The About page team section uses a public API for demo data.
- **No backend required:** The contact form is a frontend-only demo.
- **Easy to extend:** You can add new pages or features by following the structure in `src/pages` and `src/components`.

---

## 📂 Project Structure

- `src/` – Main source code
  - `pages/` – Main page components (Home, About, Contact, Pricing, Docs)
  - `components/` – Reusable UI components (Navbar, Button, etc.)
  - `assets/` – Images and icons
- `public/` – Static files
- `App.css` – Global styles
- `vite.config.ts` – Vite configuration
- `tsconfig.*.json` – TypeScript configuration

---

## 💡 Need Help?
If you get stuck, just:
- Check the terminal for error messages.
- Make sure Node.js and npm are installed.
- Try deleting `node_modules` and running `npm install` again.
- Ask for help on [GitHub Discussions](https://github.com/ThesuNimeshika/api-pro/discussions) or open an issue.

---

Happy coding! 🎉

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
