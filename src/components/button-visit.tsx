import React from "react"

function ButtonVisit({
  href,
  children,
}: {
  href: string
  children?: React.ReactNode | string
}) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="group/button-visit relative inline-flex items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-blue-600 shadow transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
    >
      <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-blue-600 transition-all duration-150 ease-in-out group-hover/button-visit:h-full" />
      <span className="pointer-events-none absolute right-0 pr-4 duration-200 ease-out group-hover/button-visit:translate-x-12">
        <svg
          className="h-5 w-5 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="pointer-events-none absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover/button-visit:translate-x-0">
        <svg
          className="h-5 w-5 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover/button-visit:text-white">
        {children || "Button"}
      </span>
    </a>
  )
}

export default ButtonVisit
