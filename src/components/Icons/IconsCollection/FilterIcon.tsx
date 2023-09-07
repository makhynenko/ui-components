import * as React from "react"
import { IconProps } from "../types"

const FilterIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M2 3h20l-8 9.46V21l-4-2v-6.54L2 3Z"
    />
  </svg>
)
export default FilterIcon
