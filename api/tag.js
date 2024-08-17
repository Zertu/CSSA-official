import { get, post, put, deleteReq } from './index'
async function getTags(params = '') {
  return get(`tags${!params ? '' : `/${params}`}`)
}
export { getTags }
