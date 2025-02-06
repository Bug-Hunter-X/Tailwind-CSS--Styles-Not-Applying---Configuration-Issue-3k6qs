```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  content: [ // Updated to include all relevant paths.
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@my-custom-component/**/*.{js,jsx,ts,tsx}' // Include any custom components
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```