import { NextApiRequest, NextApiResponse } from 'next'
import { ArticleData } from '../../../types'
import articlesStorage from '../../../services/ArticlesStorage'

const createArticle = (data: ArticleData) => {
  return articlesStorage.create(data)
}

const responseOk = (res: NextApiResponse) => (data: any) => res.status(200).json(data)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const sendResponseOk = responseOk(res)

  switch (req.method) {
    case 'PUT':
      const article = createArticle(JSON.parse(req.body))
      return sendResponseOk(article)
    default:
      return sendResponseOk(articlesStorage.list())
  }
}
