import * as React from "react"
import { IconProps } from "../types"

const BookmarkIcon = ({ size = 24, color = '#000', ...props }: IconProps): React.ReactElement => (
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
      d="m12 16 7 5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-5Z"
    />
  </svg>
)
export default BookmarkIcon
