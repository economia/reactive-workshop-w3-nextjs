export interface ArticleData {
  id: number
  title: string
  content: string
  author: string
}

export interface Article extends ArticleData {
  created: Date
  updated?: Date
}
