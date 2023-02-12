import * as React from 'react'
import { memo, SVGProps } from 'react'

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12.333h11.901M1 5h22M1 19.667h22"
    />
  </svg>
)
const Memo = memo(SvgMenu)
export default Memo
