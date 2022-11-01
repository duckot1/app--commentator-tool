import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  App,
  ProviderWrapper,
  getStore,
  MSUserHOC,
  ms
} from '@sportabletech/lib--sportable-react'
import packageJson from '../package.json'
import { appConfig, initialPath } from './config'
import imgUrl from './assets/img/vite.svg'

let env = 'development'
let local = true

// Check for Jwt token and set user
let userString = localStorage.getItem('user') || '{}'
let user = JSON.parse(userString)

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

console.log(user)

const initialState = {
  // ...dummyApiState,
  ...ms.dummyApiState,
  authentication: {
    signedIn: !!user.id,
    error: null,
    signingIn: false,
    forgotPassword: false
  },
  user: {
    data: user
  }
}

export const store = getStore(initialState)

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(
  ProviderWrapper(() => {
    const MSApp = MSUserHOC(App)
    console.log()
    return <MSApp appConfig={appConfig} landing={initialPath} />
  }, store)
)
