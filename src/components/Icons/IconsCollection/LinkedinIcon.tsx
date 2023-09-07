import * as React from "react"
import { IconProps } from "../types"

const LinkedinIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M20.243 9.757A6 6 0 0 0 10 14v7h4v-7a2 2 0 0 1 4 0v7h4v-7a6 6 0 0 0-1.757-4.243ZM6 9H2v12h4V9ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
)
export default LinkedinIcon
