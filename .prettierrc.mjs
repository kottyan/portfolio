/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
