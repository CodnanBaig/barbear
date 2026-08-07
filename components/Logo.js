export default function Logo({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'compact' : ''}`} aria-label="BARBEAR">
      <svg className="mark" viewBox="0 0 64 80" role="img" aria-hidden="true">
        <path d="M18 4 6 26h9L7 49h11L10 76l23-33h-9L35 22h-9L43 4Z" fill="currentColor" opacity=".95"/>
        <path d="M47 4 35 27h8L33 49h10L35 76l23-33h-9l10-21h-9L60 4Z" fill="currentColor" opacity=".45"/>
        <path d="M26 22h13c8 0 12 3 12 9 0 4-2 7-6 9 5 1 8 5 8 10 0 8-6 12-16 12H19l7-40Zm7 8-2 8h6c4 0 6-1 6-4s-2-4-6-4h-4Zm-4 16-2 9h9c5 0 7-2 7-5 0-3-2-4-7-4h-7Z" fill="var(--logo-fill, #fff)"/>
      </svg>
      <div className="wordmark"><strong>BARBEAR</strong><span>BUILT IN THE EMIRATES</span></div>
    </div>
  )
}
