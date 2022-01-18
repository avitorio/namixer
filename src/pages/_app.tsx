import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'
import { AppProvider } from 'utils/appContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from 'utils/ga'

const isProduction = process.env.NODE_ENV === 'production'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Namixer</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="The best Game Store in the world!"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <GlobalStyles />
          <NextNprogress
            color={theme.colors.primary}
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
