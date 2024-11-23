# valibot-pretty-error

Небольшая утилита для преобразования ошибок валидации библиотеки `valibot` в читаемые строки. Не требует сложной конфигурации

Вдохновлено библиотекой [zod-error](https://github.com/andrewvo89/zod-error) и собрано с помощью [smartbundle](https://github.com/XaveScor/smartbundle).

## Установка

Устанивите библиотеку любым пакетным менеджером:    

```bash
npm install valibot-pretty-error
```

## Использование

Для базового случая достаточно импортировать метод `createErrorWrapper` из пакета:

```typescript
import { createErrorWrapper } from 'valibot-pretty-error';

const prettify = createErrorWrapper();
const result = v.safeParse(ObjectSchema);

prettify(result.issues);
```

## API

Для настройки содержания ошибок необходимо передать объект с параметрами в качестве аргумента в вызов функции `createErrorWrapper`:

```typescript
import { TransformExtraData } from './types'

const prettify = createErrorWrapper({
  include: [TransformExtraData.Timestamp, TransformExtraData.Code],
  delimiter: [';']
});
```

### Параметры

Для описания параметров используются следующие свойства:

| Имя                                 | Описание                                                                                                                                                                                      | Тип данных                                                     |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| include (не обязательный)           | Массив строк, с перечислением полей, которые должны быть в итоговом сообщении. Для удобства рекомендуется использовать объект `TransformExtraData`, например, `TransformExtraData.Timestamp`. | string[]                                                       |
| prefix (не обязательный)            | Префикс, который будет использован для каждого сообщения о ошибкею.                                                                                                                           | string                                                         |
| delimiter (не обязательный)         | Строка, которая будет использоваться для объединения частей сообщения, по умолчанию: `~`.                                                                                                     | string                                                         |
| parameterPrefixes (не обязательный) | Объект с префиксами для параметров частей сообщения, по умолчанию: объект `BASE_PREFIXES`                                                                                                     | Partial<Record<string, string>                                 |                                                                                                                                                                                               |                                |
| transformer (не обязательный)       | Функция-трансформер для преобразования данных в итоговое сообщение.                                                                                                                           | (data: TransformerData, options: TransformerOptions) => string |

