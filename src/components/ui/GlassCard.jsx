function GlassCard({
  children,
  className = '',
  hover = true,
  active = false,
  glow = 'glass-glow-default',
}) {
  return (
    <div
      className={`glass-card-border h-full ${glow} ${hover ? 'group' : ''} ${active ? 'is-active' : ''} ${className}`}
    >
      <div className="glass-card-inner h-full">{children}</div>
    </div>
  )
}

export default GlassCard
