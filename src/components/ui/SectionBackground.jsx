function SectionBackground({ variant = 'default' }) {
  const blobs =
    variant === 'hero'
      ? [
          { className: 'top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/25', delay: '' },
          { className: 'bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20', delay: 'animation-delay-2000' },
          { className: 'top-[40%] left-[-10%] w-[350px] h-[350px] bg-fuchsia-600/15', delay: 'animation-delay-4000' },
        ]
      : [
          { className: 'top-1/4 right-1/4 w-[480px] h-[480px] bg-purple-600/20', delay: '' },
          { className: 'bottom-0 left-1/3 w-[380px] h-[380px] bg-blue-600/15', delay: 'animation-delay-2000' },
          { className: 'top-0 left-0 w-[280px] h-[280px] bg-fuchsia-600/10', delay: 'animation-delay-4000' },
        ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[120px] animate-blob ${blob.delay} ${blob.className}`}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}

export default SectionBackground
