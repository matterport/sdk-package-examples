# Matterport SDK NPM Starter Packages

This repository contains example code showing how to utilize the NPM package to access the Matterport SDK from different frameworks.

## Usage

1. Install with `yarn` or `npm install`. (Note: npm v7 and later may require `--legacy-peer-deps`)
1. Run `yarn dev` or `npm run dev` to see the default example in React.

You can also run any of the following commands to see the respective frameworks in action. Make sure to replace the `YOUR_SDK_KEY` placeholder in the relevant package with your SDK key ([how to obtain an SDK key](https://matterport.github.io/showcase-sdk/sdk_home.html#how-do-i-obtain-an-sdk-key)):

```sh
# Brunch commonjs
yarn workspace brunch-coffee dev
npm -w brunch-coffee run dev

# React
yarn workspace react dev
npm -w react run dev

# Svelte
yarn workspace svelte dev
npm -w svelte run dev

# Vanilla JS (no framework)
yarn workspace vanilla dev
npm -w vanilla run dev

# Vue 2
yarn workspace vue2 dev
npm -w vue2 run dev

# Vue 3
yarn workspace vue3 dev
npm -w vue3 run dev
```

## Using the Scaffolds

These starters are meant to work outside of this monorepo as well. Simply copy the folder containing the code you wish to start from, and you should be able to do `yarn install` or `npm install` and then `yarn dev` or `npm run dev` to start developing!

## Note

The example code in this repository is released under the MIT license. For the license for the Showcase SDK, please see [these terms](https://matterport.com/legal/platform-subscription-agreement).
