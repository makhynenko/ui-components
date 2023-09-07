import * as React from "react"
import { IconProps } from "../types"

const PhoneIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M22 19.92v-3a2 2 0 0 0-1.72-2.03 12.843 12.843 0 0 1-2.81-.7 2 2 0 0 0-2.11.45l-1.27 1.27a16.001 16.001 0 0 1-6-6l1.27-1.27a2 2 0 0 0 .45-2.11 12.84 12.84 0 0 1-.7-2.81 2 2 0 0 0-2-1.72h-3a2 2 0 0 0-1.99 2.18 19.79 19.79 0 0 0 3.07 8.67 19.5 19.5 0 0 0 6 6 19.791 19.791 0 0 0 8.63 3.07 2 2 0 0 0 2.18-2Z"
    />
  </svg>
)
export default PhoneIcon
