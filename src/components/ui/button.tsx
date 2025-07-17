import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  )
}
