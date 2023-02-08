import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m21.756 20.607-3.438-3.361-.08-.123a.806.806 0 0 0-1.137 0c-2.921 2.68-7.423 2.826-10.519.34-3.096-2.485-3.826-6.83-1.706-10.153 2.12-3.323 6.432-4.593 10.077-2.968 3.645 1.625 5.49 5.642 4.314 9.386a.78.78 0 0 0 .182.771.821.821 0 0 0 .774.232.803.803 0 0 0 .593-.54c1.406-4.442-.718-9.223-5-11.25C11.534.915 6.381 2.251 3.69 6.085.997 9.92 1.575 15.102 5.05 18.28c3.474 3.178 8.8 3.397 12.535.516l3.044 2.975a.819.819 0 0 0 1.137 0 .784.784 0 0 0 0-1.12l-.01-.043Z"
    />
  </svg>
)
const Memo = memo(SvgSearch)
export default Memo
