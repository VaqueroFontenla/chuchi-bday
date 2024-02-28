module.exports = {
  plugins: ['html', 'css'],
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:html/recommended',
    'plugin:css/recommended'
  ],
  rules: {
    // Aquí puedes agregar reglas específicas de ESLint, HTML o CSS si lo deseas
  }
};
