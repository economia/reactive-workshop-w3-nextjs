import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardFooter, CardText, Col } from 'reactstrap'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Article } from '../../types'
import { SHORT_DATE_FORMAT } from '../../constants'

interface IProps {
  article: Article
}

export const ArticlePreview = (props: IProps) => {
  const {
    article: {
      author,
      content,
      created,
      id,
      title,
      updated
    }
  } = props

  return (
    <Col md={3}>
      <Link to={`/article/${id}`} style={{
        color: 'inherit',
        textDecoration: 'none'
      }}>
        <Card>
          <CardBody>
            <CardTitle>
              <h2>
                { title }
              </h2>
            </CardTitle>
            <CardSubtitle>{ author }</CardSubtitle>
            <CardText style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{ content }</CardText>
          </CardBody>
          <CardFooter>
            { updated ? moment(updated).format(SHORT_DATE_FORMAT) : moment(created).format(SHORT_DATE_FORMAT) }
          </CardFooter>
        </Card>
      </Link>
    </Col>
  )
}
