import Content from './Content'
import { Route } from '@sportabletech/lib--sportable-react'

export const insightsPath = '/insights'

export const insightsConfig: Route = {
  path: insightsPath,
  view: {
    type: 'MAIN',
    name: 'Insights',
    Content
    // authenticate: true
  }
}
