export interface ArticleData {
  title: string
  content: string
  author: string
}

export interface Article extends ArticleData {
  id: number
  created: Date
  updated?: Date
}
