<template>
  <component
    :is="tag"
    ref="txt"
    :class="classes"
    @mouseenter="toggleHighlight"
    @touchstart="toggleHighlight"
  >
    <slot />
  </component>
</template>

<script>
import _ from 'lodash'
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    flip: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'p'
    }
  },
  data() {
    return {
      highlight: null
    }
  },
  computed: {
    ...mapGetters(['availableHighlights']),
    classes() {
      return ['txt', { f: this.flip }, this.highlight]
    }
  },
  methods: {
    ...mapMutations({
      addHighlight: 'add',
      removeHighlight: 'remove'
    }),
    getRandomHighlight() {
      return _.sample(this.availableHighlights)
    },
    handleSet() {
      this.highlight = this.getRandomHighlight()
      this.addHighlight(this.highlight)
    },
    handleUnset() {
      this.removeHighlight(this.highlight)
      this.highlight = null
    },
    toggleHighlight() {
      this.highlight ? this.handleUnset() : this.handleSet()
    }
  }
}
</script>

<style lang="scss">
.txt {
  font-family: $primary-font;
  font-size: $s;
  font-weight: 800;
  @include breakpoint {
    font-size: $l;
  }
  &::selection {
    background: transparent;
  }
  &:not(a) {
    cursor: default;
  }
}

.f {
  writing-mode: vertical-rl;
}

@include highlights;
</style>
