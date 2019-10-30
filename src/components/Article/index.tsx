import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { Button, ButtonGroup, Col, Container, Jumbotron, Row } from 'reactstrap'
import { ArticlesContextConsumer, IArticlesContext } from '../../context/Articles'
import { LONG_DATE_FORMAT } from '../../constants'

export const ArticleDetail = () => {
  const { id = '' } = useParams()

  return (
    <ArticlesContextConsumer>
      {
        ({ findArticleById }: IArticlesContext) => {
          if (findArticleById) {
            const {
              author,
              content,
              created,
              title,
              updated
            } = findArticleById(parseInt(id))

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
                      <ButtonGroup>
                        <Button tag={Link} to={`/article/${id}/edit`}>
                          Edit
                        </Button>
                        <Button tag={Link} to={`/article/${id}/delete`}>
                          Remove
                        </Button>
                      </ButtonGroup>
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
          }
        }
      }
    </ArticlesContextConsumer>
  )
}
