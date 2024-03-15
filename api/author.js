import { get, post, put, deleteReq } from './index'
async function getAuthors(params = null) {
  return get('author', params)
}

async function createAuthor(articleData, params = null) {
  return post('author', articleData, params)
}

async function updateAuthor(id, articleData, params = null) {
  return put(`author/${id}`, articleData, params)
}

async function deleteAuthor(id, params = null) {
  return deleteReq(`author/${id}`, params)
}

export { getAuthors, createAuthor, updateAuthor, deleteAuthor }
