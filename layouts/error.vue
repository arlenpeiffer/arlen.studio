<template>
  <Page>
    <template #topRight>whoops!</template>
    <template #bottomLeft>error 404: page not found</template>
    <template #bottomRight>
      <Txt tag="a" href="/">go home</Txt>
    </template>
  </Page>
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
