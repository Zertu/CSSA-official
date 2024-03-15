import { get, post, put, deleteReq } from './index'
async function getArticles(params = null) {
  return get('articles', params)
}

async function createArticle(articleData, params = null) {
  return post('articles', articleData, params)
}

async function updateArticle(id, articleData, params = null) {
  return put(`articles/${id}`, articleData, params)
}

async function deleteArticle(id, params = null) {
  return deleteReq(`articles/${id}`, params)
}

export { getArticles, createArticle, updateArticle, deleteArticle }
