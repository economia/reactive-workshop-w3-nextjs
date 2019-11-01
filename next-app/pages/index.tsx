import React from 'react'
import { Container, Jumbotron, Row } from 'reactstrap'
import { Article } from '../types'
import { Preview } from '../components/Preview'

const Page = ({ articles = [] }) => (
  <>
    <Jumbotron fluid>
      <Container fluid>
        <h1>Articles</h1>
      </Container>
    </Jumbotron>
    <Row style={{ margin: '30px' }}>
        {
          articles.map((article: Article) => (
            <Preview/>
          ))
        }
    </Row>
  </>
)

export default Page
