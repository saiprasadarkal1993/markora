export default function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <span
      className={`flex items-center justify-center rounded-lg bg-ink ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-[62%] w-[62%]">
        <defs>
          <linearGradient id="navGold" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f0d9a8" />
            <stop offset="45%" stopColor="#d4af6a" />
            <stop offset="100%" stopColor="#b98a4b" />
          </linearGradient>
        </defs>
        <rect x="13" y="16" width="10" height="34" rx="3" fill="url(#navGold)" />
        <rect x="27" y="30" width="10" height="20" rx="3" fill="url(#navGold)" />
        <rect x="41" y="10" width="10" height="40" rx="3" fill="url(#navGold)" />
      </svg>
    </span>
  )
}
