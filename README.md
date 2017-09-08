# screeps-typescript-starter-rollup
A starter kit for Screeps TypeScript-based projects, with rollup.

-----

## What are the differences from [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter)?
- First off, instead of using [webpack](https://webpack.js.org/), we use [rollup](https://rollupjs.org/)!
- Secondly, instead of using [grunt](https://gruntjs.com/), we use [gulp](https://gulpjs.com/).
  - This means we also use [gulp-screeps](https://www.npmjs.com/package/gulp-screeps) instead of [grunt-screeps](https://www.npmjs.com/package/grunt-screeps).
- Third, instead of using [Screeps-Typescript-Declarations](https://github.com/screepers/Screeps-Typescript-Declarations), we use the **strict** [screeps-typed](https://github.com/wmulligan/screeps-typed).
- Lastly, we are using [screeps-typescript-profiler](https://github.com/screepers/screeps-typescript-profiler) over [screeps-profiler](https://github.com/screepers/screeps-profiler).

## Features
- Automatic upload of your code via. `gulp push`
- Automatic tree-shaking of your code - no more useless, dead code!
- An easy-to-use profiler.
- Automatic source-map generation.

### Requirements

* [Node.js](https://nodejs.org/en/)

That's it. Seriously.

## Setup


### Installing the required packages

Run the following to setup the enviornment in the working directory

```bash
$ npm install
```

and then, to install gulp _globally_ (if you haven't already), you must run
```bash
$ npm install gulp -g
```

### Set up your crededentials

Create a copy of `screeps.example.js` and call it `screeps.js`
**NOTE**: This contains your crededentials. Do not commit this at all costs! This is covered in the default `.gitignore`, so never remove it.

In the new file, change `email`, `password`, `branch`, `host`, `port` and `secure` to your liking.

Example:
```js
module.exports = {
    email: 'email@email.com',
    password: 'password',
    branch: 'dev',
    ptr: false,
    host: 'screeps.com',
    port: 80,
    secure: true
};
```

## Building your code

To build, tree-shake & rollup your code run:
```bash
$ gulp build
```

To build, tree-shake, rollup, and deploy, run:
```bash
$ gulp push
```
