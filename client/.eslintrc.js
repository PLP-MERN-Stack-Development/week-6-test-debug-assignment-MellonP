module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime' // Add this for new JSX transform
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable React import requirement
    'react/jsx-uses-react': 'off' // Disable React import usage check
  }
};