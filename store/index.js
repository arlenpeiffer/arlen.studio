import { highlights } from '@/assets/js/variables'

export const state = () => ({
  highlights: []
})

export const mutations = {
  add(state, payload) {
    state.highlights = [...state.highlights, payload]
  },
  remove(state, payload) {
    state.highlights = state.highlights.filter(
      highlight => highlight !== payload
    )
  }
}

export const getters = {
  highlightClasses: state =>
    highlights.filter(highlight => !state.highlights.includes(highlight))
}
