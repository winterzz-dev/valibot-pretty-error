import { TransformExtraData, TransformOptions } from './types'

export const DEFAULT_EXTRA_DATA = [
  TransformExtraData.Index,
  TransformExtraData.Code,
  TransformExtraData.Path,
  TransformExtraData.Message,
]

export const BASE_PREFIXES: TransformOptions['parameterPrefixes'] = {
  [TransformExtraData.Timestamp]: 'Timestamp: ',
  [TransformExtraData.Index]: 'Error №',
  [TransformExtraData.Code]: 'Function: ',
  [TransformExtraData.Message]: 'Message: ',
  [TransformExtraData.Path]: 'Path: ',
  [TransformExtraData.RandomEmoji]: '',
}
