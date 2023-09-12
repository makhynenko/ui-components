import * as React from "react"
import { IconProps } from "../types"

const ArchiveIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 8v13H3V8M23 3H1v5h22V3ZM10 12h4"
    />
  </svg>
)
export default ArchiveIcon
