import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from '@next/font/google'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={raleway.className}>
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
}
