# jskitten

jskitten is a collection of node modules that I have written and been using 
in projects for quite a while, and after having to copy and paste them into 
countless projects, I finally decided to make them into a package.

I hope that they are useful to more people than just me. I have tried to 
make the processes that the package performs as simple and intuitive as 
possible, but as the author you can never be too sure.

## Scopes

Below is a list of the individual modules that are included in this package

### litter

Litter is a logging module that will format the console output of your 
program into a standard format using dates and or times and colors.

```js
const { litter } = require('jskitten');

litter.log('Hello, world!');
litter.info('Hello, world!');
litter.warn('Hello, world!');
litter.error('Hello, world!');
```

### munch 

Much is a file manipulation module that makes folds specific simple tasks 
into single lines of code.

```js
const { munch } = require('jskitten');
```

### color 

Color is a module that exports a range of string colors that can be used to 
change the color of text in the console.

```js
const { color } = require('jskitten');
```