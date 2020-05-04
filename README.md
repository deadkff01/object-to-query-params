# object-to-query-params

A simple library for converting an object to query params.

## Usage

```typescript
import objectToQueryParams from 'object-to-query-params';

const object = {
  name: 'testname',
  password: 'qwerty',
};

objectToQueryParams(object); // name=testname&password=qwerty
```

## License

[MIT](https://github.com/deadkff01/object-to-query-params/blob/master/LICENSE)
