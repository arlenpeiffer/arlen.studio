<template>
  <Page>
    <template #topRight>a place on the internet</template>
    <template #bottomLeft>makin' websites</template>
    <template #bottomRight>
      <Txt tag="a" href="mailto:hey@arlen.studio?subject=hey!">
        hey@arlen.studio
      </Txt>
    </template>
  </Page>
</template>

<script>
import head from '@/mixins/head'

export default {
  mixins: [head]
}
</script>
