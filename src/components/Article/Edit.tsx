import React, { FormEvent, useContext } from 'react'
import { ArticlesContext } from '../../context/Articles'
import { useHistory, useParams } from 'react-router'
import { ArticleData } from '../../types'
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap'

interface IProps {}

export const EditArticle = () => {
  const { id = '' } = useParams()
  const { editArticle, findArticleById } = useContext(ArticlesContext)
  const history = useHistory()

  const handleEditFormSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const data: ArticleData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as any

    if (editArticle) {
      await editArticle(parseInt(id), data)
      history.push(`/article/${id}`)
    }

  }
  if (findArticleById) {
    const {
      author,
      content,
      title
    } = findArticleById(parseInt(id))

    return (
      <>
        <Jumbotron fluid>
          <Container fluid>
            <h1>Edit article { title }</h1>
          </Container>
        </Jumbotron>
        <Form onSubmit={handleEditFormSubmit}>
          <FormGroup>
            <Label>
              Title
            </Label>
            <Input type='text' name='title' placeholder='Article title' defaultValue={title}/>
          </FormGroup>
          <FormGroup>
            <Label>
              Author
            </Label>
            <Input type='text' name='author' placeholder='Article author' defaultValue={author}/>
          </FormGroup>
          <FormGroup>
            <Label>
              Content
            </Label>
            <Input type='textarea' name='content' placeholder='Article content' defaultValue={content}/>
          </FormGroup>
          <Button>
            Submit
          </Button>
        </Form>
      </>
    )
  } else {
    return (
      <div>
        Article not found
      </div>
    )
  }
}
