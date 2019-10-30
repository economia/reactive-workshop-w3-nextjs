import React from 'react'
import moment from 'moment'
import { Col, Container, Jumbotron, Row } from 'reactstrap'
import { LONG_DATE_FORMAT } from '../../constants'
import { Article } from '../../types'
import fetch from 'isomorphic-unfetch'

interface Props {
  article: Article
}

const ArticleDetail = ({ article }: Props) => {
  if (article.id) {
    const {
      author,
      content,
      created,
      title,
      updated
    } = article

    return (
      <>
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container fluid>
                <h1>{ title }</h1>
                <h4>By { author }</h4>
                <p>
                  Posted on { moment(created).format(LONG_DATE_FORMAT) }
                  {
                    updated &&
                    ` | Last modified on ${moment(updated).format(LONG_DATE_FORMAT)}`
                  }
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: '30px' }}>
            { content }
          </Col>
        </Row>
      </>
    )
  } else {
    return (
      <Row>
        <Col>
          Article not found
        </Col>
      </Row>
    )
  }
}

ArticleDetail.getInitialProps = async ({ query }) => {
  const {
    id
  } = query

  const data = await fetch(`http://localhost:3000/api/articles/${id}`)
  const article = await data.json()

  return {
    article
  }
}

export default ArticleDetail
