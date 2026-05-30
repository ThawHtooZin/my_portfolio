/** Maps accent strings → unique spinning border glow class */
export const ACCENT_GLOW = {
  'from-violet-500 via-purple-500 to-indigo-600': 'glass-glow-violet',
  'from-violet-500 to-purple-600': 'glass-glow-violet',
  'from-amber-300 via-yellow-500 to-orange-400': 'glass-glow-gold',
  'from-sky-400 via-blue-500 to-indigo-600': 'glass-glow-sky',
  'from-yellow-400 via-amber-500 to-orange-600': 'glass-glow-sun',
  'from-cyan-400 via-blue-500 to-violet-600': 'glass-glow-cyan',
  'from-cyan-400 to-blue-600': 'glass-glow-cyan',
  'from-emerald-400 via-green-500 to-teal-600': 'glass-glow-emerald',
  'from-emerald-400 via-teal-500 to-cyan-600': 'glass-glow-teal',
  'from-orange-400 via-amber-500 to-yellow-500': 'glass-glow-orange',
  'from-rose-400 via-pink-500 to-fuchsia-600': 'glass-glow-rose',
  'from-rose-400 to-orange-500': 'glass-glow-red',
  'from-amber-300 via-yellow-400 to-orange-500': 'glass-glow-amber',
}

export const SKILL_GLOW = {
  'from-rose-400 to-pink-600': 'glass-glow-skill-rose',
  'from-indigo-400 to-indigo-600': 'glass-glow-skill-indigo',
  'from-yellow-400 to-yellow-600': 'glass-glow-skill-yellow',
  'from-cyan-400 to-cyan-600': 'glass-glow-skill-cyan',
  'from-blue-400 to-blue-600': 'glass-glow-skill-blue',
  'from-blue-500 to-blue-700': 'glass-glow-skill-navy',
}

export const CONTACT_GLOW = {
  email: 'glass-glow-violet',
  location: 'glass-glow-blue',
  response: 'glass-glow-amber',
}

export function glowFromAccent(accent) {
  return ACCENT_GLOW[accent] || 'glass-glow-default'
}
