module.exports = {
  '*.{js,jsx,ts,tsx}': () => 'npm run format',
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{css,json,yaml,md}': ['prettier --write'],
};
