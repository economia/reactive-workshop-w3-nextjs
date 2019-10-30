import { NextApiRequest, NextApiResponse } from 'next'
import articleStorage from '../../../services/ArticlesStorage'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(articleStorage.get(req.query.id as string))
}
