import type { PartialDeep } from 'type-fest'
import type { BaseIssue } from 'valibot'

export const TransformExtraData = {
  Timestamp: 'timestamp',
  Index: 'index',
  Path: 'path',
  Code: 'code',
  Message: 'message',
  RandomEmoji: 'random-emoji',
} as const

export interface TransformerData {
  [TransformExtraData.Timestamp]: string
  [TransformExtraData.Index]: string
  [TransformExtraData.Code]: string
  [TransformExtraData.Message]: string
  [TransformExtraData.RandomEmoji]: string
  [TransformExtraData.Path]: string
}

export type Issue = BaseIssue<unknown>
export type TransformCb = (
  data: TransformerData,
  options: TransformerOptions,
) => string

export type TransformOptions = PartialDeep<{
  include: (typeof TransformExtraData)[keyof typeof TransformExtraData][]
  transformer: TransformCb
  prefix: string
  delimiter: string
  parameterPrefixes: Partial<
    Record<(typeof TransformExtraData)[keyof typeof TransformExtraData], string>
  >
}>

export type TransformerOptions = Omit<TransformOptions, 'transformer'>
