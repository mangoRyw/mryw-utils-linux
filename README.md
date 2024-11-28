
# mryw-utils-linux

A mini utility library for JavaScript, providing commonly used functions like `debounce`, `throttle`, `deepClone`, and `capitalize`.

## Installation

You can install `mryw-utils-linux` via npm:

```
npm install mryw-utils-linux
```

Or via Yarn:

```
yarn add mryw-utils-linux
```

## Functions

### 1. `debounce(fn, delay)`

A function that delays the execution of the provided function `fn` until after the specified `delay` time in milliseconds has passed since the last time it was invoked.

#### Example:

```javascript
import { debounce } from 'mryw-utils-linux';

const debouncedLog = debounce(() => console.log('Debounced!'), 500);
debouncedLog();  // Will log 'Debounced!' after 500ms of inactivity
```

### 2. `throttle(fn, limit)`

A function that ensures the provided function `fn` is only invoked at most once every `limit` milliseconds.

#### Example:

```javascript
import { throttle } from 'mryw-utils-linux';

const throttledLog = throttle(() => console.log('Throttled!'), 1000);
throttledLog();  // Will log 'Throttled!' only once every second
```

### 3. `deepClone(obj)`

A function that creates a deep copy of the provided object `obj`. This is useful for cloning complex objects without affecting the original object.

#### Example:

```javascript
import { deepClone } from 'mryw-utils-linux';

const obj = { name: 'John', age: 30 };
const clonedObj = deepClone(obj);
console.log(clonedObj);  // { name: 'John', age: 30 }
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Repository

For the latest version and contribution, visit the repository on GitHub:

[GitHub Repository](https://github.com/mangoRyw/mryw-utils-linux)

