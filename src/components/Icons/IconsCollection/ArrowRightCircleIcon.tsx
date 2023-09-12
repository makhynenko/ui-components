import * as React from "react"
import { IconProps } from "../types"

const ArrowRightCircleIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 16 4-4-4-4M8 12h8"
    />
  </svg>
)
export default ArrowRightCircleIcon
