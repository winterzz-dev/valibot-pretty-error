import { getDotPath } from 'valibot'

import { Issue } from '../../types'

export const buildPath = (issue: Issue) => getDotPath(issue)
