import * as React from "react"
import { IconProps } from "../types"

const TagIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="m13.42 20.58 7.17-7.17a2 2 0 0 0 0-2.82L12 2H2v10l8.59 8.58a1.998 1.998 0 0 0 2.83 0ZM7 7h.01"
    />
  </svg>
)
export default TagIcon
