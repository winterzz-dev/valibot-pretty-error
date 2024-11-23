import { Issue, TransformCb, TransformerOptions } from '../../types'
import { buildPath } from '../build-path'
import { createEmojiGetter } from '../emoji'

const emojiGetter = createEmojiGetter()

export const createError = (
  issue: Issue,
  transformCb: TransformCb,
  resultData: string[],
  transformOptions: TransformerOptions,
  baseIndex = '',
) => {
  resultData.push(
    transformCb(
      {
        'index': baseIndex,
        'message': issue.message,
        'code': issue.type,
        'timestamp': new Date().toISOString(),
        'random-emoji': emojiGetter(),
        'path': buildPath(issue) || '',
      },
      transformOptions,
    ),
  )

  if (issue.issues) {
    issue.issues.forEach((issue, index) =>
      createError(
        issue,
        transformCb,
        resultData,
        transformOptions,
        `${baseIndex}.${index + 1}`,
      ),
    )
  }
}
