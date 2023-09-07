import * as React from "react"
import { IconProps } from "../types"

const DeleteIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="M8 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8l-7-8 7-8ZM18 9l-6 6M12 9l6 6"
    />
  </svg>
)
export default DeleteIcon
