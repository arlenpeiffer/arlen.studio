<template>
  <component
    :is="tag"
    ref="txt"
    :class="classes"
    @blur="handleBlur"
    @click="handleMouseLeave"
    @focus="handleFocus"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
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
      focused: false,
      hovered: false
    }
  },
  computed: {
    classes() {
      return ['txt', { f: this.flip }, this.highlighted && this.getHighlight()]
    },
    colors() {
      return ['blue', 'brown', 'green', 'orange', 'purple', 'red', 'yellow']
    },
    highlighted() {
      return this.focused || this.hovered
    }
  },
  methods: {
    getHighlight() {
      return _.sample(this.colors)
    },
    handleBlur() {
      this.focused = false
    },
    handleFocus() {
      if (!this.focused && !this.hovered) {
        this.focused = true
      }
    },
    handleMouseEnter() {
      this.hovered = true
    },
    handleMouseLeave() {
      this.$refs.txt.blur()
      this.hovered = false
    }
  }
}
</script>

<style lang="scss">
.txt {
  cursor: none;
  font-family: $primary-font;
  font-size: $s;
  font-weight: 800;
  @include breakpoint {
    font-size: $l;
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
