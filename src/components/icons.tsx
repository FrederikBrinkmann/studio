import type { SVGProps } from 'react';

export function Raum5Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="28"
      viewBox="0 0 100 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RAUM5 Logo"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        RAUM
        <tspan fill="hsl(var(--primary))">5</tspan>
      </text>
    </svg>
  );
}
