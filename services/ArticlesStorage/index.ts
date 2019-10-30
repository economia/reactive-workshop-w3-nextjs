import { Article, ArticleData } from '../../types'

class ArticleStorage {
    protected articles: Article[]
    constructor () {
        this.articles = []
    }

    public get (id: string) {
        return this.articles.find(article => article.id === id) || {}
    }

    public create (articleData: ArticleData) {
        const article = Object.assign({
            created: new Date()
        }, articleData)

        this.articles.push(article)

        return article
    }

    public list () {
        return this.articles
    }
}

export default new ArticleStorage()
