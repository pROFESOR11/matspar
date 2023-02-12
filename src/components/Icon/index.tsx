import { SVGProps } from 'react'

import * as Icons from './subComponents'

export type IconName = keyof typeof Icons

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => {
  const Component = Icons[name]

  return <Component {...props} />
}
