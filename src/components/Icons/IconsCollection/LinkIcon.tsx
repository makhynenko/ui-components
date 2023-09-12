import * as React from "react"
import { IconProps } from "../types"

const LinkIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M15 7h3a5 5 0 1 1 0 10h-3m-6 0H6A5 5 0 1 1 6 7h3M8 12h8"
    />
  </svg>
)
export default LinkIcon
