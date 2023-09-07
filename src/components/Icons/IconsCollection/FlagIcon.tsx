import * as React from "react"
import { IconProps } from "../types"

const FlagIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M8 14c-3 0-4 1-4 1V3s1-1 4-1 5 2 8 2 4-1 4-1v12s-1 1-4 1-5-2-8-2ZM4 22v-7"
    />
  </svg>
)
export default FlagIcon
