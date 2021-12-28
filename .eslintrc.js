module.exports = {
  extends: [
    'airbnb',
    'react-app',
    'react-app/jest',
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
};
