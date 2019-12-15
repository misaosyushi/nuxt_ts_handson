export default function({ $axios }) {
  $axios.onRequest((config) => {
    config.baseURL = 'https://x0tqbv0o90.execute-api.ap-northeast-1.amazonaws.com/pro'
  })
}
