import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  App,
  ProviderWrapper,
  getStore,
  MSUserHOC
} from '@sportabletech/lib--sportable-react'
import packageJson from '../package.json'
import { appConfig, initialPath } from './config'
import imgUrl from './assets/img/vite.svg'

let env = 'development'
let local = true

// Check for Jwt token and set user
let user = localStorage.getItem('user') || '{}'
user = JSON.parse(user)

// Check if user has come from verify email
// If so remove application cache and cookie
export let isVerifyEmailLink = false
if (!local) {
  let initialLocation = { ...window.location }
  const urlParams = new URLSearchParams(initialLocation.search)
  const verifyParam = urlParams.get('verify')
  if (verifyParam) {
    isVerifyEmailLink = true
  }
}

// Set environment
let envString = ''

if (env === 'staging') {
  envString = ' (staging)'
} else if (env === 'development') {
  envString = ' (development)'
}

let initialState = {
  // version: {
  //   ui: `${packageJson.version}`
  // },
  // user: {
  //   data: !isVerifyEmailLink ? user : {}
  // }
}

export const store = getStore(initialState)

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(
  ProviderWrapper(() => {
    console.log(MSUserHOC(() => <App appConfig={appConfig} landing={initialPath} />))
    const MSApp = MSUserHOC(App)
    return <MSApp appConfig={appConfig} landing={initialPath} />
  }, store)
)
