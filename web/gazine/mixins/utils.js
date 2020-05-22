export const utils = {
  methods: {
    encodeURLToBase64(url) {
      const buffer = Buffer.from(url)
      const urlBase64 = buffer.toString('base64')
      return urlBase64
    }
  }
}
