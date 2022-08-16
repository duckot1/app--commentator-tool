import { AppConfig, sessionRoute } from '@sportabletech/lib--sportable-react'

import { isLocal } from './env'

// Routes
import { insightsConfig } from '../Views/Insights/config'
import { sessionConfig } from '../Views/Session/config'

export const initialPath = '/session'

export const appConfig: AppConfig = {
  isLocal,
  color: 'blue',
  routes: {
    insights: insightsConfig,
    session: {
      ...sessionRoute,
      authenticate: true
    }
  }
}
