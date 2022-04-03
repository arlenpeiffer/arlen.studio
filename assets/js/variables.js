import variables from '@/assets/scss/_variables.scss'

export const highlights = variables.highlights
  // remove quotes
  .replace(/"/g, '')
  // remove commas
  .split(',')
