import * as React from "react"
import { IconProps } from "../types"

const IncreasePicIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
    />
  </svg>
)
export default IncreasePicIcon
