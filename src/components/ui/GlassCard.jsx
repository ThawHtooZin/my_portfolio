function GlassCard({
  children,
  className = '',
  hover = true,
  active = false,
  glow = '',
  tone = 'dark',
}) {
  const light = tone === 'light'

  return (
    <div
      className={`glass-card-border h-full ${light ? 'glass-card-border--light' : ''} ${hover ? 'group' : ''} ${active ? 'is-active' : ''} ${glow} ${className}`}
    >
      <div className="glass-card-inner h-full">{children}</div>
    </div>
  )
}

export default GlassCard
