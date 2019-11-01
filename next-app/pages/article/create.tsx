import React from 'react'
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap'

const Page = () => (
  <>
    <Jumbotron fluid>
      <Container fluid>
        <h1>Create a new article</h1>
      </Container>
    </Jumbotron>
    <Form onSubmit={() => {}}>
      <FormGroup>
        <Label>
          Title
        </Label>
        <Input type='text' name='title' placeholder='Article title'/>
      </FormGroup>
      <FormGroup>
        <Label>
          Author
        </Label>
        <Input type='text' name='author' placeholder='Article author'/>
      </FormGroup>
      <FormGroup>
        <Label>
          Content
        </Label>
        <Input type='textarea' name='content' placeholder='Article content'/>
      </FormGroup>
      <Button>
        Submit
      </Button>
    </Form>
  </>
)

export default Page
