<template>
  <component
    :is="tag"
    :class="classes"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
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
      hovered: false
    }
  },
  computed: {
    classes() {
      return ['txt', { f: this.flip }, this.hovered && this.randomColor()]
    },
    colors() {
      return ['blue', 'brown', 'green', 'orange', 'purple', 'red', 'yellow']
    }
  },
  methods: {
    randomColor() {
      return _.sample(this.colors)
    }
  }
}
</script>

<style lang="scss">
.txt {
  cursor: default;
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
