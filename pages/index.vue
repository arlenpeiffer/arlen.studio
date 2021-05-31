<template>
  <main>
    <div class="c t">
      <Txt tag="h1">arlen</Txt>
      <Txt tag="h2" flip>a place on the internet</Txt>
    </div>
    <div class="c b">
      <Txt tag="h2" flip>makin' websites</Txt>
      <Txt tag="p">hey@arlen.studio</Txt>
    </div>
  </main>
</template>

<script>
import head from '@/mixins/head'

export default {
  mixins: [head]
}
</script>

<style lang="scss">
main {
  background: $white;
  color: $black;
  min-height: 100vh;
}

.c {
  position: absolute;
  left: $xs;
  right: $xs;
  display: flex;
  justify-content: space-between;
  height: 10rem;
  @include breakpoint {
    left: $m;
    right: $m;
    height: 20rem;
  }
}

.t {
  align-items: flex-start;
  top: $xs;
  @include breakpoint {
    top: $m;
  }
}

.b {
  align-items: flex-end;
  bottom: $xs;
  @include breakpoint {
    bottom: $m;
  }
  .f {
    transform: rotate(180deg);
  }
}
</style>
