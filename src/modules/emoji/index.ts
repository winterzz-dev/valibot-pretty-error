import { shuffle } from '../../utils'

const ERROR_EMOJIS = shuffle(['⚠️', '🚨', '🚫', '🚩', '🚧', '🛑'])

export const createEmojiGetter = () => {
  let index = 0

  return () => {
    const emoji = ERROR_EMOJIS[index]

    index = (index + 1) % ERROR_EMOJIS.length

    return emoji
  }
}
