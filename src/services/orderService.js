import { instance } from './api'

export const orderPost = (body) => {
  return instance.post(
    'https://frosty-wood-6558.getsandbox.com:443/dishes',
    body
  )
}
