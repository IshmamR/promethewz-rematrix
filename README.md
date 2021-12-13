<div align="center"><h1>Re-Matrix</h1></div>

<div align="center">

A lightweight matrix animation component

[![NPM version][npm-img]][npm-url] [![NPM downloads][download-img]][download-url]
[![Issues][issue-img]][issue-url] [![Forks][fork-img]][fork-url] [![Stars][star-img]][star-url]
[![License: MIT][mit-img]][mit-url]

</div>

## 🎉 Features

- Zero Dependency on other any plugins
- Supports all [React]-based Project
- Lightweight (<b>1.5Kb</b>)

## 📦 Installation

```bash
npm install @promethewz/rematrix
```

```bash
yarn add @promethewz/rematrix
```

## 🔨 Usage

```jsx
import ReMatrix from "@promethewz/rematrix";
const App = () => (
  <>
    <ReMatrix color={"indigo"} />
  </>
);
```

### Props

| Name       | Type     | e.g.                                      |
| ---------- | -------- | ----------------------------------------- |
| fps        | `number` | `fps={45}`                                |
| fontSize   | `number` | `fontSize={26}`                           |
| color      | `string` | `color={"lightblue"}`                     |
| bgColor    | `string` | `bgColor={"rgba(255,255,255,0.65)"}`      |
| characters | `string` | `characters={"anyRandomCharacterString"}` |
| width      | `number` | `width={500}`                             |
| height     | `number` | `height={600}`                            |

... and any canvas element props :)

### TypeScript

`@promethewz/rematrix` is written in TypeScript with complete definitions :)

## ⌨️ Development

Clone locally:

```bash
$ git clone git@github.com:IshmamR/promethewz-rematrix.git
$ cd promethewz-rematrix
```

If you are using `npm`

```sh
$ npm install
$ npm start
```

Else if you are using `yarn`

```sh
$ yarn
$ yarn start
```

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

All contributions are welcomed.
You can submit any ideas as [pull requests](https://github.com/IshmamR/promethewz-rematrix/pulls) or as [GitHub issues](https://github.com/IshmamR/promethewz-rematrix/issues).

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/r/IshmamR/promethewz-rematrix)

<!-- links -->

[react]: https://reactjs.org/
[mit-img]: https://img.shields.io/github/license/IshmamR/promethewz-rematrix?style=plastic
[mit-url]: ./LICENSE
[npm-img]: https://img.shields.io/npm/v/@promethewz/rematrix.svg?style=plastic
[npm-url]: https://www.npmjs.com/package/@promethewz/rematrix
[download-img]: https://img.shields.io/npm/dt/@promethewz/rematrix.svg?style=plastic
[download-url]: https://www.npmjs.com/package/@promethewz/rematrix
[issue-img]: https://img.shields.io/github/issues/IshmamR/promethewz-rematrix?style=plastic
[issue-url]: https://github.com/IshmamR/promethewz-rematrix/issues
[fork-img]: https://img.shields.io/github/forks/IshmamR/promethewz-rematrix?style=plastic
[fork-url]: https://github.com/IshmamR/promethewz-rematrix/fork
[star-img]: https://img.shields.io/github/stars/IshmamR/promethewz-rematrix?style=plastic
[star-url]: https://github.com/IshmamR/promethewz-rematrix
