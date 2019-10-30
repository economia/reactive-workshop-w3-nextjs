import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { ArticlesContext } from '../../context/Articles'

export const DeleteArticle = () => {
  const { deleteArticle } = useContext(ArticlesContext)
  const { id = '' } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (deleteArticle) {
      deleteArticle(parseInt(id))
      history.push('/')
    }
  }, [])

  return <div/>
}
