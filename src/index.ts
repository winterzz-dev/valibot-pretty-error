import { baseTransformer } from './modules/base-transformer'
import { createError } from './modules/create-error'
import { Issue, TransformOptions } from './types'

export { BASE_PREFIXES, DEFAULT_EXTRA_DATA } from './constants'
export { baseTransformer } from './modules/base-transformer'
export type {
  Issue,
  TransformCb,
  TransformerData,
  TransformerOptions,
  TransformOptions,
} from './types'
export { TransformExtraData } from './types'

export const createErrorWrapper = (options: TransformOptions = {}) => {
  const transformer = options?.transformer ?? baseTransformer

  return (issues: Issue[]) => {
    const formattedIssues: string[] = []

    issues.forEach((issue, index) => {
      createError(issue, transformer, formattedIssues, options, `${index + 1}`)
    })

    return formattedIssues
  }
}
