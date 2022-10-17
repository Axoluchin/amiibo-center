import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'

import Header from '../components/Header'
import { mainTheme } from '../utils/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={mainTheme}>
      <Header/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
