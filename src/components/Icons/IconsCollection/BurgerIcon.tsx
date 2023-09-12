import * as React from "react"
import { IconProps } from "../types"

const BurgerIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M3 12h18M3 6h18M3 18h18"
    />
  </svg>
)
export default BurgerIcon
