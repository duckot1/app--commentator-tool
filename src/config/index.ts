import { AppConfig, sessionLiveRoute, sessionReviewRoute, activityListRoute } from '@sportabletech/lib--sportable-react'

import { isLocal } from './env'

// Routes
import { insightsConfig } from '../Views/Insights/config'
import { sessionConfig } from '../Views/Session/config'

export const initialPath = activityListRoute.path

export const appConfig: AppConfig = {
  isLocal,
  color: 'blue',
  routes: {
    insights: insightsConfig,
    sessionLiveRoute: {
      ...sessionLiveRoute,
      authenticate: true
    },
    sessionReviewRoute: {
      ...sessionReviewRoute,
      authenticate: true
    },
    activityList: {
      ...activityListRoute,
      authenticate: true
    }
  }
}
