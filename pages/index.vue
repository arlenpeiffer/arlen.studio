<template>
  <main>
    <div class="c t">
      <Txt tag="h1">arlen</Txt>
      <Txt tag="h2" flip>a place on the internet</Txt>
    </div>
    <div class="c b">
      <Txt tag="h2" flip>makin' websites</Txt>
      <Txt tag="a" href="mailto:hey@arlen.studio?subject=hey!">
        hey@arlen.studio
      </Txt>
    </div>
  </main>
</template>

<script>
import head from '@/mixins/head'

export default {
  mixins: [head]
}
</script>
