function SectionBackground({ tone = 'dark' }) {
  const isLight = tone === 'light'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="heritage-texture" style={{ opacity: isLight ? 0.035 : 0.05 }} />
      {!isLight && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(184,146,74,0.35)] to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 79px,
                rgba(184,146,74,0.4) 79px,
                rgba(184,146,74,0.4) 80px
              )`,
            }}
          />
        </>
      )}
      {isLight && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(107,83,64,0.15)]" />
      )}
    </div>
  )
}

export default SectionBackground
