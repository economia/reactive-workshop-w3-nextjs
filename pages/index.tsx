import React from 'react'
import { Container, Jumbotron, Row } from 'reactstrap'
import fetch from 'isomorphic-unfetch'
import { Article } from '../types'
import { ArticlePreview } from '../components/Preview'

interface Props {
  articles: Article[]
}

const ArticlesList = ({ articles }: Props) => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1>Articles</h1>
        </Container>
      </Jumbotron>
      <Row style={{ margin: '30px' }}>
        {
          articles.map((article) => (
            <ArticlePreview article={article} key={article.id}/>
          ))
        }
      </Row>
    </>
  )
}

ArticlesList.getInitialProps = async () => {
  const result = await fetch('http://localhost:3000/api/articles') // absolute url is required for SSR
  const articles = await result.json()

  return {
    articles
  }
}

export default ArticlesList
