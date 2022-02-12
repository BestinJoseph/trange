/* eslint-disable import/no-anonymous-default-export */
import { createProxyMiddleware } from 'http-proxy-middleware'

export default createProxyMiddleware('/api', {
    target: 'https://whispering-tor-44978.herokuapp.com/api',
    changeOrigin: true
})

