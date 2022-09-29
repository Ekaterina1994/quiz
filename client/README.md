## Install dependencies

   `pnpm install`
## Start module

   `pnpm run start`

## Start storyBook

   `pnpm run storybook`

due to bug with integration pnpm and storybook sometimes u need to exec next steps:

1. Clear file system cache

   `rm -rf node_modules/.cache`

2. Fix bug line in preset-create-react-app

   `https://github.com/storybookjs/storybook/issues/10668`