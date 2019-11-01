import React from 'react'
import { Col, Container, Jumbotron, Row } from 'reactstrap'
import moment from 'moment'
import { LONG_DATE_FORMAT } from '../../../src/constants'

const Page = ({ article: { title = '', author = '', created = '', updated = '', content = '' } = {} }) => (
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

export default Page
