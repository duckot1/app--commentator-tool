// Get Metrics Server environment
let msEnv = import.meta.env.MS_ENV
let nodeEnv = import.meta.env.NODE_ENV

export const isLocal = msEnv === 'local' || !msEnv
export const isDev = nodeEnv === 'development'

let defaultProto, defaultURL, defaultPort, WS_PORT, SPORTSCASTER_API_PORT

const msUrlCookie = document.cookie
  .split('; ')
  .find((row) => row.startsWith('MS_URL='))

const msUrlCookieValue = msUrlCookie ? msUrlCookie.split('=')[1] : null

if (isLocal) {
  defaultProto = 'http://'
  defaultURL = `127.0.0.1`
  defaultPort = '8888'
  WS_PORT = '8888'
  SPORTSCASTER_API_PORT = '8889'
} else if (msUrlCookieValue) {
  defaultURL = msUrlCookieValue
  defaultProto = 'https://'
  defaultPort = ''
  WS_PORT = '8888'
  SPORTSCASTER_API_PORT = '8889'
} else {
  defaultProto = 'http://'
  defaultURL = `127.0.0.1`
  defaultPort = '8888'
  WS_PORT = '8888'
  SPORTSCASTER_API_PORT = '8889'
}

export const ROOT_URL = isLocal
  ? window.localStorage.getItem('root_url') || defaultURL
  : defaultURL
export const PORT = isLocal
  ? window.localStorage.getItem('port') || defaultPort
  : defaultPort
export const PROTO = isLocal
  ? window.localStorage.getItem('proto') || defaultProto
  : defaultProto

const defaultMqtt = `ws://${ROOT_URL}:15675/ws/`

export const MQTT_ROOT_URL =
  window.localStorage.getItem('mqtt_url') || defaultMqtt
export const MQTT_USERNAME = window.localStorage.getItem('mqtt_username') || ''
export const MQTT_PASSWORD = window.localStorage.getItem('mqtt_password') || ''
export const MQTT2_ROOT_URL =
  window.localStorage.getItem('mqtt2_url') || defaultMqtt
export const MQTT2_USERNAME =
  window.localStorage.getItem('mqtt2_username') || ''
export const MQTT2_PASSWORD =
  window.localStorage.getItem('mqtt2_password') || ''
export const SPORTSCASTER_API_HOST =
  window.localStorage.getItem('sportscaster_api_host') || 'localhost'

export const DOWNLOAD_ROOT_URL = `${PROTO}${ROOT_URL}${PORT ? `:${PORT}` : ''}`
export const API_ROOT_URL = `${PROTO}${ROOT_URL}${PORT ? `:${PORT}` : ''}/api/`
export const SERVICE_ROOT_URL = `${PROTO}${ROOT_URL}${
  PORT ? `:${PORT}` : ''
}/service/`
export const BROADCAST_ROOT_URL = `${PROTO}${ROOT_URL}${
  PORT ? `:${PORT}` : ''
}/broadcast/`
export const ANALYSIS_ROOT_URL = `${PROTO}${ROOT_URL}${
  PORT ? `:${PORT}` : ''
}/analysis/`
export const WS_ROOT_URL = `${ROOT_URL}${WS_PORT ? `:${WS_PORT}` : ''}/ws/`
// URLS for the diagnostics api
export const DEBUG_URL = `${PROTO}${ROOT_URL}:8889/api/`
export const WS_DEBUG_URL = `ws://${ROOT_URL}:8889/ws/`