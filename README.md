<h1>📋 Registration Form - React + Vite + TailwindCSS</h1>

<h3>Projeto de formulário de registro desenvolvido com React, Vite, TailwindCSS, ShadCN UI, React Hook Form e Zod.
  Criado com o objetivo de praticar e aprender tecnologias modernas de frontend, com foco em validação de formulários, acessibilidade e design responsivo.</h3>

[![My Skills](https://skillicons.dev/icons?i=react,ts,tailwind)](https://skillicons.dev)

<a href="https://lucasfgaldinos.github.io/registration-form/">Clique aqui para ver</a>

# Prints:

<div>
  <img height="400" src="./src/assets/desktop-dark.png" alt="Print desktop - theme dark" />
  <img height="400" src="./src/assets/desktop-light.png" alt="Print desktop - theme light" />
</div>

<div>
  <img height="500" src="./src/assets/mobile-dark.png" alt="Print mobile - theme dark" />
  <img height="500" src="./src/assets/mobile-light.png" alt="Print mobile - theme light" />
</div>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
