/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import * as jsonApiClient from './index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).webKitJsonApiClient = jsonApiClient

console.warn('Web Kit JSON API Client was added to the window object.')
