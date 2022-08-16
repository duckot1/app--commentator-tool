import { Route , version} from '@sportabletech/lib--sportable-react'
import { MatchDashboard } from './MatchDashboard/MatchDashboard'
import { RecentEvents } from './RecentEvents/RecentEvents'
import { useMatchDashboardOptions, useRecentEventOptions } from './options'

console.log(version)

export const sessionPath = '/session'

export enum SessionTabs {
  MATCH_DASHBOARD = 'MATCH_DASHBOARD',
  RECENT_EVENTS = 'RECENT_EVENTS'
}

export const tabConfig = {
  [SessionTabs.MATCH_DASHBOARD]: {
    key: SessionTabs.MATCH_DASHBOARD,
    name: 'Match Dashboard',
    Content: MatchDashboard,
    index: 0,
    useOptions: useMatchDashboardOptions
  },
  [SessionTabs.RECENT_EVENTS]: {
    key: SessionTabs.RECENT_EVENTS,
    name: 'Recent Events',
    Content: RecentEvents,
    index: 1,
    useOptions: useRecentEventOptions
  }
}

export const sessionConfig: Route = {
  path: sessionPath,
  view: {
    type: 'MAIN',
    name: 'Session',
    tabs: tabConfig
    // authenticate: true
  }
}
