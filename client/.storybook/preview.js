export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'black',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
    ],
  },
}