/**
 * This file contains the basic ESLint rules
 */
module.exports = {
  // https://github.com/testing-library/eslint-plugin-testing-library
  'testing-library/await-async-queries': 'error',
  'testing-library/await-async-utils': 'error',
  'testing-library/no-await-sync-queries': 'error',
  'testing-library/no-container': 'error',
  'testing-library/no-debugging-utils': 'warn',
  'testing-library/no-dom-import': ['error', 'react'],
  'testing-library/no-node-access': 'error',
  'testing-library/no-promise-in-fire-event': 'error',
  'testing-library/no-render-in-lifecycle': 'error',
  'testing-library/no-unnecessary-act': 'error',
  'testing-library/no-wait-for-multiple-assertions': 'error',
  'testing-library/no-wait-for-side-effects': 'error',
  'testing-library/no-wait-for-snapshot': 'error',
  'testing-library/prefer-find-by': 'error',
  'testing-library/prefer-presence-queries': 'error',
  'testing-library/prefer-query-by-disappearance': 'error',
  'testing-library/prefer-screen-queries': 'error',
  'testing-library/render-result-naming-convention': 'error',
};