module.exports = {
  // Define o ambiente
  env: {
    browser: true, // Para código que será executado em um navegador
    es2021: true, // Para a versão ECMAScript 2021
    node: true, // Para código que será executado em um ambiente Node.js
  },
  // Extensões para aplicar
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas do TypeScript
  ],
  // Definição do parser para TypeScript
  parser: '@typescript-eslint/parser',
  // Plugins que você quer usar
  plugins: ['@typescript-eslint'],
  // Configurações adicionais
  rules: {
    // Regras do ESLint
    'no-console': 'warn', // Aviso para console.log, etc.
    'no-unused-vars': 'warn', // Aviso para variáveis não utilizadas
    semi: ['error', 'always'], // Sempre usar ponto e vírgula
    quotes: ['error', 'single'], // Usar aspas simples
    'comma-dangle': ['error', 'always-multiline'], // Vírgula no final de linhas com múltiplas linhas
  },
};
