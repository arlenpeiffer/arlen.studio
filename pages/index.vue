<template>
  <main>
    <div class="c t">
      <h1 class="txt">arlen</h1>
      <h2 class="txt f">a place on the internet</h2>
    </div>
    <div class="c b">
      <h2 class="txt f">makin' websites</h2>
      <p class="txt">hey@arlen.studio</p>
    </div>
  </main>
</template>

<script>
export default {}
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
  @include breakpoint('tablet') {
    left: $m;
    right: $m;
    height: 25rem;
  }
}

.t {
  align-items: flex-start;
  top: $xs;
  @include breakpoint('tablet') {
    top: $m;
  }
}

.b {
  align-items: flex-end;
  bottom: $xs;
  @include breakpoint('tablet') {
    bottom: $m;
  }
  .f {
    transform: rotate(180deg);
  }
}

.txt {
  cursor: default;
  font-family: 'Inter';
  font-size: $s;
  @include breakpoint('tablet') {
    font-size: $l;
  }
}

.f {
  writing-mode: vertical-rl;
}
</style>
