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
    ['blue', 'brown', 'green', 'orange', 'purple', 'red', 'yellow'].filter(
      highlight => !state.highlights.includes(highlight)
    )
}
