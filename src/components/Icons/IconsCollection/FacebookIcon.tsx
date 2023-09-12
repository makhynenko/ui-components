import * as React from "react"
import { IconProps } from "../types"

const FacebookIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M15 2h3v4h-3a1 1 0 0 0-1 1v3h4l-1 4h-3v8h-4v-8H7v-4h3V7a5 5 0 0 1 5-5Z"
    />
  </svg>
)
export default FacebookIcon
