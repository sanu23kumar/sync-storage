<h1 align="center">Welcome to potli 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/potli" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/potli.svg">
  </a>
  <a href="https://github.com/sanu23kumar/sync-storage#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/sanu23kumar/sync-storage/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/sanu23kumar/sync-storage/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/sanu23kumar/potli" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/sanu23kumar/sync-storage#readme)

## Why?

A super lightweight state management library, that uses Context API and AsyncStorage(local storage for web) behind the scenes to:

1. Provide an extremely easy to use API.
2. Retain state even after app kills or browser restarts.
3. Maintains state app-wide, update your value for a key in one screen and it gets updated in the whole app.

## Install

```sh
npm i potli
```

## Usage

# 1. Wrap your app in Store from potli/Store

```sh
import Store from 'potli/Store'
...
const App = () => {
  ...
  return (
    <Store>
      // Your app
    <Store>
  );
}
```

# 2. Use Anywhere in your app

```sh
import Store from 'potli/useStore'
...
const SomeComponent = () => {
  ...
  const {data, setData} = useStore('USER')
  ...
}
```

## Author

👤 **seven**

- Github: [@sanu23kumar](https://github.com/sanu23kumar)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [seven](https://github.com/sanu23kumar).<br />

---
