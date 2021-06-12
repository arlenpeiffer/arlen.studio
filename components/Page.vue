<template>
  <main>
    <div class="c t">
      <Txt tag="h1">
        <slot name="topLeft">arlen</slot>
      </Txt>
      <Txt tag="h2" flip>
        <slot name="topRight" />
      </Txt>
    </div>
    <div class="c b">
      <Txt tag="h3" flip>
        <slot name="bottomLeft" />
      </Txt>
      <slot name="bottomRight" />
    </div>
  </main>
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
