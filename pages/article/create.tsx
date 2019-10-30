import React, { FormEvent } from 'react'
import { Button, Container, Form, FormGroup, Input, Jumbotron, Label } from 'reactstrap'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import slugify from 'slugify'

const InputGroup = ({ name, title, type, placeholder }: any) => {
  return (
    <FormGroup>
      <Label>
        { title }
      </Label>
      <Input name={name} type={type} placeholder={placeholder}/>
    </FormGroup>
  )
}

const TextInputGroup = (props: any) => <InputGroup type='text' {...props} />

const TextareaInputGroup = (props: any) => <InputGroup type='textarea' {...props} />

const CreateArticle = () => {
  const formSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const id = slugify(formData.get('title') as string)

    const article = Object.assign({
      id,
    }, Object.fromEntries(formData.entries()))

    await fetch('/api/articles', {
      method: 'PUT',
      body: JSON.stringify(article),
    })

    await Router.push(`/article/${id}`)
  }

  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1>Create a new article</h1>
        </Container>
      </Jumbotron>
      <Form onSubmit={formSubmit}>
        <TextInputGroup name='title' title='Title' placeholder='Article title'/>
        <TextInputGroup name='author' title='Author' placeholder='Article author'/>
        <TextareaInputGroup name='content' title='Content' placeholder='Article content'/>
        <Button>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CreateArticle
