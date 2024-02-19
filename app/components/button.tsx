import React from "react";

export default function Button({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-grey text-sm text-white p-2 rounded-md self-stretch h-11 hover:bg-green hover:text-off-black ${className}`}
    >
      {children}
    </button>
  );
}
