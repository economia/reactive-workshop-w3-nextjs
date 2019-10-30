import React, { FormEvent, useContext } from 'react'
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { ArticlesContext } from '../../context/Articles'
import { ArticleData } from '../../types'

export const CreateArticle = () => {
  const { createArticle } = useContext(ArticlesContext)
  const history = useHistory()

  const handleCreateFormSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const data: ArticleData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as any

    if (createArticle) {
      const { id } = await createArticle(data)
      history.push(`/article/${id}`)
    }

  }

  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1>Create a new article</h1>
        </Container>
      </Jumbotron>
      <Form onSubmit={handleCreateFormSubmit}>
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
}
