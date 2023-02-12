import { DefaultSeoProps } from 'next-seo'

import { webAppUrl } from '@/db/config'

const config: DefaultSeoProps = {
  defaultTitle: 'Matspar | Compare food prices easily',
  titleTemplate: 'Matspar | %s',
  themeColor: '#17a030',
  description:
    'Compare food prices easily and save big on your grocery bill with unlimited comparisons.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: webAppUrl,
    siteName: 'matspar'
  }
}

export default config
