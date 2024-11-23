import { BASE_PREFIXES, DEFAULT_EXTRA_DATA } from '../../constants'
import { TransformCb, TransformerData, TransformerOptions } from '../../types'

export const baseTransformer: TransformCb = (
  data: TransformerData,
  options: TransformerOptions,
) => {
  const {
    prefix = '',
    include = DEFAULT_EXTRA_DATA,
    delimiter = ' ~ ',
    parameterPrefixes,
  } = options

  const prefixes = { ...BASE_PREFIXES, ...parameterPrefixes }

  const result = include.reduce<string[]>(
    (acc, parameter) =>
      acc.concat(prefixes[parameter] + String(data[parameter])),
    [],
  )

  if (prefix) {
    result.unshift(prefix)
  }

  return result.join(delimiter)
}
