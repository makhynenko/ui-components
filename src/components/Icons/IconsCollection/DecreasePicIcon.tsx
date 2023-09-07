import * as React from "react"
import { IconProps } from "../types"

const DecreasePicIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"
    />
  </svg>
)
export default DecreasePicIcon
