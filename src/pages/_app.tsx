import '@/styles/globals.css'

import { Raleway } from '@next/font/google'
import type { AppProps } from 'next/app'
import { NextAdapter } from 'next-query-params'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { QueryParamProvider } from 'use-query-params'

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <main className={raleway.className}>
            <Component {...pageProps} />
          </main>
        </Hydrate>
      </QueryClientProvider>
    </QueryParamProvider>
  )
}
