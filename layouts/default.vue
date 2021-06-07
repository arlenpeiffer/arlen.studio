<template>
  <Nuxt />
</template>

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
