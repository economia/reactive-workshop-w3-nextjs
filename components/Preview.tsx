import React from 'react'
import Link from 'next/link'
import { Card, CardBody, CardSubtitle, CardTitle, CardFooter, CardText, Col } from 'reactstrap'
import moment from 'moment'
import { SHORT_DATE_FORMAT } from '../constants'
import { Article } from '../types'

interface Props {
  article: Article
}

export const ArticlePreview = (props: Props) => {
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
      <Link href={`/article/${id}`}>
        <a style={{
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
        </a>
      </Link>
    </Col>
  )
}
