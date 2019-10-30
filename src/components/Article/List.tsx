import React from 'react'
import { Container, Jumbotron, Row } from 'reactstrap'
import { ArticlesContextConsumer, IArticlesContext } from '../../context/Articles'
import { Article } from '../../types'
import { ArticlePreview } from './Preview'

export const ArticlesList = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1>Articles</h1>
        </Container>
      </Jumbotron>
      <Row style={{ margin: '30px' }}>
        <ArticlesContextConsumer>
          {
            ({ articles = [] }: IArticlesContext) => (
              articles.map((article: Article) => (
                <ArticlePreview article={article} key={article.id}/>
              ))
            )
          }
        </ArticlesContextConsumer>
      </Row>
    </>
  )
}
