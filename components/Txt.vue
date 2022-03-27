<template>
  <component
    :is="tag"
    ref="txt"
    :class="classes"
    @mouseenter="toggleHighlighted"
    @touchstart="toggleHighlighted"
  >
    <slot />
  </component>
</template>

<script>
import _ from 'lodash'

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
      highlighted: false
    }
  },
  computed: {
    classes() {
      return ['txt', { f: this.flip }, this.highlighted && this.getHighlight()]
    },
    colors() {
      return ['blue', 'brown', 'green', 'orange', 'purple', 'red', 'yellow']
    }
  },
  methods: {
    getHighlight() {
      return _.sample(this.colors)
    },
    toggleHighlighted() {
      this.highlighted = !this.highlighted
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

// 🎨
.blue {
  color: $blue;
}
.brown {
  color: $brown;
}
.green {
  color: $green;
}
.orange {
  color: $orange;
}
.purple {
  color: $purple;
}
.red {
  color: $red;
}
.yellow {
  color: $yellow;
}
</style>
