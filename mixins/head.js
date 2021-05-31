export default {
  computed: {
    description() {
      return 'a place on the internet'
    },
    image() {
      return '/og.png'
    },
    title() {
      return "makin' websites | arlen.studio"
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:locale',
          name: 'og:locale',
          content: 'en_US'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'arlen.studio'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://arlen.studio'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        }
      ]
    }
  }
}
