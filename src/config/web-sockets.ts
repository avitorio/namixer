import { createContext } from 'react'
import { io } from 'socket.io-client'
let STRAPI_ENDPOINT: string | undefined

if (process.env.NODE_ENV === 'development') {
  STRAPI_ENDPOINT = 'http://localhost:1337'
} else if (process.env.NODE_ENV === 'test') {
  STRAPI_ENDPOINT = ''
} else if (process.env.NODE_ENV === 'production') {
  STRAPI_ENDPOINT = process.env.NEXT_PUBLIC_API_URL
}

export const socket = io(STRAPI_ENDPOINT || '')
export const SocketContext = createContext(socket)
