<template>
  <main>
    <div class="c t">
      <Txt tag="h1">arlen</Txt>
      <Txt tag="h2" flip>whoops!</Txt>
    </div>
    <div class="c b">
      <Txt tag="h2" flip>error 404: page not found</Txt>
      <Txt tag="a" href="/">go home</Txt>
    </div>
  </main>
</template>

<script>
import head from '@/mixins/head'

export default {
  mixins: [head],
  computed: {
    title() {
      return 'page not found | arlen.studio'
    }
  }
}
</script>
