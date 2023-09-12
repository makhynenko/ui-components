import * as React from "react"
import { IconProps } from "../types"

const HeartIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M19.055 3.417a5.5 5.5 0 0 1 2.978 7.188 5.5 5.5 0 0 1-1.193 1.785l-1.06 1.06L12 21.23l-7.78-7.78-1.06-1.06a5.501 5.501 0 0 1 7.78-7.78L12 5.67l1.06-1.06a5.5 5.5 0 0 1 5.995-1.193Z"
    />
  </svg>
)
export default HeartIcon
