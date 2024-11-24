# valibot-pretty-error

![main workflow](https://github.com/winterzz-dev/valibot-pretty-error/actions/workflows/publish.yml/badge.svg)

[Same page on russian.](https://github.com/winterzz-dev/valibot-pretty-error/blob/master/README.ru.md)

A small utility to convert `valibot` library validation errors into readable strings. Does not require complex configuration.

Inspired by the [zod-error](https://github.com/andrewvo89/zod-error) library and built with [smartbundle](https://github.com/XaveScor/smartbundle).

## Installation

Install the library with any package manager:

```bash
npm install valibot-pretty-error
```

## Usage

For the base case, just import the `createErrorWrapper` method from the package:

```typescript
import { createErrorWrapper } from 'valibot-pretty-error';

const prettify = createErrorWrapper();
const result = v.safeParse(ObjectSchema);

prettify(result.issues);
```

## API

To customize the contents of errors, pass an object with parameters as an argument to the `createErrorWrapper` function call:

```typescript
import { TransformExtraData } from './types'

const prettify = createErrorWrapper({
  include: [TransformExtraData.Timestamp, TransformExtraData.Code],
  delimiter: [';']
});
```

### Параметры

The following properties are used to describe the parameters:

| Name                         | Description                                                                                                                                                                             | Data type                                                      |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| include (optional)           | An array of strings, listing the fields that should be in the final message. For convenience it is recommended to use `TransformExtraData` object, e.g. `TransformExtraData.Timestamp`. | string[]                                                       |
| prefix (optional)            | The prefix to be used for each error message.                                                                                                                                           | string                                                         |
| delimiter (optional)         | The string that will be used to combine parts of the message, default: `~`.                                                                                                             | string                                                         |
| parameterPrefixes (optional) | Prefix object for the parameters of the message parts, default: `BASE_PREFIXES` object.                                                                                                 | Partial<Record<string, string>                                 |                                                                                                                                                                                               |                                |
| transformer (optional)       | Transformer function for converting data into a summary message.                                                                                                                        | (data: TransformerData, options: TransformerOptions) => string |

