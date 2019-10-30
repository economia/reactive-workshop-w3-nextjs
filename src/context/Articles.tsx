import React, { createContext, PureComponent } from 'react'
import { Article, ArticleData } from '../types'

interface IState {
  articles: Article[]
}

export interface IArticlesContext extends IState {
  createArticle?: (articleData: ArticleData) => Promise<Article>
  deleteArticle?: (id: number) => Promise<void>
  editArticle?: (id: number, articleData: ArticleData) => Promise<void>
  findArticleById?: (id: number) => Article
  setArticles?: (articles: Article[]) => Promise<void>
}

const defaultContextValue = {
  articles: [
    {
      id: 1,
      title: 'Test',
      content: 'It\'s working!',
      author: 'admin',
      created: new Date()
    },
    {
      id: 2,
      title: 'Hi',
      content: 'Hello world!',
      author: 'admin',
      created: new Date()
    }
  ]
}

const ArticlesContext = createContext<IArticlesContext>(defaultContextValue)
const ArticlesContextConsumer = ArticlesContext.Consumer

class ArticlesContextProvider extends PureComponent<{}, IState> {
  state: IState = defaultContextValue

  createArticle = async (articleData: ArticleData) => {
    const {
      articles
    } = this.state

    const newArticle = Object.assign({
      id: this.getLastId(),
      created: new Date()
    }, articleData)

    await this.setArticles([ ...articles, newArticle ])

    return newArticle
  }

  deleteArticle = async (id: number): Promise<void> => {
    const {
      articles
    } = this.state

    const newArticles = articles.filter((article) => article.id !== id)

    await this.setArticles(newArticles)
  }

  editArticle = async (id: number, articleData: ArticleData): Promise<void> => {
    const {
      articles
    } = this.state

    const originalArticleIndex = articles.findIndex((article) => article.id === id)

    const newArticles = [ ...articles ]
    newArticles[originalArticleIndex] = Object.assign({}, articles[originalArticleIndex], articleData)

    await this.setArticles(newArticles)
  }

  setArticles = async (articles: Article[]): Promise<void> => {
    return new Promise(resolve => {
      this.setState({
        articles
      }, () => {
        window.localStorage.setItem('articles', JSON.stringify(articles))
        resolve()
      })
    })
  }

  fetchArticles = (): Article[] => {
    try {
      const articles = window.localStorage.getItem('articles')
      return articles ? JSON.parse(articles) : defaultContextValue
    } catch (error) {
      console.log('Error while getting articles from local storage', error)
      return []
    }
  }

  findArticleById = (id: number): Article => {
    const {
      articles
    } = this.state

    const article = articles.find((article) => article.id === id)

    if (!article) {
      throw new Error('Article not found')
    }

    return article
  }

  getLastId = (): number => {
    const {
      articles
    } = this.state

    const lastArticle = articles[articles.length - 1]

    return lastArticle ? lastArticle.id + 1 : 1
  }

  constructor (props = {}) {
    super(props)

    const articles = this.fetchArticles()

    this.state = {
      articles
    }
  }

  render () {
    const {
      props: {
        children
      },
      state: {
        articles
      }
    } = this

    return (
      <ArticlesContext.Provider value={{
        articles,
        createArticle: this.createArticle,
        deleteArticle: this.deleteArticle,
        editArticle: this.editArticle,
        findArticleById: this.findArticleById,
        setArticles: this.setArticles
      }}>
        { children }
      </ArticlesContext.Provider>
    )
  }
}

export {
  ArticlesContext,
  ArticlesContextConsumer,
  ArticlesContextProvider
}
