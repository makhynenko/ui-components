import * as React from "react"
import { IconProps } from "../types"

const GiftIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12v10H4V12M22 7H2v5h20V7ZM12 22V7M7.5 7H12s-1-5-4.5-5a2.5 2.5 0 1 0 0 5ZM16.5 7H12s1-5 4.5-5a2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
)
export default GiftIcon
